# GetListEntityUnion

Left out once the entity is gone.


## Supported Types

### `operations.GetListEntity1`

```typescript
const value: operations.GetListEntity1 = {
  id: 5432,
  slug: "the-amazing-spider-man-1",
  name: "The Amazing Spider-Man #1",
  issueNumber: "1",
  releaseDate: "2018-07-11",
  focDate: "2018-06-18",
  imageUrl: "https://...-cover_md.webp",
  isNsfw: false,
  publisher: "Marvel Comics",
  series: {
    id: 88,
    name: "The Amazing Spider-Man",
    slug: "the-amazing-spider-man",
    startYear: 2018,
  },
};
```

### `operations.GetListEntity2`

```typescript
const value: operations.GetListEntity2 = {
  id: 88,
  slug: "the-amazing-spider-man",
  name: "The Amazing Spider-Man",
  startYear: 2018,
  endYear: null,
  status: "Ongoing",
  publicationType: "regular_series",
  imageUrl: "https://...-cover_md.webp",
  isNsfw: false,
  issuesCount: 75,
  publisher: "Marvel Comics",
};
```

### `operations.GetListEntity3`

```typescript
const value: operations.GetListEntity3 = {
  id: 12,
  slug: "spider-man",
  name: "Spider-Man",
  realName: "Peter Parker",
  imageUrl: "https://...-profile_md.webp",
};
```

### `operations.GetListEntity4`

```typescript
const value: operations.GetListEntity4 = {
  id: 6,
  slug: "kraven-s-last-hunt",
  name: "Kraven's Last Hunt",
  imageUrl: "https://...-cover_md.webp",
  issuesCount: 6,
};
```

### `operations.GetListEntity5`

```typescript
const value: operations.GetListEntity5 = {
  id: 42,
  slug: "stan-lee",
  name: "Stan Lee",
  imageUrl: "https://...-profile_md.webp",
};
```

