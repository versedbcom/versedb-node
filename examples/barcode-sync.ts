import dotenv from "dotenv";
dotenv.config();
/**
 * The ComicTagger-style flow: scan a barcode, resolve the issue, record the copy.
 * Requires the `lookup:barcode` and `write:collection` token abilities.
 *
 * To run from the examples directory:
 * npm run build && VERSEDB_TOKEN=... npx tsx barcode-sync.ts
 */

import { VerseDB } from "@versedbcom/sdk";
import * as errors from "@versedbcom/sdk/models/errors";

const verseDB = new VerseDB({
  token: process.env.VERSEDB_TOKEN!,
});

async function main() {
  try {
    const lookup = await verseDB.barcodeLookup.lookupByUPC({
      upc: "75960608936700111",
    });

    const issue = lookup.result?.data;
    if (!issue?.id) return;

    await verseDB.userCollections.addIssueToCollection({
      issueId: issue.id,
      body: {
        condition: "NM",
        pricePaid: 4.99,
      },
    });
    console.log(`Added ${issue.name} to collection`);
  } catch (err) {
    // Pre-1995 barcodes are not unique — a 409 carries candidate matches to pick from.
    if (err instanceof errors.LookupByUPCConflictError) {
      for (const match of err.matches ?? []) {
        console.log(
          `${match.seriesName} #${match.issueNumber} (${match.releaseDate}) — issue id ${match.issueId}`,
        );
      }
      return;
    }
    throw err;
  }
}

main().catch(console.error);
