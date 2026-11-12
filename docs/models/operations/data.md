# Data

The issue, review or followed entity the entry is about.


## Supported Types

### `operations.GetActivityFeedData1`

```typescript
const value: operations.GetActivityFeedData1 = {
  issueId: 5432,
  issueName: "Amazing Spider-Man #1",
  seriesName: "Amazing Spider-Man",
  seriesStartYear: 2022,
  coverUrl:
    "https://r2.versedb.com/uploads/issues/asm-5432/asm-5432-cover_md.webp",
};
```

### `operations.GetActivityFeedData2`

```typescript
const value: operations.GetActivityFeedData2 = {
  reviewId: 312,
  issueId: 5432,
  issueName: "Amazing Spider-Man #1",
  seriesName: "Amazing Spider-Man",
  seriesStartYear: 2022,
  rating: "4.5",
  contentPreview:
    "A strong anniversary issue that pays off years of buildup...",
  coverUrl:
    "https://r2.versedb.com/uploads/issues/asm-5432/asm-5432-cover_md.webp",
};
```

### `operations.GetActivityFeedData3`

```typescript
const value: operations.GetActivityFeedData3 = {
  followableType: "title",
  followableId: 123,
  name: "Spider-Man",
  imageUrl: "https://...",
};
```

