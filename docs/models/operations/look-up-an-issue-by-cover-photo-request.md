# LookUpAnIssueByCoverPhotoRequest

## Example Usage

```typescript
import { LookUpAnIssueByCoverPhotoRequest } from "@versedbcom/sdk/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `image`                                                                                                                                                                              | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [operations.Image](../../models/operations/image.md) | :heavy_check_mark:                                                                                                                                                                   | A photo of the comic cover: JPEG, PNG, GIF, BMP or WebP, up to 5MB. Must be an image. Must not be greater than 5120 kilobytes.                                                       |