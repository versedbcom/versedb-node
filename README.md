# VerseDB TypeScript SDK

The official TypeScript/JavaScript SDK for the [VerseDB](https://versedb.com) public API — search and browse a database of 1M+ comics (series, issues, creators, characters, publishers, story arcs), look up barcodes, and manage your collection and lists.

> Published on npm as [`@versedbcom/sdk`](https://www.npmjs.com/package/@versedbcom/sdk). The code is generated from the [VerseDB OpenAPI spec](https://versedb.com/api/v1/openapi.json) via [Speakeasy](https://www.speakeasy.com) and republished automatically whenever the API changes.

## Installation

```bash
npm install @versedbcom/sdk
```

## Quickstart

Get a personal API token at [versedb.com/my/apps/custom](https://versedb.com/my/apps/custom).

```ts
import { VerseDB } from "@versedbcom/sdk";

const vdb = new VerseDB({ token: process.env.VERSEDB_TOKEN });

const { result } = await vdb.series.listSeries({ q: "batman", limit: 20 });
console.log(result.data);
```

That's it — no base URL, bearer headers, or JSON parsing. The client targets `https://versedb.com/api/v1`.

## Why use the SDK instead of raw HTTP?

- **Typed models and autocomplete.** `Series`, `Issue`, `Creator`, and the rest are generated types — mediums, publication types, and issue formats are enums, not magic strings.
- **Pagination handled.** List endpoints accept `page`/`limit` and return typed `meta` paging info (`currentPage`, `lastPage`, `total`) — no untyped `next_page_url` strings.
- **Rate limits won't surprise you.** Every response exposes the `X-RateLimit-*` headers as typed values, `429`s surface as typed errors carrying `Retry-After`, and automatic backoff is one `retryConfig` option away (see [Retries](#retries) below). Limits: reads 300/hr free, 1,000/hr PRO; writes 150/hr free, 500/hr PRO.
- **Typed errors.** `401`, `403` (missing scope), `409`, and `422` surface as catchable, typed errors instead of raw responses.
- **Auth set once** on the client, not per request.
- **Stays in sync.** Regenerated from the spec on every API change; v1 evolves additively, so new fields and endpoints arrive as non-breaking minor bumps.

## Recipes

Runnable versions live in [examples/](examples/).

### Barcode lookup → collection sync

Requires the `lookup:barcode` and `write:collection` scopes.

```ts
const { result } = await vdb.barcodeLookup.lookupByUPC({ upc: "75960608936800111" });

await vdb.userCollections.addIssueToCollection({
  issueId: result.data!.id!,
  body: { condition: "NM", pricePaid: 4.99 },
});
```

Pre-1995 barcodes are not unique — a `409` response carries a `matches` array for the user to pick from.

### Lists

Requires the `write:list` scope.

```ts
const { result } = await vdb.lists.createList({
  title: "Essential X-Men",
  entityType: "issues",
});

await vdb.lists.addItemToList({
  listId: result.data!.id!,
  body: { entityId: 5432 },
});
```

## Token scopes

| Scope | Grants |
|---|---|
| `read:public` | Catalog reads (default) |
| `lookup:barcode` | UPC/ISBN lookup |
| `write:collection` | Manage your collection |
| `write:list` | Manage your lists |

Scopes are chosen when creating a token at `/my/apps/custom`; a missing scope surfaces as a typed `403` error.

## API reference

- Interactive docs: [versedb.com/api/docs](https://versedb.com/api/docs)
- OpenAPI 3.1 spec: [versedb.com/api/v1/openapi.json](https://versedb.com/api/v1/openapi.json)

## Showcase

[ComicTagger](https://github.com/comictagger/comictagger)'s VerseDB talker uses the v1 API end to end — barcode lookup and catalog reads while tagging comic archives.

## Contributing

The SDK source is generated — see [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR.

## License

[MIT](LICENSE)

<!-- Start Summary [summary] -->
## Summary

VerseDB API Documentation: REST API for accessing comic book data, managing collections, and building integrations with VerseDB.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [VerseDB TypeScript SDK](#versedb-typescript-sdk)
  * [Installation](#installation)
  * [Quickstart](#quickstart)
  * [Why use the SDK instead of raw HTTP?](#why-use-the-sdk-instead-of-raw-http)
  * [Recipes](#recipes)
  * [Token scopes](#token-scopes)
  * [API reference](#api-reference)
  * [Showcase](#showcase)
  * [Contributing](#contributing)
  * [License](#license)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @versedbcom/sdk
```

### PNPM

```bash
pnpm add @versedbcom/sdk
```

### Bun

```bash
bun add @versedbcom/sdk
```

### Yarn

```bash
yarn add @versedbcom/sdk
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import("@versedbcom/sdk")` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.getTheAuthenticatedUser();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name    | Type | Scheme      |
| ------- | ---- | ----------- |
| `token` | http | HTTP Bearer |

To authenticate with the API the `token` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.getTheAuthenticatedUser();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [BarcodeLookup](docs/sdks/barcodelookup/README.md)

* [lookupByUPC](docs/sdks/barcodelookup/README.md#lookupbyupc) - Lookup by UPC.
* [lookupByISBN](docs/sdks/barcodelookup/README.md#lookupbyisbn) - Lookup by ISBN.
* [lookupByDistributorCode](docs/sdks/barcodelookup/README.md#lookupbydistributorcode) - Lookup by distributor code.

### [Characters](docs/sdks/characters/README.md)

* [listCharacters](docs/sdks/characters/README.md#listcharacters) - List characters.
* [getCharacterDetails](docs/sdks/characters/README.md#getcharacterdetails) - Get character details.
* [getCharacterSeries](docs/sdks/characters/README.md#getcharacterseries) - Get character series.
* [getCharacterIssues](docs/sdks/characters/README.md#getcharacterissues) - Get character issues.
* [getCharacterTeams](docs/sdks/characters/README.md#getcharacterteams) - Get character teams.

### [ComicShops](docs/sdks/comicshops/README.md)

* [listComicShops](docs/sdks/comicshops/README.md#listcomicshops) - List comic shops.
* [getAComicShop](docs/sdks/comicshops/README.md#getacomicshop) - Get a comic shop.

### [ConnectToVerseDB](docs/sdks/connecttoversedb/README.md)

* [exchangeAConnectCodeForAToken](docs/sdks/connecttoversedb/README.md#exchangeaconnectcodeforatoken) - Exchange a Connect code for a token

### [CoverLookup](docs/sdks/coverlookup/README.md)

* [lookUpAnIssueByCoverPhoto](docs/sdks/coverlookup/README.md#lookupanissuebycoverphoto) - Look up an issue by cover photo.

### [Creators](docs/sdks/creators/README.md)

* [listCreators](docs/sdks/creators/README.md#listcreators) - List creators.
* [getCreatorDetails](docs/sdks/creators/README.md#getcreatordetails) - Get creator details.
* [getCreatorsIssues](docs/sdks/creators/README.md#getcreatorsissues) - Get creator's issues.
* [getCreatorsSeries](docs/sdks/creators/README.md#getcreatorsseries) - Get creator's series.
* [getCreatorsBlogPosts](docs/sdks/creators/README.md#getcreatorsblogposts) - Get creator's blog posts.

### [Discovery](docs/sdks/discovery/README.md)

* [fOCDeadlines](docs/sdks/discovery/README.md#focdeadlines) - FOC deadlines.
* [followUpdates](docs/sdks/discovery/README.md#followupdates) - Follow updates.
* [upcoming1Issues](docs/sdks/discovery/README.md#upcoming1issues) - Upcoming #1 issues.

### [Events](docs/sdks/events/README.md)

* [listEvents](docs/sdks/events/README.md#listevents) - List events.
* [getAnEvent](docs/sdks/events/README.md#getanevent) - Get an event.

### [Imprints](docs/sdks/imprints/README.md)

* [getImprintDetails](docs/sdks/imprints/README.md#getimprintdetails) - Get imprint details
* [listImprints](docs/sdks/imprints/README.md#listimprints) - List imprints

### [Issues](docs/sdks/issues/README.md)

* [getIssueVariants](docs/sdks/issues/README.md#getissuevariants) - Get issue variants.
* [getIssueDetails](docs/sdks/issues/README.md#getissuedetails) - Get issue details.
* [listIssues](docs/sdks/issues/README.md#listissues) - List issues.
* [getVariantDetails](docs/sdks/issues/README.md#getvariantdetails) - Get variant details.
* [getKeyIssueReasons](docs/sdks/issues/README.md#getkeyissuereasons) - Get key issue reasons.
* [getIssueCreators](docs/sdks/issues/README.md#getissuecreators) - Get issue creators.
* [getIssueCharacters](docs/sdks/issues/README.md#getissuecharacters) - Get issue characters.

### [KeyIssueReasons](docs/sdks/keyissuereasons/README.md)

* [listKeyIssueReasons](docs/sdks/keyissuereasons/README.md#listkeyissuereasons) - List key issue reasons.

### [Lists](docs/sdks/lists/README.md)

* [browseLists](docs/sdks/lists/README.md#browselists) - Browse lists.
* [createList](docs/sdks/lists/README.md#createlist) - Create list.
* [browseSystemLists](docs/sdks/lists/README.md#browsesystemlists) - Browse system lists.
* [getUsersLists](docs/sdks/lists/README.md#getuserslists) - Get user's lists.
* [getList](docs/sdks/lists/README.md#getlist) - Get list.
* [updateList](docs/sdks/lists/README.md#updatelist) - Update list.
* [deleteList](docs/sdks/lists/README.md#deletelist) - Delete list.
* [saveList](docs/sdks/lists/README.md#savelist) - Save list.
* [unsaveList](docs/sdks/lists/README.md#unsavelist) - Unsave list.
* [likeListOrReactToIt](docs/sdks/lists/README.md#likelistorreacttoit) - Like list, or react to it.
* [unlikeList](docs/sdks/lists/README.md#unlikelist) - Unlike list.
* [convertAListToMixed](docs/sdks/lists/README.md#convertalisttomixed) - Open a list to any type.
* [stopAListUpdatingItself](docs/sdks/lists/README.md#stopalistupdatingitself) - Stop a list updating itself.
* [mergeAListIntoThisOne](docs/sdks/lists/README.md#mergealistintothisone) - Merge a list into this one.
* [addItemToList](docs/sdks/lists/README.md#additemtolist) - Add item to list.
* [removeItemFromList](docs/sdks/lists/README.md#removeitemfromlist) - Remove item from list.
* [reorderItems](docs/sdks/lists/README.md#reorderitems) - Reorder items.

### [Podcasts](docs/sdks/podcasts/README.md)

* [listAllPodcastsWithOptionalSearch](docs/sdks/podcasts/README.md#listallpodcastswithoptionalsearch) - List all podcasts with optional search
* [getASpecificPodcast](docs/sdks/podcasts/README.md#getaspecificpodcast) - Get a specific podcast.

### [Publishers](docs/sdks/publishers/README.md)

* [getPublisherDetails](docs/sdks/publishers/README.md#getpublisherdetails) - Get publisher details
* [listAllPublishersWithOptionalSearch](docs/sdks/publishers/README.md#listallpublisherswithoptionalsearch) - List all publishers with optional search

### [Reading](docs/sdks/reading/README.md)

* [viewYourReadingGoal](docs/sdks/reading/README.md#viewyourreadinggoal) - View your reading goal.
* [viewYearlyReadingStatistics](docs/sdks/reading/README.md#viewyearlyreadingstatistics) - View yearly reading statistics.
* [viewYourMonthlyReadingCalendar](docs/sdks/reading/README.md#viewyourmonthlyreadingcalendar) - View your monthly reading calendar.
* [viewYourUnfinishedComicsFromTheVerseDBReader](docs/sdks/reading/README.md#viewyourunfinishedcomicsfromtheversedbreader) - View your unfinished comics from the VerseDB reader.

### [Series](docs/sdks/series/README.md)

* [listSeries](docs/sdks/series/README.md#listseries) - List series.
* [getSeriesIssues](docs/sdks/series/README.md#getseriesissues) - Get series issues.
* [getSeriesDetails](docs/sdks/series/README.md#getseriesdetails) - Get series details.
* [getSeriesCreators](docs/sdks/series/README.md#getseriescreators) - Get series creators.
* [getSeriesCharacters](docs/sdks/series/README.md#getseriescharacters) - Get series characters.

### [StoryArcs](docs/sdks/storyarcs/README.md)

* [listAllStoryArcsWithOptionalSearch](docs/sdks/storyarcs/README.md#listallstoryarcswithoptionalsearch) - List all story arcs with optional search
* [getStoryArcsForASpecificIssue](docs/sdks/storyarcs/README.md#getstoryarcsforaspecificissue) - Get story arcs for a specific issue
* [getStoryArcDetail](docs/sdks/storyarcs/README.md#getstoryarcdetail) - Get story arc detail.
* [getStoryArcsForASpecificUniverse](docs/sdks/storyarcs/README.md#getstoryarcsforaspecificuniverse) - Get story arcs for a specific universe
* [getStoryArcsForASpecificCharacter](docs/sdks/storyarcs/README.md#getstoryarcsforaspecificcharacter) - Get story arcs for a specific character

### [Teams](docs/sdks/teams/README.md)

* [listAllTeamsWithOptionalSearch](docs/sdks/teams/README.md#listallteamswithoptionalsearch) - List all teams with optional search
* [getASpecificTeam](docs/sdks/teams/README.md#getaspecificteam) - Get a specific team
* [getCharactersForASpecificTeammembers](docs/sdks/teams/README.md#getcharactersforaspecificteammembers) - Get characters for a specific team (members)
* [getSeriesForASpecificTeam](docs/sdks/teams/README.md#getseriesforaspecificteam) - Get series for a specific team
* [getIssuesForASpecificTeam](docs/sdks/teams/README.md#getissuesforaspecificteam) - Get issues for a specific team

### [Titles](docs/sdks/titles/README.md)

* [getASpecificTitle](docs/sdks/titles/README.md#getaspecifictitle) - Get a specific title
* [listTitles](docs/sdks/titles/README.md#listtitles) - List titles

### [Universes](docs/sdks/universes/README.md)

* [listUniverses](docs/sdks/universes/README.md#listuniverses) - List universes
* [getASpecificUniverse](docs/sdks/universes/README.md#getaspecificuniverse) - Get a specific universe

### [User](docs/sdks/user/README.md)

* [getTheAuthenticatedUser](docs/sdks/user/README.md#gettheauthenticateduser) - Get the authenticated user.
* [listFollows](docs/sdks/user/README.md#listfollows) - List follows.
* [~~getActivityFeed~~](docs/sdks/user/README.md#getactivityfeed) - Get activity feed. :warning: **Deprecated**
* [checkFollowStatus](docs/sdks/user/README.md#checkfollowstatus) - Check follow status.
* [listReadStatus](docs/sdks/user/README.md#listreadstatus) - List read status.
* [listWishlist](docs/sdks/user/README.md#listwishlist) - List wishlist.
* [listCollection](docs/sdks/user/README.md#listcollection) - List collection.
* [checkIssueInCollection](docs/sdks/user/README.md#checkissueincollection) - Check issue in collection.
* [listPullList](docs/sdks/user/README.md#listpulllist) - List pull list.
* [markAsRead](docs/sdks/user/README.md#markasread) - Mark as read.
* [markAsUnread](docs/sdks/user/README.md#markasunread) - Mark as unread.
* [editReadingDate](docs/sdks/user/README.md#editreadingdate) - Edit reading date.
* [addToWishlist](docs/sdks/user/README.md#addtowishlist) - Add to wishlist.
* [removeFromWishlist](docs/sdks/user/README.md#removefromwishlist) - Remove from wishlist.
* [addToPullList](docs/sdks/user/README.md#addtopulllist) - Add to pull list.
* [removeFromPullList](docs/sdks/user/README.md#removefrompulllist) - Remove from pull list.
* [addIssueToCollection](docs/sdks/user/README.md#addissuetocollection) - Add issue to collection.
* [removeIssueFromCollection](docs/sdks/user/README.md#removeissuefromcollection) - Remove issue from collection.
* [updateCollectionItem](docs/sdks/user/README.md#updatecollectionitem) - Update collection item.
* [lendACopyOut](docs/sdks/user/README.md#lendacopyout) - Lend a copy out.
* [markTheCopysOpenLoanReturned](docs/sdks/user/README.md#markthecopysopenloanreturned) - Mark the copy's open loan returned.
* [followContent](docs/sdks/user/README.md#followcontent) - Follow content.
* [unfollowContent](docs/sdks/user/README.md#unfollowcontent) - Unfollow content.

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`barcodeLookupLookupByDistributorCode`](docs/sdks/barcodelookup/README.md#lookupbydistributorcode) - Lookup by distributor code.
- [`barcodeLookupLookupByISBN`](docs/sdks/barcodelookup/README.md#lookupbyisbn) - Lookup by ISBN.
- [`barcodeLookupLookupByUPC`](docs/sdks/barcodelookup/README.md#lookupbyupc) - Lookup by UPC.
- [`charactersGetCharacterDetails`](docs/sdks/characters/README.md#getcharacterdetails) - Get character details.
- [`charactersGetCharacterIssues`](docs/sdks/characters/README.md#getcharacterissues) - Get character issues.
- [`charactersGetCharacterSeries`](docs/sdks/characters/README.md#getcharacterseries) - Get character series.
- [`charactersGetCharacterTeams`](docs/sdks/characters/README.md#getcharacterteams) - Get character teams.
- [`charactersListCharacters`](docs/sdks/characters/README.md#listcharacters) - List characters.
- [`comicShopsGetAComicShop`](docs/sdks/comicshops/README.md#getacomicshop) - Get a comic shop.
- [`comicShopsListComicShops`](docs/sdks/comicshops/README.md#listcomicshops) - List comic shops.
- [`connectToVerseDBExchangeAConnectCodeForAToken`](docs/sdks/connecttoversedb/README.md#exchangeaconnectcodeforatoken) - Exchange a Connect code for a token
- [`coverLookupLookUpAnIssueByCoverPhoto`](docs/sdks/coverlookup/README.md#lookupanissuebycoverphoto) - Look up an issue by cover photo.
- [`creatorsGetCreatorDetails`](docs/sdks/creators/README.md#getcreatordetails) - Get creator details.
- [`creatorsGetCreatorsBlogPosts`](docs/sdks/creators/README.md#getcreatorsblogposts) - Get creator's blog posts.
- [`creatorsGetCreatorsIssues`](docs/sdks/creators/README.md#getcreatorsissues) - Get creator's issues.
- [`creatorsGetCreatorsSeries`](docs/sdks/creators/README.md#getcreatorsseries) - Get creator's series.
- [`creatorsListCreators`](docs/sdks/creators/README.md#listcreators) - List creators.
- [`discoveryFOCDeadlines`](docs/sdks/discovery/README.md#focdeadlines) - FOC deadlines.
- [`discoveryFollowUpdates`](docs/sdks/discovery/README.md#followupdates) - Follow updates.
- [`discoveryUpcoming1Issues`](docs/sdks/discovery/README.md#upcoming1issues) - Upcoming #1 issues.
- [`eventsGetAnEvent`](docs/sdks/events/README.md#getanevent) - Get an event.
- [`eventsListEvents`](docs/sdks/events/README.md#listevents) - List events.
- [`imprintsGetImprintDetails`](docs/sdks/imprints/README.md#getimprintdetails) - Get imprint details
- [`imprintsListImprints`](docs/sdks/imprints/README.md#listimprints) - List imprints
- [`issuesGetIssueCharacters`](docs/sdks/issues/README.md#getissuecharacters) - Get issue characters.
- [`issuesGetIssueCreators`](docs/sdks/issues/README.md#getissuecreators) - Get issue creators.
- [`issuesGetIssueDetails`](docs/sdks/issues/README.md#getissuedetails) - Get issue details.
- [`issuesGetIssueVariants`](docs/sdks/issues/README.md#getissuevariants) - Get issue variants.
- [`issuesGetKeyIssueReasons`](docs/sdks/issues/README.md#getkeyissuereasons) - Get key issue reasons.
- [`issuesGetVariantDetails`](docs/sdks/issues/README.md#getvariantdetails) - Get variant details.
- [`issuesListIssues`](docs/sdks/issues/README.md#listissues) - List issues.
- [`keyIssueReasonsListKeyIssueReasons`](docs/sdks/keyissuereasons/README.md#listkeyissuereasons) - List key issue reasons.
- [`listsAddItemToList`](docs/sdks/lists/README.md#additemtolist) - Add item to list.
- [`listsBrowseLists`](docs/sdks/lists/README.md#browselists) - Browse lists.
- [`listsBrowseSystemLists`](docs/sdks/lists/README.md#browsesystemlists) - Browse system lists.
- [`listsConvertAListToMixed`](docs/sdks/lists/README.md#convertalisttomixed) - Open a list to any type.
- [`listsCreateList`](docs/sdks/lists/README.md#createlist) - Create list.
- [`listsDeleteList`](docs/sdks/lists/README.md#deletelist) - Delete list.
- [`listsGetList`](docs/sdks/lists/README.md#getlist) - Get list.
- [`listsGetUsersLists`](docs/sdks/lists/README.md#getuserslists) - Get user's lists.
- [`listsLikeListOrReactToIt`](docs/sdks/lists/README.md#likelistorreacttoit) - Like list, or react to it.
- [`listsMergeAListIntoThisOne`](docs/sdks/lists/README.md#mergealistintothisone) - Merge a list into this one.
- [`listsRemoveItemFromList`](docs/sdks/lists/README.md#removeitemfromlist) - Remove item from list.
- [`listsReorderItems`](docs/sdks/lists/README.md#reorderitems) - Reorder items.
- [`listsSaveList`](docs/sdks/lists/README.md#savelist) - Save list.
- [`listsStopAListUpdatingItself`](docs/sdks/lists/README.md#stopalistupdatingitself) - Stop a list updating itself.
- [`listsUnlikeList`](docs/sdks/lists/README.md#unlikelist) - Unlike list.
- [`listsUnsaveList`](docs/sdks/lists/README.md#unsavelist) - Unsave list.
- [`listsUpdateList`](docs/sdks/lists/README.md#updatelist) - Update list.
- [`podcastsGetASpecificPodcast`](docs/sdks/podcasts/README.md#getaspecificpodcast) - Get a specific podcast.
- [`podcastsListAllPodcastsWithOptionalSearch`](docs/sdks/podcasts/README.md#listallpodcastswithoptionalsearch) - List all podcasts with optional search
- [`publishersGetPublisherDetails`](docs/sdks/publishers/README.md#getpublisherdetails) - Get publisher details
- [`publishersListAllPublishersWithOptionalSearch`](docs/sdks/publishers/README.md#listallpublisherswithoptionalsearch) - List all publishers with optional search
- [`readingViewYearlyReadingStatistics`](docs/sdks/reading/README.md#viewyearlyreadingstatistics) - View yearly reading statistics.
- [`readingViewYourMonthlyReadingCalendar`](docs/sdks/reading/README.md#viewyourmonthlyreadingcalendar) - View your monthly reading calendar.
- [`readingViewYourReadingGoal`](docs/sdks/reading/README.md#viewyourreadinggoal) - View your reading goal.
- [`readingViewYourUnfinishedComicsFromTheVerseDBReader`](docs/sdks/reading/README.md#viewyourunfinishedcomicsfromtheversedbreader) - View your unfinished comics from the VerseDB reader.
- [`seriesGetSeriesCharacters`](docs/sdks/series/README.md#getseriescharacters) - Get series characters.
- [`seriesGetSeriesCreators`](docs/sdks/series/README.md#getseriescreators) - Get series creators.
- [`seriesGetSeriesDetails`](docs/sdks/series/README.md#getseriesdetails) - Get series details.
- [`seriesGetSeriesIssues`](docs/sdks/series/README.md#getseriesissues) - Get series issues.
- [`seriesListSeries`](docs/sdks/series/README.md#listseries) - List series.
- [`storyArcsGetStoryArcDetail`](docs/sdks/storyarcs/README.md#getstoryarcdetail) - Get story arc detail.
- [`storyArcsGetStoryArcsForASpecificCharacter`](docs/sdks/storyarcs/README.md#getstoryarcsforaspecificcharacter) - Get story arcs for a specific character
- [`storyArcsGetStoryArcsForASpecificIssue`](docs/sdks/storyarcs/README.md#getstoryarcsforaspecificissue) - Get story arcs for a specific issue
- [`storyArcsGetStoryArcsForASpecificUniverse`](docs/sdks/storyarcs/README.md#getstoryarcsforaspecificuniverse) - Get story arcs for a specific universe
- [`storyArcsListAllStoryArcsWithOptionalSearch`](docs/sdks/storyarcs/README.md#listallstoryarcswithoptionalsearch) - List all story arcs with optional search
- [`teamsGetASpecificTeam`](docs/sdks/teams/README.md#getaspecificteam) - Get a specific team
- [`teamsGetCharactersForASpecificTeammembers`](docs/sdks/teams/README.md#getcharactersforaspecificteammembers) - Get characters for a specific team (members)
- [`teamsGetIssuesForASpecificTeam`](docs/sdks/teams/README.md#getissuesforaspecificteam) - Get issues for a specific team
- [`teamsGetSeriesForASpecificTeam`](docs/sdks/teams/README.md#getseriesforaspecificteam) - Get series for a specific team
- [`teamsListAllTeamsWithOptionalSearch`](docs/sdks/teams/README.md#listallteamswithoptionalsearch) - List all teams with optional search
- [`titlesGetASpecificTitle`](docs/sdks/titles/README.md#getaspecifictitle) - Get a specific title
- [`titlesListTitles`](docs/sdks/titles/README.md#listtitles) - List titles
- [`universesGetASpecificUniverse`](docs/sdks/universes/README.md#getaspecificuniverse) - Get a specific universe
- [`universesListUniverses`](docs/sdks/universes/README.md#listuniverses) - List universes
- [`userAddIssueToCollection`](docs/sdks/user/README.md#addissuetocollection) - Add issue to collection.
- [`userAddToPullList`](docs/sdks/user/README.md#addtopulllist) - Add to pull list.
- [`userAddToWishlist`](docs/sdks/user/README.md#addtowishlist) - Add to wishlist.
- [`userCheckFollowStatus`](docs/sdks/user/README.md#checkfollowstatus) - Check follow status.
- [`userCheckIssueInCollection`](docs/sdks/user/README.md#checkissueincollection) - Check issue in collection.
- [`userEditReadingDate`](docs/sdks/user/README.md#editreadingdate) - Edit reading date.
- [`userFollowContent`](docs/sdks/user/README.md#followcontent) - Follow content.
- [`userGetTheAuthenticatedUser`](docs/sdks/user/README.md#gettheauthenticateduser) - Get the authenticated user.
- [`userLendACopyOut`](docs/sdks/user/README.md#lendacopyout) - Lend a copy out.
- [`userListCollection`](docs/sdks/user/README.md#listcollection) - List collection.
- [`userListFollows`](docs/sdks/user/README.md#listfollows) - List follows.
- [`userListPullList`](docs/sdks/user/README.md#listpulllist) - List pull list.
- [`userListReadStatus`](docs/sdks/user/README.md#listreadstatus) - List read status.
- [`userListWishlist`](docs/sdks/user/README.md#listwishlist) - List wishlist.
- [`userMarkAsRead`](docs/sdks/user/README.md#markasread) - Mark as read.
- [`userMarkAsUnread`](docs/sdks/user/README.md#markasunread) - Mark as unread.
- [`userMarkTheCopysOpenLoanReturned`](docs/sdks/user/README.md#markthecopysopenloanreturned) - Mark the copy's open loan returned.
- [`userRemoveFromPullList`](docs/sdks/user/README.md#removefrompulllist) - Remove from pull list.
- [`userRemoveFromWishlist`](docs/sdks/user/README.md#removefromwishlist) - Remove from wishlist.
- [`userRemoveIssueFromCollection`](docs/sdks/user/README.md#removeissuefromcollection) - Remove issue from collection.
- [`userUnfollowContent`](docs/sdks/user/README.md#unfollowcontent) - Unfollow content.
- [`userUpdateCollectionItem`](docs/sdks/user/README.md#updatecollectionitem) - Update collection item.
- ~~[`userGetActivityFeed`](docs/sdks/user/README.md#getactivityfeed)~~ - Get activity feed. :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { VerseDB } from "@versedbcom/sdk";
import { openAsBlob } from "node:fs";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.coverLookup.lookUpAnIssueByCoverPhoto({
    image: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.getTheAuthenticatedUser({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.getTheAuthenticatedUser();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`VerseDbError`](./src/models/errors/verse-db-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { VerseDB } from "@versedbcom/sdk";
import * as errors from "@versedbcom/sdk/models/errors";

const verseDB = new VerseDB({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await verseDB.user.getTheAuthenticatedUser();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.VerseDbError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.UnauthorizedErrorError) {
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`VerseDbError`](./src/models/errors/verse-db-error.ts): The base class for HTTP error responses.
  * [`TooManyRequestsError`](./src/models/errors/too-many-requests-error.ts): Status code `429`.
  * [`UnauthorizedErrorError`](./src/models/errors/unauthorized-error-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. *

<details><summary>Less common errors (195)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`VerseDbError`](./src/models/errors/verse-db-error.ts)**:
* [`CheckFollowStatusBadRequestError`](./src/models/errors/check-follow-status-bad-request-error.ts): A type that is not followable. Status code `400`. Applicable to 1 of 99 methods.*
* [`UnfollowContentBadRequestError`](./src/models/errors/unfollow-content-bad-request-error.ts): A type that is not followable. Status code `400`. Applicable to 1 of 99 methods.*
* [`ExchangeAConnectCodeForATokenBadRequestError`](./src/models/errors/exchange-a-connect-code-for-a-token-bad-request-error.ts): The request could not be processed: an OAuth error and its description. Status code `400`. Applicable to 1 of 99 methods.*
* [`ViewYourReadingGoalUnauthorizedError`](./src/models/errors/view-your-reading-goal-unauthorized-error.ts): The request could not be processed. Status code `401`. Applicable to 1 of 99 methods.*
* [`ViewYearlyReadingStatisticsUnauthorizedError`](./src/models/errors/view-yearly-reading-statistics-unauthorized-error.ts): The request could not be processed. Status code `401`. Applicable to 1 of 99 methods.*
* [`ViewYourMonthlyReadingCalendarUnauthorizedError`](./src/models/errors/view-your-monthly-reading-calendar-unauthorized-error.ts): The request could not be processed. Status code `401`. Applicable to 1 of 99 methods.*
* [`GetTheAuthenticatedUserForbiddenError`](./src/models/errors/get-the-authenticated-user-forbidden-error.ts): The token holds neither read:user nor read:showcase. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListFollowsForbiddenError`](./src/models/errors/list-follows-forbidden-error.ts): The token lacks the read:user ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetActivityFeedForbiddenError`](./src/models/errors/get-activity-feed-forbidden-error.ts): The token lacks the read:user ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`CheckFollowStatusForbiddenError`](./src/models/errors/check-follow-status-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListReadStatusForbiddenError`](./src/models/errors/list-read-status-forbidden-error.ts): The token holds neither read:user nor read:showcase. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListWishlistForbiddenError`](./src/models/errors/list-wishlist-forbidden-error.ts): The token holds neither read:user nor read:showcase. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListCollectionForbiddenError`](./src/models/errors/list-collection-forbidden-error.ts): The token holds neither read:user nor read:showcase. Status code `403`. Applicable to 1 of 99 methods.*
* [`CheckIssueInCollectionForbiddenError`](./src/models/errors/check-issue-in-collection-forbidden-error.ts): The token does not hold read:user. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListPullListForbiddenError`](./src/models/errors/list-pull-list-forbidden-error.ts): The token holds neither read:user nor read:showcase. Status code `403`. Applicable to 1 of 99 methods.*
* [`MarkAsReadForbiddenError`](./src/models/errors/mark-as-read-forbidden-error.ts): The token holds neither write:read-status nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`MarkAsUnreadForbiddenError`](./src/models/errors/mark-as-unread-forbidden-error.ts): The token holds neither write:read-status nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`EditReadingDateForbiddenError`](./src/models/errors/edit-reading-date-forbidden-error.ts): The token holds neither write:read-status nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`AddToWishlistForbiddenError`](./src/models/errors/add-to-wishlist-forbidden-error.ts): The token holds neither write:wishlist nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`RemoveFromWishlistForbiddenError`](./src/models/errors/remove-from-wishlist-forbidden-error.ts): The token holds neither write:wishlist nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`AddToPullListForbiddenError`](./src/models/errors/add-to-pull-list-forbidden-error.ts): The token holds neither write:pull-list nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`RemoveFromPullListForbiddenError`](./src/models/errors/remove-from-pull-list-forbidden-error.ts): The token holds neither write:pull-list nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`AddIssueToCollectionForbiddenError`](./src/models/errors/add-issue-to-collection-forbidden-error.ts): The token holds neither write:collection nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`RemoveIssueFromCollectionForbiddenError`](./src/models/errors/remove-issue-from-collection-forbidden-error.ts): The token holds neither write:collection nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`UpdateCollectionItemForbiddenError`](./src/models/errors/update-collection-item-forbidden-error.ts): The token holds neither write:collection nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`LendACopyOutForbiddenError`](./src/models/errors/lend-a-copy-out-forbidden-error.ts): The token holds neither write:collection nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`MarkTheCopysOpenLoanReturnedForbiddenError`](./src/models/errors/mark-the-copys-open-loan-returned-forbidden-error.ts): The token holds neither write:collection nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`FollowContentForbiddenError`](./src/models/errors/follow-content-forbidden-error.ts): The token holds neither write:follows nor write:lists, or the profile is private or a block stands between the two members (the body names `code`). Status code `403`. Applicable to 1 of 99 methods.*
* [`UnfollowContentForbiddenError`](./src/models/errors/unfollow-content-forbidden-error.ts): The token holds neither write:follows nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`ViewYourReadingGoalForbiddenError`](./src/models/errors/view-your-reading-goal-forbidden-error.ts): The token holds neither read:user nor read:showcase. Status code `403`. Applicable to 1 of 99 methods.*
* [`ViewYearlyReadingStatisticsForbiddenError`](./src/models/errors/view-yearly-reading-statistics-forbidden-error.ts): The token holds neither read:user nor read:showcase, or the member has no Pro. Status code `403`. Applicable to 1 of 99 methods.*
* [`ViewYourMonthlyReadingCalendarForbiddenError`](./src/models/errors/view-your-monthly-reading-calendar-forbidden-error.ts): The token holds neither read:user nor read:showcase, or the member has no Pro. Status code `403`. Applicable to 1 of 99 methods.*
* [`ViewYourUnfinishedComicsFromTheVerseDBReaderForbiddenError`](./src/models/errors/view-your-unfinished-comics-from-the-verse-db-reader-forbidden-error.ts): The token holds neither read:user nor read:showcase. Status code `403`. Applicable to 1 of 99 methods.*
* [`BrowseListsForbiddenError`](./src/models/errors/browse-lists-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`CreateListForbiddenError`](./src/models/errors/create-list-forbidden-error.ts): The token holds neither write:list nor write:lists, or a free account already has its ten lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`BrowseSystemListsForbiddenError`](./src/models/errors/browse-system-lists-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetUsersListsForbiddenError`](./src/models/errors/get-users-lists-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetListForbiddenError`](./src/models/errors/get-list-forbidden-error.ts): The token lacks the read:public ability; the list is private or a draft and the token may not read its owner's private data (`read:user` on the owner's own token); the list is for Pro members; or the request sent `owned`, `read`, `reviewed`, `alert_filter`, `item_ids` or `alert_id`, which only the app's own API reads. Status code `403`. Applicable to 1 of 99 methods.*
* [`UpdateListForbiddenError`](./src/models/errors/update-list-forbidden-error.ts): The list is not yours to update, or the token holds neither write:list nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`DeleteListForbiddenError`](./src/models/errors/delete-list-forbidden-error.ts): The token holds neither write:list nor write:lists, the list is not yours, or it is your wishlist. Status code `403`. Applicable to 1 of 99 methods.*
* [`SaveListForbiddenError`](./src/models/errors/save-list-forbidden-error.ts): The token holds neither write:list nor write:lists, or the list is your own or private. Status code `403`. Applicable to 1 of 99 methods.*
* [`UnsaveListForbiddenError`](./src/models/errors/unsave-list-forbidden-error.ts): The token holds neither write:list nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`LikeListOrReactToItForbiddenError`](./src/models/errors/like-list-or-react-to-it-forbidden-error.ts): The token holds neither write:list nor write:lists, or the list is your own or private. Status code `403`. Applicable to 1 of 99 methods.*
* [`UnlikeListForbiddenError`](./src/models/errors/unlike-list-forbidden-error.ts): The token holds neither write:list nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`OpenAListToAnyTypeForbiddenError`](./src/models/errors/open-a-list-to-any-type-forbidden-error.ts): The token holds neither write:list nor write:lists, or the list is not yours. Status code `403`. Applicable to 1 of 99 methods.*
* [`StopAListUpdatingItselfForbiddenError`](./src/models/errors/stop-a-list-updating-itself-forbidden-error.ts): The token holds neither write:list nor write:lists, or the list is not yours. Status code `403`. Applicable to 1 of 99 methods.*
* [`MergeAListIntoThisOneForbiddenError`](./src/models/errors/merge-a-list-into-this-one-forbidden-error.ts): The token holds neither write:list nor write:lists, or either list is not yours to merge. Status code `403`. Applicable to 1 of 99 methods.*
* [`AddItemToListForbiddenError`](./src/models/errors/add-item-to-list-forbidden-error.ts): The list is not yours to change or is built by a rule, the token holds neither write:list nor write:lists, or the list is at its item limit. Status code `403`. Applicable to 1 of 99 methods.*
* [`RemoveItemFromListForbiddenError`](./src/models/errors/remove-item-from-list-forbidden-error.ts): The token holds neither write:list nor write:lists, or the list is not yours to change. Status code `403`. Applicable to 1 of 99 methods.*
* [`ReorderItemsForbiddenError`](./src/models/errors/reorder-items-forbidden-error.ts): The list is not yours, is not ranked or is built by a rule, or the token holds neither write:list nor write:lists. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListKeyIssueReasonsForbiddenError`](./src/models/errors/list-key-issue-reasons-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListUniversesForbiddenError`](./src/models/errors/list-universes-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetASpecificUniverseForbiddenError`](./src/models/errors/get-a-specific-universe-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListCharactersForbiddenError`](./src/models/errors/list-characters-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetCharacterDetailsForbiddenError`](./src/models/errors/get-character-details-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListCreatorsForbiddenError`](./src/models/errors/list-creators-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetCreatorDetailsForbiddenError`](./src/models/errors/get-creator-details-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetCreatorsIssuesForbiddenError`](./src/models/errors/get-creators-issues-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetCreatorsSeriesForbiddenError`](./src/models/errors/get-creators-series-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetCreatorsBlogPostsForbiddenError`](./src/models/errors/get-creators-blog-posts-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListAllStoryArcsWithOptionalSearchForbiddenError`](./src/models/errors/list-all-story-arcs-with-optional-search-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetStoryArcsForASpecificIssueForbiddenError`](./src/models/errors/get-story-arcs-for-a-specific-issue-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetStoryArcDetailForbiddenError`](./src/models/errors/get-story-arc-detail-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetStoryArcsForASpecificUniverseForbiddenError`](./src/models/errors/get-story-arcs-for-a-specific-universe-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListAllTeamsWithOptionalSearchForbiddenError`](./src/models/errors/list-all-teams-with-optional-search-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetASpecificTeamForbiddenError`](./src/models/errors/get-a-specific-team-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetCharactersForASpecificTeammembersForbiddenError`](./src/models/errors/get-characters-for-a-specific-teammembers-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetSeriesForASpecificTeamForbiddenError`](./src/models/errors/get-series-for-a-specific-team-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetIssuesForASpecificTeamForbiddenError`](./src/models/errors/get-issues-for-a-specific-team-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListEventsForbiddenError`](./src/models/errors/list-events-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetAnEventForbiddenError`](./src/models/errors/get-an-event-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListAllPodcastsWithOptionalSearchForbiddenError`](./src/models/errors/list-all-podcasts-with-optional-search-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetASpecificPodcastForbiddenError`](./src/models/errors/get-a-specific-podcast-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetImprintDetailsForbiddenError`](./src/models/errors/get-imprint-details-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListImprintsForbiddenError`](./src/models/errors/list-imprints-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetASpecificTitleForbiddenError`](./src/models/errors/get-a-specific-title-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListTitlesForbiddenError`](./src/models/errors/list-titles-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetPublisherDetailsForbiddenError`](./src/models/errors/get-publisher-details-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListAllPublishersWithOptionalSearchForbiddenError`](./src/models/errors/list-all-publishers-with-optional-search-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListSeriesForbiddenError`](./src/models/errors/list-series-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetSeriesIssuesForbiddenError`](./src/models/errors/get-series-issues-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetSeriesDetailsForbiddenError`](./src/models/errors/get-series-details-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetSeriesCreatorsForbiddenError`](./src/models/errors/get-series-creators-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetSeriesCharactersForbiddenError`](./src/models/errors/get-series-characters-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetIssueVariantsForbiddenError`](./src/models/errors/get-issue-variants-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetIssueDetailsForbiddenError`](./src/models/errors/get-issue-details-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListIssuesForbiddenError`](./src/models/errors/list-issues-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetVariantDetailsForbiddenError`](./src/models/errors/get-variant-details-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetKeyIssueReasonsForbiddenError`](./src/models/errors/get-key-issue-reasons-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetIssueCreatorsForbiddenError`](./src/models/errors/get-issue-creators-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetIssueCharactersForbiddenError`](./src/models/errors/get-issue-characters-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`LookupByUPCForbiddenError`](./src/models/errors/lookup-by-upc-forbidden-error.ts): The token lacks the `lookup:barcode` ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`LookupByISBNForbiddenError`](./src/models/errors/lookup-by-isbn-forbidden-error.ts): The token lacks the `lookup:barcode` ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`LookupByDistributorCodeForbiddenError`](./src/models/errors/lookup-by-distributor-code-forbidden-error.ts): The token lacks the `lookup:barcode` ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`ListComicShopsForbiddenError`](./src/models/errors/list-comic-shops-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`GetAComicShopForbiddenError`](./src/models/errors/get-a-comic-shop-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`FOCDeadlinesForbiddenError`](./src/models/errors/foc-deadlines-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`FollowUpdatesForbiddenError`](./src/models/errors/follow-updates-forbidden-error.ts): A token without `read:user`. Status code `403`. Applicable to 1 of 99 methods.*
* [`Upcoming1IssuesForbiddenError`](./src/models/errors/upcoming1-issues-forbidden-error.ts): The token lacks the read:public ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`LookUpAnIssueByCoverPhotoForbiddenError`](./src/models/errors/look-up-an-issue-by-cover-photo-forbidden-error.ts): The token lacks the `read:public` ability. Status code `403`. Applicable to 1 of 99 methods.*
* [`CheckFollowStatusNotFoundError`](./src/models/errors/check-follow-status-not-found-error.ts): No live entity of this type has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`MarkAsReadNotFoundError`](./src/models/errors/mark-as-read-not-found-error.ts): No live issue has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`MarkAsUnreadNotFoundError`](./src/models/errors/mark-as-unread-not-found-error.ts): No live issue has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`EditReadingDateNotFoundError`](./src/models/errors/edit-reading-date-not-found-error.ts): No live issue has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`AddToWishlistNotFoundError`](./src/models/errors/add-to-wishlist-not-found-error.ts): No live issue has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`RemoveFromWishlistNotFoundError`](./src/models/errors/remove-from-wishlist-not-found-error.ts): No live issue has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`AddToPullListNotFoundError`](./src/models/errors/add-to-pull-list-not-found-error.ts): The series is deleted. Status code `404`. Applicable to 1 of 99 methods.*
* [`RemoveFromPullListNotFoundError`](./src/models/errors/remove-from-pull-list-not-found-error.ts): No live series has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`AddIssueToCollectionNotFoundError`](./src/models/errors/add-issue-to-collection-not-found-error.ts): No live issue has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`RemoveIssueFromCollectionResponseBodyError1`](./src/models/errors/remove-issue-from-collection-response-body-error1.ts): No live issue has this ID (`message`), or the user holds no such copy of it (`error`). Status code `404`. Applicable to 1 of 99 methods.*
* [`RemoveIssueFromCollectionResponseBodyError2`](./src/models/errors/remove-issue-from-collection-response-body-error2.ts): No live issue has this ID (`message`), or the user holds no such copy of it (`error`). Status code `404`. Applicable to 1 of 99 methods.*
* [`UpdateCollectionItemResponseBodyNotFoundError1`](./src/models/errors/update-collection-item-response-body-not-found-error1.ts): No live issue has this ID (`message`), or the user holds no such copy of it (`error`). Status code `404`. Applicable to 1 of 99 methods.*
* [`UpdateCollectionItemResponseBodyNotFoundError2`](./src/models/errors/update-collection-item-response-body-not-found-error2.ts): No live issue has this ID (`message`), or the user holds no such copy of it (`error`). Status code `404`. Applicable to 1 of 99 methods.*
* [`LendACopyOutNotFoundError`](./src/models/errors/lend-a-copy-out-not-found-error.ts): No collection item has this ID, or the user does not own it (`Collection item not found.`). Status code `404`. Applicable to 1 of 99 methods.*
* [`MarkTheCopysOpenLoanReturnedNotFoundError`](./src/models/errors/mark-the-copys-open-loan-returned-not-found-error.ts): No collection item has this ID, the user does not own it, or it is not on loan. Status code `404`. Applicable to 1 of 99 methods.*
* [`FollowContentNotFoundError`](./src/models/errors/follow-content-not-found-error.ts): No live entity of this type has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`UnfollowContentNotFoundError`](./src/models/errors/unfollow-content-not-found-error.ts): No live entity of this type has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`CreateListNotFoundError`](./src/models/errors/create-list-not-found-error.ts): No live issue has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetUsersListsNotFoundError`](./src/models/errors/get-users-lists-not-found-error.ts): You blocked this user, or they blocked you. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetListNotFoundError`](./src/models/errors/get-list-not-found-error.ts): No such list, or you blocked its owner, or they blocked you. Status code `404`. Applicable to 1 of 99 methods.*
* [`UpdateListNotFoundError`](./src/models/errors/update-list-not-found-error.ts): No live list has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`DeleteListNotFoundError`](./src/models/errors/delete-list-not-found-error.ts): No live list has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`SaveListNotFoundError`](./src/models/errors/save-list-not-found-error.ts): No live list has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`UnsaveListNotFoundError`](./src/models/errors/unsave-list-not-found-error.ts): No live list has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`LikeListOrReactToItNotFoundError`](./src/models/errors/like-list-or-react-to-it-not-found-error.ts): No live list has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`UnlikeListNotFoundError`](./src/models/errors/unlike-list-not-found-error.ts): No live list has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`OpenAListToAnyTypeNotFoundError`](./src/models/errors/open-a-list-to-any-type-not-found-error.ts): No live list has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`StopAListUpdatingItselfNotFoundError`](./src/models/errors/stop-a-list-updating-itself-not-found-error.ts): No live list has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`MergeAListIntoThisOneNotFoundError`](./src/models/errors/merge-a-list-into-this-one-not-found-error.ts): No live list has this ID (`Source list not found.` when it is the source that is gone). Status code `404`. Applicable to 1 of 99 methods.*
* [`AddItemToListNotFoundError`](./src/models/errors/add-item-to-list-not-found-error.ts): No live list has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`RemoveItemFromListNotFoundError`](./src/models/errors/remove-item-from-list-not-found-error.ts): No live list or no list item has this ID, or the item belongs to another list (`Item does not belong to this list.`). Status code `404`. Applicable to 1 of 99 methods.*
* [`ReorderItemsNotFoundError`](./src/models/errors/reorder-items-not-found-error.ts): No live list has this ID. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetCharacterDetailsNotFoundError`](./src/models/errors/get-character-details-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetCreatorDetailsNotFoundError`](./src/models/errors/get-creator-details-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetASpecificTeamNotFoundError`](./src/models/errors/get-a-specific-team-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetAnEventNotFoundError`](./src/models/errors/get-an-event-not-found-error.ts): An archived event. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetASpecificPodcastNotFoundError`](./src/models/errors/get-a-specific-podcast-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetASpecificTitleNotFoundError`](./src/models/errors/get-a-specific-title-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetPublisherDetailsNotFoundError`](./src/models/errors/get-publisher-details-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetSeriesDetailsNotFoundError`](./src/models/errors/get-series-details-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetIssueDetailsNotFoundError`](./src/models/errors/get-issue-details-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetVariantDetailsNotFoundError`](./src/models/errors/get-variant-details-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`LookupByUPCNotFoundError`](./src/models/errors/lookup-by-upc-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`LookupByISBNNotFoundError`](./src/models/errors/lookup-by-isbn-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`LookupByDistributorCodeNotFoundError`](./src/models/errors/lookup-by-distributor-code-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetAComicShopNotFoundError`](./src/models/errors/get-a-comic-shop-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 99 methods.*
* [`LendACopyOutConflictError`](./src/models/errors/lend-a-copy-out-conflict-error.ts): The copy is already on loan. Status code `409`. Applicable to 1 of 99 methods.*
* [`AddItemToListConflictError`](./src/models/errors/add-item-to-list-conflict-error.ts): The entity (with the same cover) is already in the list. Status code `409`. Applicable to 1 of 99 methods.*
* [`LookupByUPCConflictError`](./src/models/errors/lookup-by-upc-conflict-error.ts): Multiple Matches. Status code `409`. Applicable to 1 of 99 methods.*
* [`LookupByDistributorCodeConflictError`](./src/models/errors/lookup-by-distributor-code-conflict-error.ts): Multiple Matches. Status code `409`. Applicable to 1 of 99 methods.*
* [`ListFollowsUnprocessableEntityError`](./src/models/errors/list-follows-unprocessable-entity-error.ts): A type that is not followable, or a search past 100 characters. Status code `422`. Applicable to 1 of 99 methods.*
* [`CheckIssueInCollectionUnprocessableEntityError`](./src/models/errors/check-issue-in-collection-unprocessable-entity-error.ts): A variant that does not exist. Status code `422`. Applicable to 1 of 99 methods.*
* [`MarkAsReadResponseBodyError1`](./src/models/errors/mark-as-read-response-body-error1.ts): Invalid Variant, a variant that does not exist, or an issue not released yet. Status code `422`. Applicable to 1 of 99 methods.*
* [`MarkAsReadResponseBodyError2`](./src/models/errors/mark-as-read-response-body-error2.ts): Invalid Variant, a variant that does not exist, or an issue not released yet. Status code `422`. Applicable to 1 of 99 methods.*
* [`MarkAsReadResponseBodyError3`](./src/models/errors/mark-as-read-response-body-error3.ts): Invalid Variant, a variant that does not exist, or an issue not released yet. Status code `422`. Applicable to 1 of 99 methods.*
* [`MarkAsUnreadUnprocessableEntityError`](./src/models/errors/mark-as-unread-unprocessable-entity-error.ts): A variant that does not exist. Status code `422`. Applicable to 1 of 99 methods.*
* [`EditReadingDateResponseBodyError1`](./src/models/errors/edit-reading-date-response-body-error1.ts): Invalid Variant, a date after today, or an issue not released yet. Status code `422`. Applicable to 1 of 99 methods.*
* [`EditReadingDateResponseBodyError2`](./src/models/errors/edit-reading-date-response-body-error2.ts): Invalid Variant, a date after today, or an issue not released yet. Status code `422`. Applicable to 1 of 99 methods.*
* [`EditReadingDateResponseBodyError3`](./src/models/errors/edit-reading-date-response-body-error3.ts): Invalid Variant, a date after today, or an issue not released yet. Status code `422`. Applicable to 1 of 99 methods.*
* [`AddToWishlistResponseBodyError1`](./src/models/errors/add-to-wishlist-response-body-error1.ts): Wishlist Full, or a variant that is not one of the issue's. Status code `422`. Applicable to 1 of 99 methods.*
* [`AddToWishlistResponseBodyError2`](./src/models/errors/add-to-wishlist-response-body-error2.ts): Wishlist Full, or a variant that is not one of the issue's. Status code `422`. Applicable to 1 of 99 methods.*
* [`RemoveFromWishlistUnprocessableEntityError`](./src/models/errors/remove-from-wishlist-unprocessable-entity-error.ts): A variant that is not one of the issue's. Status code `422`. Applicable to 1 of 99 methods.*
* [`AddToPullListUnprocessableEntityError`](./src/models/errors/add-to-pull-list-unprocessable-entity-error.ts): No series has this ID. Status code `422`. Applicable to 1 of 99 methods.*
* [`AddIssueToCollectionResponseBodyError1`](./src/models/errors/add-issue-to-collection-response-body-error1.ts): A field the rules refuse, a variant of another issue, or an issue not released yet. Status code `422`. Applicable to 1 of 99 methods.*
* [`AddIssueToCollectionResponseBodyError2`](./src/models/errors/add-issue-to-collection-response-body-error2.ts): A field the rules refuse, a variant of another issue, or an issue not released yet. Status code `422`. Applicable to 1 of 99 methods.*
* [`AddIssueToCollectionResponseBodyError3`](./src/models/errors/add-issue-to-collection-response-body-error3.ts): A field the rules refuse, a variant of another issue, or an issue not released yet. Status code `422`. Applicable to 1 of 99 methods.*
* [`RemoveIssueFromCollectionUnprocessableEntityError`](./src/models/errors/remove-issue-from-collection-unprocessable-entity-error.ts): A variant that does not exist, or a collection item ID that is not an integer. Status code `422`. Applicable to 1 of 99 methods.*
* [`UpdateCollectionItemResponseBodyUnprocessableEntityError1`](./src/models/errors/update-collection-item-response-body-unprocessable-entity-error1.ts): A field the rules refuse, a variant of another issue, or `is_read` on an issue not released yet (the copy is still updated). Status code `422`. Applicable to 1 of 99 methods.*
* [`UpdateCollectionItemResponseBodyUnprocessableEntityError2`](./src/models/errors/update-collection-item-response-body-unprocessable-entity-error2.ts): A field the rules refuse, a variant of another issue, or `is_read` on an issue not released yet (the copy is still updated). Status code `422`. Applicable to 1 of 99 methods.*
* [`UpdateCollectionItemResponseBodyUnprocessableEntityError3`](./src/models/errors/update-collection-item-response-body-unprocessable-entity-error3.ts): A field the rules refuse, a variant of another issue, or `is_read` on an issue not released yet (the copy is still updated). Status code `422`. Applicable to 1 of 99 methods.*
* [`LendACopyOutUnprocessableEntityError`](./src/models/errors/lend-a-copy-out-unprocessable-entity-error.ts): A field the rules refuse. Status code `422`. Applicable to 1 of 99 methods.*
* [`MarkTheCopysOpenLoanReturnedUnprocessableEntityError`](./src/models/errors/mark-the-copys-open-loan-returned-unprocessable-entity-error.ts): A `returned_at` that is not a date. Status code `422`. Applicable to 1 of 99 methods.*
* [`FollowContentUnprocessableEntityError`](./src/models/errors/follow-content-unprocessable-entity-error.ts): The body fails its rules, or the member is following themselves. Status code `422`. Applicable to 1 of 99 methods.*
* [`CreateListUnprocessableEntityError`](./src/models/errors/create-list-unprocessable-entity-error.ts): The body failed validation. Status code `422`. Applicable to 1 of 99 methods.*
* [`UpdateListUnprocessableEntityError`](./src/models/errors/update-list-unprocessable-entity-error.ts): The body failed validation. Status code `422`. Applicable to 1 of 99 methods.*
* [`LikeListOrReactToItUnprocessableEntityError`](./src/models/errors/like-list-or-react-to-it-unprocessable-entity-error.ts): Unknown reaction. Status code `422`. Applicable to 1 of 99 methods.*
* [`OpenAListToAnyTypeUnprocessableEntityError`](./src/models/errors/open-a-list-to-any-type-unprocessable-entity-error.ts): Not convertible. Status code `422`. Applicable to 1 of 99 methods.*
* [`StopAListUpdatingItselfUnprocessableEntityError`](./src/models/errors/stop-a-list-updating-itself-unprocessable-entity-error.ts): Not rule-built. Status code `422`. Applicable to 1 of 99 methods.*
* [`MergeAListIntoThisOneUnprocessableEntityError`](./src/models/errors/merge-a-list-into-this-one-unprocessable-entity-error.ts): The body failed validation, or the merge is refused (an empty source, the item cap). Status code `422`. Applicable to 1 of 99 methods.*
* [`AddItemToListUnprocessableEntityError`](./src/models/errors/add-item-to-list-unprocessable-entity-error.ts): The body failed validation. Status code `422`. Applicable to 1 of 99 methods.*
* [`ReorderItemsUnprocessableEntityError`](./src/models/errors/reorder-items-unprocessable-entity-error.ts): The body failed validation. Status code `422`. Applicable to 1 of 99 methods.*
* [`LookupByUPCUnprocessableEntityError`](./src/models/errors/lookup-by-upc-unprocessable-entity-error.ts): Invalid UPC. Status code `422`. Applicable to 1 of 99 methods.*
* [`LookupByISBNUnprocessableEntityError`](./src/models/errors/lookup-by-isbn-unprocessable-entity-error.ts): Invalid ISBN. Status code `422`. Applicable to 1 of 99 methods.*
* [`LookupByDistributorCodeUnprocessableEntityError`](./src/models/errors/lookup-by-distributor-code-unprocessable-entity-error.ts): Not a Lunar or Universal Code. Status code `422`. Applicable to 1 of 99 methods.*
* [`FOCDeadlinesUnprocessableEntityError`](./src/models/errors/foc-deadlines-unprocessable-entity-error.ts): A query parameter out of range. Status code `422`. Applicable to 1 of 99 methods.*
* [`FollowUpdatesUnprocessableEntityError`](./src/models/errors/follow-updates-unprocessable-entity-error.ts): A query parameter out of range. Status code `422`. Applicable to 1 of 99 methods.*
* [`Upcoming1IssuesUnprocessableEntityError`](./src/models/errors/upcoming1-issues-unprocessable-entity-error.ts): A query parameter out of range. Status code `422`. Applicable to 1 of 99 methods.*
* [`LookUpAnIssueByCoverPhotoUnprocessableEntityError`](./src/models/errors/look-up-an-issue-by-cover-photo-unprocessable-entity-error.ts): No photo, not an image, not one of the listed types, or over 5MB. Status code `422`. Applicable to 1 of 99 methods.*
* [`ServiceUnavailableError`](./src/models/errors/service-unavailable-error.ts): Cover matching is unavailable right now. Status code `503`. Applicable to 1 of 99 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { VerseDB } from "@versedbcom/sdk";

const verseDB = new VerseDB({
  serverURL: "https://versedb.com",
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await verseDB.user.getTheAuthenticatedUser();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { VerseDB } from "@versedbcom/sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@versedbcom/sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new VerseDB({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { VerseDB } from "@versedbcom/sdk";

const sdk = new VerseDB({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
