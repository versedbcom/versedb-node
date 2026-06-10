import dotenv from "dotenv";
dotenv.config();
/**
 * Create a list, add items, reorder, browse popular lists.
 * Requires the `write:list` token ability.
 *
 * To run from the examples directory:
 * npm run build && VERSEDB_TOKEN=... npx tsx lists.ts
 */

import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: process.env.VERSEDB_TOKEN!,
});

async function main() {
  const list = await verseDB.lists.createList({
    title: "Essential X-Men",
    entityType: "issues",
  });

  const listId = list.result?.data?.id;
  if (!listId) return;

  const first = await verseDB.lists.addItemToList({
    listId,
    body: { entityId: 5432 },
  });
  const second = await verseDB.lists.addItemToList({
    listId,
    body: { entityId: 5433 },
  });

  const firstId = first.result?.data?.id;
  const secondId = second.result?.data?.id;
  if (firstId && secondId) {
    await verseDB.lists.reorderItems({
      listId,
      body: { itemIds: [secondId, firstId] },
    });
  }

  const popular = await verseDB.lists.browseLists({ sort: "popular" });
  console.log(popular.result?.data?.map((l) => l.title));
}

main().catch(console.error);
