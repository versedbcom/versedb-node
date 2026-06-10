import dotenv from "dotenv";
dotenv.config();
/**
 * Catalog reads — search series and read issue details.
 *
 * To run from the examples directory:
 * npm run build && VERSEDB_TOKEN=... npx tsx quickstart.ts
 */

import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: process.env.VERSEDB_TOKEN!,
});

async function main() {
  const series = await verseDB.series.listSeries({ q: "batman", limit: 20 });

  for (const s of series.result?.data ?? []) {
    console.log(`${s.name} (${s.startYear ?? "?"}) — series id ${s.id}`);
  }

  const first = series.result?.data?.[0];
  if (first?.id) {
    const issues = await verseDB.series.getSeriesIssues({
      id: first.id,
      limit: 10,
    });
    console.log(issues.result?.data);
  }
}

main().catch(console.error);
