# Reading

## Overview

### Available Operations

* [viewYourUnfinishedComicsFromTheVerseDBReader](#viewyourunfinishedcomicsfromtheversedbreader) - View your unfinished comics from the VerseDB reader.
* [viewYearlyReadingStatistics](#viewyearlyreadingstatistics) - View yearly reading statistics.
* [viewYourMonthlyReadingCalendar](#viewyourmonthlyreadingcalendar) - View your monthly reading calendar.
* [viewYourReadingGoal](#viewyourreadinggoal) - View your reading goal.

## viewYourUnfinishedComicsFromTheVerseDBReader

Available with read:user or read:showcase. Returns display fields only;
page URLs, resume positions and private account data are excluded.
Finished and unavailable books are omitted, with content preferences applied.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="viewYourUnfinishedComicsFromTheVerseDBReader" method="get" path="/api/v1/user/reading/in-progress" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.reading.viewYourUnfinishedComicsFromTheVerseDBReader({
    limit: 12,
    page: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { readingViewYourUnfinishedComicsFromTheVerseDBReader } from "@versedbcom/sdk/funcs/reading-view-your-unfinished-comics-from-the-verse-db-reader.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await readingViewYourUnfinishedComicsFromTheVerseDBReader(verseDB, {
    limit: 12,
    page: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("readingViewYourUnfinishedComicsFromTheVerseDBReader failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ViewYourUnfinishedComicsFromTheVerseDBReaderRequest](../../models/operations/view-your-unfinished-comics-from-the-verse-db-reader-request.md)                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ViewYourUnfinishedComicsFromTheVerseDBReaderResponse](../../models/operations/view-your-unfinished-comics-from-the-verse-db-reader-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedErrorError | 401                           | application/json              |
| errors.TooManyRequestsError   | 429                           | application/json              |
| errors.VerseDbDefaultError    | 4XX, 5XX                      | \*/\*                         |

## viewYearlyReadingStatistics

Pro feature. Includes goal progress, daily and monthly counts, pace,
streaks, rankings and completed series for the authenticated member.

Needs `read:user` or `read:showcase`. A `read:showcase` token gets `progress` without
`notify_milestones`, `notify_lapses` and `email_updates`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="viewYearlyReadingStatistics" method="get" path="/api/v1/user/reading-stats/year" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.reading.viewYearlyReadingStatistics({
    year: 2026,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { readingViewYearlyReadingStatistics } from "@versedbcom/sdk/funcs/reading-view-yearly-reading-statistics.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await readingViewYearlyReadingStatistics(verseDB, {
    year: 2026,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("readingViewYearlyReadingStatistics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ViewYearlyReadingStatisticsRequest](../../models/operations/view-yearly-reading-statistics-request.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ViewYearlyReadingStatisticsResponse](../../models/operations/view-yearly-reading-statistics-response.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.ViewYearlyReadingStatisticsUnauthorizedError | 401                                                 | application/json                                    |
| errors.ViewYearlyReadingStatisticsForbiddenError    | 403                                                 | application/json                                    |
| errors.TooManyRequestsError                         | 429                                                 | application/json                                    |
| errors.VerseDbDefaultError                          | 4XX, 5XX                                            | \*/\*                                               |

## viewYourMonthlyReadingCalendar

Pro feature. Returns up to 60 reads per page, newest first.

Needs `read:user` or `read:showcase`; both get the same response.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="viewYourMonthlyReadingCalendar" method="get" path="/api/v1/user/reading-stats/calendar" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.reading.viewYourMonthlyReadingCalendar({
    year: 2026,
    month: 9,
    page: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { readingViewYourMonthlyReadingCalendar } from "@versedbcom/sdk/funcs/reading-view-your-monthly-reading-calendar.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await readingViewYourMonthlyReadingCalendar(verseDB, {
    year: 2026,
    month: 9,
    page: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("readingViewYourMonthlyReadingCalendar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ViewYourMonthlyReadingCalendarRequest](../../models/operations/view-your-monthly-reading-calendar-request.md)                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ViewYourMonthlyReadingCalendarResponse](../../models/operations/view-your-monthly-reading-calendar-response.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ViewYourMonthlyReadingCalendarUnauthorizedError | 401                                                    | application/json                                       |
| errors.ViewYourMonthlyReadingCalendarForbiddenError    | 403                                                    | application/json                                       |
| errors.TooManyRequestsError                            | 429                                                    | application/json                                       |
| errors.VerseDbDefaultError                             | 4XX, 5XX                                               | \*/\*                                                  |

## viewYourReadingGoal

Available to every authenticated member. Returns only the caller's goal.

Needs `read:user` or `read:showcase`. A `read:showcase` token gets the goal without
`notify_milestones`, `notify_lapses` and `email_updates`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="viewYourReadingGoal" method="get" path="/api/v1/user/reading-goal" -->
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.reading.viewYourReadingGoal({
    year: 2026,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VerseDBCore } from "@versedbcom/sdk/core.js";
import { readingViewYourReadingGoal } from "@versedbcom/sdk/funcs/reading-view-your-reading-goal.js";

// Use `VerseDBCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const verseDB = new VerseDBCore({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await readingViewYourReadingGoal(verseDB, {
    year: 2026,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("readingViewYourReadingGoal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ViewYourReadingGoalRequest](../../models/operations/view-your-reading-goal-request.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ViewYourReadingGoalResponse](../../models/operations/view-your-reading-goal-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.ViewYourReadingGoalUnauthorizedError | 401                                         | application/json                            |
| errors.TooManyRequestsError                 | 429                                         | application/json                            |
| errors.VerseDbDefaultError                  | 4XX, 5XX                                    | \*/\*                                       |