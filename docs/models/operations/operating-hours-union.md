# OperatingHoursUnion

Monday first, by lowercase day name; `closed` or 24-hour ranges joined by commas. A missing day has unknown hours.


## Supported Types

### `operations.OperatingHours`

```typescript
const value: operations.OperatingHours = {
  monday: "10:00-20:00",
  sunday: "closed",
};
```

### `any[]`

```typescript
const value: any[] = [
  "<value 1>",
  "<value 2>",
  "<value 3>",
];
```

