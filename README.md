# VerseDB TypeScript SDK

The official TypeScript/JavaScript SDK for the [VerseDB](https://versedb.com) public API — search and browse a database of 1M+ comics (series, issues, creators, characters, publishers, story arcs), look up barcodes, and manage your collection and lists.

> Published on npm as [`@versedbcom/sdk`](https://www.npmjs.com/package/@versedbcom/sdk). The code is generated from the [VerseDB OpenAPI spec](https://versedb.com/api/docs.openapi) via [Speakeasy](https://www.speakeasy.com) and republished automatically whenever the API changes.

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
- OpenAPI 3.1 spec: [versedb.com/api/docs.openapi](https://versedb.com/api/docs.openapi)

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
  const result = await verseDB.activity.getActivityFeed({
    perPage: 20,
  });

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
  const result = await verseDB.activity.getActivityFeed({
    perPage: 20,
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Activity](docs/sdks/activity/README.md)

* [getActivityFeed](docs/sdks/activity/README.md#getactivityfeed) - Get activity feed.

### [BarcodeLookup](docs/sdks/barcodelookup/README.md)

* [lookupByUPC](docs/sdks/barcodelookup/README.md#lookupbyupc) - Lookup by UPC.
* [lookupByISBN](docs/sdks/barcodelookup/README.md#lookupbyisbn) - Lookup by ISBN.

### [Characters](docs/sdks/characters/README.md)

* [listCharacters](docs/sdks/characters/README.md#listcharacters) - List characters.
* [getCharacterDetails](docs/sdks/characters/README.md#getcharacterdetails) - Get character details.
* [getCharacterSeries](docs/sdks/characters/README.md#getcharacterseries) - Get character series.
* [getCharacterIssues](docs/sdks/characters/README.md#getcharacterissues) - Get character issues.
* [getCharacterTeams](docs/sdks/characters/README.md#getcharacterteams) - Get character teams.

### [ComicShops](docs/sdks/comicshops/README.md)

* [listComicShops](docs/sdks/comicshops/README.md#listcomicshops) - List comic shops.
* [getAComicShop](docs/sdks/comicshops/README.md#getacomicshop) - Get a comic shop.

### [Creators](docs/sdks/creators/README.md)

* [listCreators](docs/sdks/creators/README.md#listcreators) - List creators.
* [getCreatorDetails](docs/sdks/creators/README.md#getcreatordetails) - Get creator details.
* [getCreatorsBlogPosts](docs/sdks/creators/README.md#getcreatorsblogposts) - Get creator's blog posts.
* [getCreatorsIssues](docs/sdks/creators/README.md#getcreatorsissues) - Get creator's issues.
* [getCreatorsSeries](docs/sdks/creators/README.md#getcreatorsseries) - Get creator's series.

### [Events](docs/sdks/events/README.md)

* [listEvents](docs/sdks/events/README.md#listevents) - List events.
* [getAnEvent](docs/sdks/events/README.md#getanevent) - Get an event.

### [Follows](docs/sdks/follows/README.md)

* [followContent](docs/sdks/follows/README.md#followcontent) - Follow content.
* [unfollowContent](docs/sdks/follows/README.md#unfollowcontent) - Unfollow content.
* [checkFollowStatus](docs/sdks/follows/README.md#checkfollowstatus) - Check follow status.
* [updateFollowPreferences](docs/sdks/follows/README.md#updatefollowpreferences) - Update follow preferences.

### [Gamification](docs/sdks/gamification/README.md)

* [getAchievementsForTheAuthenticatedUser](docs/sdks/gamification/README.md#getachievementsfortheauthenticateduser) - Get achievements for the authenticated user.

### [Imprints](docs/sdks/imprints/README.md)

* [listImprints](docs/sdks/imprints/README.md#listimprints) - List imprints
* [getImprintDetails](docs/sdks/imprints/README.md#getimprintdetails) - Get imprint details

### [Issues](docs/sdks/issues/README.md)

* [listIssues](docs/sdks/issues/README.md#listissues) - List issues.
* [getIssueDetails](docs/sdks/issues/README.md#getissuedetails) - Get issue details.
* [getIssueVariants](docs/sdks/issues/README.md#getissuevariants) - Get issue variants.
* [getVariantDetails](docs/sdks/issues/README.md#getvariantdetails) - Get variant details.
* [getIssueCreators](docs/sdks/issues/README.md#getissuecreators) - Get issue creators.
* [getIssueCharacters](docs/sdks/issues/README.md#getissuecharacters) - Get issue characters.
* [getKeyIssueReasons](docs/sdks/issues/README.md#getkeyissuereasons) - Get key issue reasons.

### [KeyIssueReasons](docs/sdks/keyissuereasons/README.md)

* [listKeyIssueReasons](docs/sdks/keyissuereasons/README.md#listkeyissuereasons) - List key issue reasons.

### [Lists](docs/sdks/lists/README.md)

* [browseLists](docs/sdks/lists/README.md#browselists) - Browse lists.
* [createList](docs/sdks/lists/README.md#createlist) - Create list.
* [browseSystemLists](docs/sdks/lists/README.md#browsesystemlists) - Browse system lists.
* [getList](docs/sdks/lists/README.md#getlist) - Get list.
* [updateList](docs/sdks/lists/README.md#updatelist) - Update list.
* [deleteList](docs/sdks/lists/README.md#deletelist) - Delete list.
* [getUsersLists](docs/sdks/lists/README.md#getuserslists) - Get user's lists.
* [addItemToList](docs/sdks/lists/README.md#additemtolist) - Add item to list.
* [removeItemFromList](docs/sdks/lists/README.md#removeitemfromlist) - Remove item from list.
* [reorderItems](docs/sdks/lists/README.md#reorderitems) - Reorder items.
* [saveList](docs/sdks/lists/README.md#savelist) - Save list.
* [unsaveList](docs/sdks/lists/README.md#unsavelist) - Unsave list.
* [likeList](docs/sdks/lists/README.md#likelist) - Like list.
* [unlikeList](docs/sdks/lists/README.md#unlikelist) - Unlike list.

### [Market](docs/sdks/market/README.md)

* [liveListings](docs/sdks/market/README.md#livelistings) - Live listings.
* [getAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverview](docs/sdks/market/README.md#getallpricesnapshotsforallgradesofanissueforpricingoverview) - Get all price snapshots for all grades of an issue (for pricing overview).
* [submitAMarketSale](docs/sdks/market/README.md#submitamarketsale) - Submit a market sale.

### [Newsletter](docs/sdks/newsletter/README.md)

* [getTheAuthenticatedUsersNewsletterSubscriptionStatus](docs/sdks/newsletter/README.md#gettheauthenticatedusersnewslettersubscriptionstatus) - Get the authenticated user's newsletter subscription status.
* [subscribeTheAuthenticatedUserToTheNewsletter](docs/sdks/newsletter/README.md#subscribetheauthenticatedusertothenewsletter) - Subscribe the authenticated user to the newsletter.
* [unsubscribeTheAuthenticatedUserFromTheNewsletter](docs/sdks/newsletter/README.md#unsubscribetheauthenticateduserfromthenewsletter) - Unsubscribe the authenticated user from the newsletter.

### [Podcasts](docs/sdks/podcasts/README.md)

* [listAllPodcastsWithOptionalSearch](docs/sdks/podcasts/README.md#listallpodcastswithoptionalsearch) - List all podcasts with optional search
* [getASpecificPodcast](docs/sdks/podcasts/README.md#getaspecificpodcast) - Get a specific podcast.
* [listEpisodesForASpecificPodcast](docs/sdks/podcasts/README.md#listepisodesforaspecificpodcast) - List episodes for a specific podcast
* [getASpecificPodcastEpisode](docs/sdks/podcasts/README.md#getaspecificpodcastepisode) - Get a specific podcast episode.

### [PublicProfiles](docs/sdks/publicprofiles/README.md)

* [getUserProfile](docs/sdks/publicprofiles/README.md#getuserprofile) - Get user profile.

### [Publishers](docs/sdks/publishers/README.md)

* [listAllPublishersWithOptionalSearch](docs/sdks/publishers/README.md#listallpublisherswithoptionalsearch) - List all publishers with optional search
* [getPublisherDetails](docs/sdks/publishers/README.md#getpublisherdetails) - Get publisher details

### [Series](docs/sdks/series/README.md)

* [listSeries](docs/sdks/series/README.md#listseries) - List series.
* [getSeriesDetails](docs/sdks/series/README.md#getseriesdetails) - Get series details.
* [getSeriesIssues](docs/sdks/series/README.md#getseriesissues) - Get series issues.
* [getSeriesCreators](docs/sdks/series/README.md#getseriescreators) - Get series creators.
* [getSeriesCharacters](docs/sdks/series/README.md#getseriescharacters) - Get series characters.

### [StoryArcs](docs/sdks/storyarcs/README.md)

* [listAllStoryArcsWithOptionalSearch](docs/sdks/storyarcs/README.md#listallstoryarcswithoptionalsearch) - List all story arcs with optional search
* [getStoryArcDetail](docs/sdks/storyarcs/README.md#getstoryarcdetail) - Get story arc detail.
* [getStoryArcsForASpecificIssue](docs/sdks/storyarcs/README.md#getstoryarcsforaspecificissue) - Get story arcs for a specific issue
* [getStoryArcsForASpecificCharacter](docs/sdks/storyarcs/README.md#getstoryarcsforaspecificcharacter) - Get story arcs for a specific character
* [getStoryArcsForASpecificUniverse](docs/sdks/storyarcs/README.md#getstoryarcsforaspecificuniverse) - Get story arcs for a specific universe

### [Teams](docs/sdks/teams/README.md)

* [listAllTeamsWithOptionalSearch](docs/sdks/teams/README.md#listallteamswithoptionalsearch) - List all teams with optional search
* [getASpecificTeam](docs/sdks/teams/README.md#getaspecificteam) - Get a specific team
* [getCharactersForASpecificTeammembers](docs/sdks/teams/README.md#getcharactersforaspecificteammembers) - Get characters for a specific team (members)
* [getSeriesForASpecificTeam](docs/sdks/teams/README.md#getseriesforaspecificteam) - Get series for a specific team
* [getIssuesForASpecificTeam](docs/sdks/teams/README.md#getissuesforaspecificteam) - Get issues for a specific team

### [Titles](docs/sdks/titles/README.md)

* [listTitles](docs/sdks/titles/README.md#listtitles) - List titles
* [getASpecificTitle](docs/sdks/titles/README.md#getaspecifictitle) - Get a specific title

### [Universes](docs/sdks/universes/README.md)

* [listUniverses](docs/sdks/universes/README.md#listuniverses) - List universes
* [getASpecificUniverse](docs/sdks/universes/README.md#getaspecificuniverse) - Get a specific universe

### [User](docs/sdks/user/README.md)

* [getTheAuthenticatedUser](docs/sdks/user/README.md#gettheauthenticateduser) - Get the authenticated user.
* [listPullList](docs/sdks/user/README.md#listpulllist) - List pull list.
* [listWishlist](docs/sdks/user/README.md#listwishlist) - List wishlist.
* [listFollows](docs/sdks/user/README.md#listfollows) - List follows.
* [listReadStatus](docs/sdks/user/README.md#listreadstatus) - List read status.
* [addToPullList](docs/sdks/user/README.md#addtopulllist) - Add to pull list.
* [removeFromPullList](docs/sdks/user/README.md#removefrompulllist) - Remove from pull list.
* [markAsRead](docs/sdks/user/README.md#markasread) - Mark as read.
* [editReadingDate](docs/sdks/user/README.md#editreadingdate) - Edit reading date.
* [markAsUnread](docs/sdks/user/README.md#markasunread) - Mark as unread.
* [addToWishlist](docs/sdks/user/README.md#addtowishlist) - Add to wishlist.
* [removeFromWishlist](docs/sdks/user/README.md#removefromwishlist) - Remove from wishlist.

### [UserCollections](docs/sdks/usercollections/README.md)

* [listCollection](docs/sdks/usercollections/README.md#listcollection) - List collection.
* [addIssueToCollection](docs/sdks/usercollections/README.md#addissuetocollection) - Add issue to collection.
* [updateCollectionItem](docs/sdks/usercollections/README.md#updatecollectionitem) - Update collection item.
* [removeIssueFromCollection](docs/sdks/usercollections/README.md#removeissuefromcollection) - Remove issue from collection.

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

- [`activityGetActivityFeed`](docs/sdks/activity/README.md#getactivityfeed) - Get activity feed.
- [`barcodeLookupLookupByISBN`](docs/sdks/barcodelookup/README.md#lookupbyisbn) - Lookup by ISBN.
- [`barcodeLookupLookupByUPC`](docs/sdks/barcodelookup/README.md#lookupbyupc) - Lookup by UPC.
- [`charactersGetCharacterDetails`](docs/sdks/characters/README.md#getcharacterdetails) - Get character details.
- [`charactersGetCharacterIssues`](docs/sdks/characters/README.md#getcharacterissues) - Get character issues.
- [`charactersGetCharacterSeries`](docs/sdks/characters/README.md#getcharacterseries) - Get character series.
- [`charactersGetCharacterTeams`](docs/sdks/characters/README.md#getcharacterteams) - Get character teams.
- [`charactersListCharacters`](docs/sdks/characters/README.md#listcharacters) - List characters.
- [`comicShopsGetAComicShop`](docs/sdks/comicshops/README.md#getacomicshop) - Get a comic shop.
- [`comicShopsListComicShops`](docs/sdks/comicshops/README.md#listcomicshops) - List comic shops.
- [`creatorsGetCreatorDetails`](docs/sdks/creators/README.md#getcreatordetails) - Get creator details.
- [`creatorsGetCreatorsBlogPosts`](docs/sdks/creators/README.md#getcreatorsblogposts) - Get creator's blog posts.
- [`creatorsGetCreatorsIssues`](docs/sdks/creators/README.md#getcreatorsissues) - Get creator's issues.
- [`creatorsGetCreatorsSeries`](docs/sdks/creators/README.md#getcreatorsseries) - Get creator's series.
- [`creatorsListCreators`](docs/sdks/creators/README.md#listcreators) - List creators.
- [`eventsGetAnEvent`](docs/sdks/events/README.md#getanevent) - Get an event.
- [`eventsListEvents`](docs/sdks/events/README.md#listevents) - List events.
- [`followsCheckFollowStatus`](docs/sdks/follows/README.md#checkfollowstatus) - Check follow status.
- [`followsFollowContent`](docs/sdks/follows/README.md#followcontent) - Follow content.
- [`followsUnfollowContent`](docs/sdks/follows/README.md#unfollowcontent) - Unfollow content.
- [`followsUpdateFollowPreferences`](docs/sdks/follows/README.md#updatefollowpreferences) - Update follow preferences.
- [`gamificationGetAchievementsForTheAuthenticatedUser`](docs/sdks/gamification/README.md#getachievementsfortheauthenticateduser) - Get achievements for the authenticated user.
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
- [`listsCreateList`](docs/sdks/lists/README.md#createlist) - Create list.
- [`listsDeleteList`](docs/sdks/lists/README.md#deletelist) - Delete list.
- [`listsGetList`](docs/sdks/lists/README.md#getlist) - Get list.
- [`listsGetUsersLists`](docs/sdks/lists/README.md#getuserslists) - Get user's lists.
- [`listsLikeList`](docs/sdks/lists/README.md#likelist) - Like list.
- [`listsRemoveItemFromList`](docs/sdks/lists/README.md#removeitemfromlist) - Remove item from list.
- [`listsReorderItems`](docs/sdks/lists/README.md#reorderitems) - Reorder items.
- [`listsSaveList`](docs/sdks/lists/README.md#savelist) - Save list.
- [`listsUnlikeList`](docs/sdks/lists/README.md#unlikelist) - Unlike list.
- [`listsUnsaveList`](docs/sdks/lists/README.md#unsavelist) - Unsave list.
- [`listsUpdateList`](docs/sdks/lists/README.md#updatelist) - Update list.
- [`marketGetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverview`](docs/sdks/market/README.md#getallpricesnapshotsforallgradesofanissueforpricingoverview) - Get all price snapshots for all grades of an issue (for pricing overview).
- [`marketLiveListings`](docs/sdks/market/README.md#livelistings) - Live listings.
- [`marketSubmitAMarketSale`](docs/sdks/market/README.md#submitamarketsale) - Submit a market sale.
- [`newsletterGetTheAuthenticatedUsersNewsletterSubscriptionStatus`](docs/sdks/newsletter/README.md#gettheauthenticatedusersnewslettersubscriptionstatus) - Get the authenticated user's newsletter subscription status.
- [`newsletterSubscribeTheAuthenticatedUserToTheNewsletter`](docs/sdks/newsletter/README.md#subscribetheauthenticatedusertothenewsletter) - Subscribe the authenticated user to the newsletter.
- [`newsletterUnsubscribeTheAuthenticatedUserFromTheNewsletter`](docs/sdks/newsletter/README.md#unsubscribetheauthenticateduserfromthenewsletter) - Unsubscribe the authenticated user from the newsletter.
- [`podcastsGetASpecificPodcast`](docs/sdks/podcasts/README.md#getaspecificpodcast) - Get a specific podcast.
- [`podcastsGetASpecificPodcastEpisode`](docs/sdks/podcasts/README.md#getaspecificpodcastepisode) - Get a specific podcast episode.
- [`podcastsListAllPodcastsWithOptionalSearch`](docs/sdks/podcasts/README.md#listallpodcastswithoptionalsearch) - List all podcasts with optional search
- [`podcastsListEpisodesForASpecificPodcast`](docs/sdks/podcasts/README.md#listepisodesforaspecificpodcast) - List episodes for a specific podcast
- [`publicProfilesGetUserProfile`](docs/sdks/publicprofiles/README.md#getuserprofile) - Get user profile.
- [`publishersGetPublisherDetails`](docs/sdks/publishers/README.md#getpublisherdetails) - Get publisher details
- [`publishersListAllPublishersWithOptionalSearch`](docs/sdks/publishers/README.md#listallpublisherswithoptionalsearch) - List all publishers with optional search
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
- [`userAddToPullList`](docs/sdks/user/README.md#addtopulllist) - Add to pull list.
- [`userAddToWishlist`](docs/sdks/user/README.md#addtowishlist) - Add to wishlist.
- [`userCollectionsAddIssueToCollection`](docs/sdks/usercollections/README.md#addissuetocollection) - Add issue to collection.
- [`userCollectionsListCollection`](docs/sdks/usercollections/README.md#listcollection) - List collection.
- [`userCollectionsRemoveIssueFromCollection`](docs/sdks/usercollections/README.md#removeissuefromcollection) - Remove issue from collection.
- [`userCollectionsUpdateCollectionItem`](docs/sdks/usercollections/README.md#updatecollectionitem) - Update collection item.
- [`userEditReadingDate`](docs/sdks/user/README.md#editreadingdate) - Edit reading date.
- [`userGetTheAuthenticatedUser`](docs/sdks/user/README.md#gettheauthenticateduser) - Get the authenticated user.
- [`userListFollows`](docs/sdks/user/README.md#listfollows) - List follows.
- [`userListPullList`](docs/sdks/user/README.md#listpulllist) - List pull list.
- [`userListReadStatus`](docs/sdks/user/README.md#listreadstatus) - List read status.
- [`userListWishlist`](docs/sdks/user/README.md#listwishlist) - List wishlist.
- [`userMarkAsRead`](docs/sdks/user/README.md#markasread) - Mark as read.
- [`userMarkAsUnread`](docs/sdks/user/README.md#markasunread) - Mark as unread.
- [`userRemoveFromPullList`](docs/sdks/user/README.md#removefrompulllist) - Remove from pull list.
- [`userRemoveFromWishlist`](docs/sdks/user/README.md#removefromwishlist) - Remove from wishlist.

</details>
<!-- End Standalone functions [standalone-funcs] -->

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
  const result = await verseDB.activity.getActivityFeed({
    perPage: 20,
  }, {
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
  const result = await verseDB.activity.getActivityFeed({
    perPage: 20,
  });

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
    const result = await verseDB.activity.getActivityFeed({
      perPage: 20,
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.VerseDbError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.GetActivityFeedUnauthorizedError) {
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`VerseDbError`](./src/models/errors/verse-db-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (245)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`VerseDbError`](./src/models/errors/verse-db-error.ts)**:
* [`GetActivityFeedUnauthorizedError`](./src/models/errors/get-activity-feed-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`LookupByUPCUnauthorizedError`](./src/models/errors/lookup-by-upc-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`LookupByISBNUnauthorizedError`](./src/models/errors/lookup-by-isbn-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListCharactersUnauthorizedError`](./src/models/errors/list-characters-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetCharacterDetailsUnauthorizedError`](./src/models/errors/get-character-details-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetCharacterSeriesUnauthorizedError`](./src/models/errors/get-character-series-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetCharacterIssuesUnauthorizedError`](./src/models/errors/get-character-issues-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetCharacterTeamsUnauthorizedError`](./src/models/errors/get-character-teams-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListComicShopsUnauthorizedError`](./src/models/errors/list-comic-shops-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetAComicShopUnauthorizedError`](./src/models/errors/get-a-comic-shop-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListCreatorsUnauthorizedError`](./src/models/errors/list-creators-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetCreatorDetailsUnauthorizedError`](./src/models/errors/get-creator-details-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetCreatorsBlogPostsUnauthorizedError`](./src/models/errors/get-creators-blog-posts-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetCreatorsIssuesUnauthorizedError`](./src/models/errors/get-creators-issues-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetCreatorsSeriesUnauthorizedError`](./src/models/errors/get-creators-series-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListEventsUnauthorizedError`](./src/models/errors/list-events-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetAnEventUnauthorizedError`](./src/models/errors/get-an-event-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`FollowContentUnauthorizedError`](./src/models/errors/follow-content-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`UnfollowContentUnauthorizedError`](./src/models/errors/unfollow-content-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`CheckFollowStatusUnauthorizedError`](./src/models/errors/check-follow-status-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`UpdateFollowPreferencesUnauthorizedError`](./src/models/errors/update-follow-preferences-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetAchievementsForTheAuthenticatedUserUnauthorizedError`](./src/models/errors/get-achievements-for-the-authenticated-user-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListImprintsUnauthorizedError`](./src/models/errors/list-imprints-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetImprintDetailsUnauthorizedError`](./src/models/errors/get-imprint-details-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListIssuesUnauthorizedError`](./src/models/errors/list-issues-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetIssueDetailsUnauthorizedError`](./src/models/errors/get-issue-details-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetIssueVariantsUnauthorizedError`](./src/models/errors/get-issue-variants-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetVariantDetailsUnauthorizedError`](./src/models/errors/get-variant-details-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetIssueCreatorsUnauthorizedError`](./src/models/errors/get-issue-creators-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetIssueCharactersUnauthorizedError`](./src/models/errors/get-issue-characters-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetKeyIssueReasonsUnauthorizedError`](./src/models/errors/get-key-issue-reasons-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListKeyIssueReasonsUnauthorizedError`](./src/models/errors/list-key-issue-reasons-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`BrowseListsUnauthorizedError`](./src/models/errors/browse-lists-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`CreateListUnauthorizedError`](./src/models/errors/create-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`BrowseSystemListsUnauthorizedError`](./src/models/errors/browse-system-lists-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetListUnauthorizedError`](./src/models/errors/get-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`UpdateListUnauthorizedError`](./src/models/errors/update-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`DeleteListUnauthorizedError`](./src/models/errors/delete-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetUsersListsUnauthorizedError`](./src/models/errors/get-users-lists-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`AddItemToListUnauthorizedError`](./src/models/errors/add-item-to-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`RemoveItemFromListUnauthorizedError`](./src/models/errors/remove-item-from-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ReorderItemsUnauthorizedError`](./src/models/errors/reorder-items-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`SaveListUnauthorizedError`](./src/models/errors/save-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`UnsaveListUnauthorizedError`](./src/models/errors/unsave-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`LikeListUnauthorizedError`](./src/models/errors/like-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`UnlikeListUnauthorizedError`](./src/models/errors/unlike-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`LiveListingsUnauthorizedError`](./src/models/errors/live-listings-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewUnauthorizedError`](./src/models/errors/get-all-price-snapshots-for-all-grades-of-an-issuefor-pricing-overview-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`SubmitAMarketSaleUnauthorizedError`](./src/models/errors/submit-a-market-sale-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetTheAuthenticatedUsersNewsletterSubscriptionStatusUnauthorizedError`](./src/models/errors/get-the-authenticated-users-newsletter-subscription-status-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`SubscribeTheAuthenticatedUserToTheNewsletterUnauthorizedError`](./src/models/errors/subscribe-the-authenticated-user-to-the-newsletter-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`UnsubscribeTheAuthenticatedUserFromTheNewsletterUnauthorizedError`](./src/models/errors/unsubscribe-the-authenticated-user-from-the-newsletter-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListAllPodcastsWithOptionalSearchUnauthorizedError`](./src/models/errors/list-all-podcasts-with-optional-search-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetASpecificPodcastUnauthorizedError`](./src/models/errors/get-a-specific-podcast-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListEpisodesForASpecificPodcastUnauthorizedError`](./src/models/errors/list-episodes-for-a-specific-podcast-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetASpecificPodcastEpisodeUnauthorizedError`](./src/models/errors/get-a-specific-podcast-episode-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetUserProfileUnauthorizedError`](./src/models/errors/get-user-profile-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListAllPublishersWithOptionalSearchUnauthorizedError`](./src/models/errors/list-all-publishers-with-optional-search-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetPublisherDetailsUnauthorizedError`](./src/models/errors/get-publisher-details-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListSeriesUnauthorizedError`](./src/models/errors/list-series-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetSeriesDetailsUnauthorizedError`](./src/models/errors/get-series-details-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetSeriesIssuesUnauthorizedError`](./src/models/errors/get-series-issues-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetSeriesCreatorsUnauthorizedError`](./src/models/errors/get-series-creators-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetSeriesCharactersUnauthorizedError`](./src/models/errors/get-series-characters-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListAllStoryArcsWithOptionalSearchUnauthorizedError`](./src/models/errors/list-all-story-arcs-with-optional-search-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetStoryArcDetailUnauthorizedError`](./src/models/errors/get-story-arc-detail-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetStoryArcsForASpecificIssueUnauthorizedError`](./src/models/errors/get-story-arcs-for-a-specific-issue-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetStoryArcsForASpecificCharacterUnauthorizedError`](./src/models/errors/get-story-arcs-for-a-specific-character-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetStoryArcsForASpecificUniverseUnauthorizedError`](./src/models/errors/get-story-arcs-for-a-specific-universe-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListAllTeamsWithOptionalSearchUnauthorizedError`](./src/models/errors/list-all-teams-with-optional-search-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetASpecificTeamUnauthorizedError`](./src/models/errors/get-a-specific-team-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetCharactersForASpecificTeammembersUnauthorizedError`](./src/models/errors/get-characters-for-a-specific-teammembers-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetSeriesForASpecificTeamUnauthorizedError`](./src/models/errors/get-series-for-a-specific-team-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetIssuesForASpecificTeamUnauthorizedError`](./src/models/errors/get-issues-for-a-specific-team-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListTitlesUnauthorizedError`](./src/models/errors/list-titles-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetASpecificTitleUnauthorizedError`](./src/models/errors/get-a-specific-title-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListUniversesUnauthorizedError`](./src/models/errors/list-universes-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetASpecificUniverseUnauthorizedError`](./src/models/errors/get-a-specific-universe-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetTheAuthenticatedUserUnauthorizedError`](./src/models/errors/get-the-authenticated-user-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListPullListUnauthorizedError`](./src/models/errors/list-pull-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListWishlistUnauthorizedError`](./src/models/errors/list-wishlist-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListFollowsUnauthorizedError`](./src/models/errors/list-follows-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListReadStatusUnauthorizedError`](./src/models/errors/list-read-status-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`AddToPullListUnauthorizedError`](./src/models/errors/add-to-pull-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`RemoveFromPullListUnauthorizedError`](./src/models/errors/remove-from-pull-list-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`MarkAsReadUnauthorizedError`](./src/models/errors/mark-as-read-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`EditReadingDateUnauthorizedError`](./src/models/errors/edit-reading-date-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`MarkAsUnreadUnauthorizedError`](./src/models/errors/mark-as-unread-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`AddToWishlistUnauthorizedError`](./src/models/errors/add-to-wishlist-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`RemoveFromWishlistUnauthorizedError`](./src/models/errors/remove-from-wishlist-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`ListCollectionUnauthorizedError`](./src/models/errors/list-collection-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`AddIssueToCollectionUnauthorizedError`](./src/models/errors/add-issue-to-collection-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`UpdateCollectionItemUnauthorizedError`](./src/models/errors/update-collection-item-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`RemoveIssueFromCollectionUnauthorizedError`](./src/models/errors/remove-issue-from-collection-unauthorized-error.ts): Unauthenticated. The bearer token is missing, invalid, or revoked. Status code `401`. Applicable to 1 of 94 methods.*
* [`GetCharacterSeriesPaymentRequiredError`](./src/models/errors/get-character-series-payment-required-error.ts): PRO subscription required (User API only). Status code `402`. Applicable to 1 of 94 methods.*
* [`GetCharacterIssuesPaymentRequiredError`](./src/models/errors/get-character-issues-payment-required-error.ts): PRO subscription required (User API only). Status code `402`. Applicable to 1 of 94 methods.*
* [`GetCharacterTeamsPaymentRequiredError`](./src/models/errors/get-character-teams-payment-required-error.ts): PRO subscription required (User API only). Status code `402`. Applicable to 1 of 94 methods.*
* [`GetIssueVariantsPaymentRequiredError`](./src/models/errors/get-issue-variants-payment-required-error.ts): PRO Required. Status code `402`. Applicable to 1 of 94 methods.*
* [`GetVariantDetailsPaymentRequiredError`](./src/models/errors/get-variant-details-payment-required-error.ts): PRO Required. Status code `402`. Applicable to 1 of 94 methods.*
* [`GetIssueCreatorsPaymentRequiredError`](./src/models/errors/get-issue-creators-payment-required-error.ts): PRO Required. Status code `402`. Applicable to 1 of 94 methods.*
* [`GetIssueCharactersPaymentRequiredError`](./src/models/errors/get-issue-characters-payment-required-error.ts): PRO Required. Status code `402`. Applicable to 1 of 94 methods.*
* [`GetKeyIssueReasonsPaymentRequiredError`](./src/models/errors/get-key-issue-reasons-payment-required-error.ts): PRO Required. Status code `402`. Applicable to 1 of 94 methods.*
* [`GetSeriesIssuesPaymentRequiredError`](./src/models/errors/get-series-issues-payment-required-error.ts): PRO Required. Status code `402`. Applicable to 1 of 94 methods.*
* [`GetSeriesCreatorsPaymentRequiredError`](./src/models/errors/get-series-creators-payment-required-error.ts): PRO Required. Status code `402`. Applicable to 1 of 94 methods.*
* [`GetSeriesCharactersPaymentRequiredError`](./src/models/errors/get-series-characters-payment-required-error.ts): PRO Required. Status code `402`. Applicable to 1 of 94 methods.*
* [`GetStoryArcsForASpecificIssuePaymentRequiredError`](./src/models/errors/get-story-arcs-for-a-specific-issue-payment-required-error.ts): PRO subscription required (User API only). Status code `402`. Applicable to 1 of 94 methods.*
* [`GetStoryArcsForASpecificCharacterPaymentRequiredError`](./src/models/errors/get-story-arcs-for-a-specific-character-payment-required-error.ts): PRO subscription required (User API only). Status code `402`. Applicable to 1 of 94 methods.*
* [`GetStoryArcsForASpecificUniversePaymentRequiredError`](./src/models/errors/get-story-arcs-for-a-specific-universe-payment-required-error.ts): PRO subscription required (User API only). Status code `402`. Applicable to 1 of 94 methods.*
* [`LookupByUPCForbiddenError`](./src/models/errors/lookup-by-upc-forbidden-error.ts): Missing Ability. Status code `403`. Applicable to 1 of 94 methods.*
* [`LookupByISBNForbiddenError`](./src/models/errors/lookup-by-isbn-forbidden-error.ts): Missing Ability. Status code `403`. Applicable to 1 of 94 methods.*
* [`CreateListForbiddenError`](./src/models/errors/create-list-forbidden-error.ts): Limit Reached. Status code `403`. Applicable to 1 of 94 methods.*
* [`GetListForbiddenError`](./src/models/errors/get-list-forbidden-error.ts): Private List. Status code `403`. Applicable to 1 of 94 methods.*
* [`UpdateListForbiddenError`](./src/models/errors/update-list-forbidden-error.ts): Unauthorized. Status code `403`. Applicable to 1 of 94 methods.*
* [`ResponseBodyError1`](./src/models/errors/response-body-error1.ts): Wishlist. Status code `403`. Applicable to 1 of 94 methods.*
* [`ResponseBodyError2`](./src/models/errors/response-body-error2.ts): Unauthorized. Status code `403`. Applicable to 1 of 94 methods.*
* [`AddItemToListForbiddenError`](./src/models/errors/add-item-to-list-forbidden-error.ts): Item Limit. Status code `403`. Applicable to 1 of 94 methods.*
* [`RemoveItemFromListForbiddenError`](./src/models/errors/remove-item-from-list-forbidden-error.ts): Unauthorized. Status code `403`. Applicable to 1 of 94 methods.*
* [`SaveListForbiddenError`](./src/models/errors/save-list-forbidden-error.ts): Own List. Status code `403`. Applicable to 1 of 94 methods.*
* [`LikeListForbiddenError`](./src/models/errors/like-list-forbidden-error.ts): Own List. Status code `403`. Applicable to 1 of 94 methods.*
* [`AddIssueToCollectionForbiddenError`](./src/models/errors/add-issue-to-collection-forbidden-error.ts): Account Pending Deletion. Status code `403`. Applicable to 1 of 94 methods.*
* [`LookupByUPCNotFoundError`](./src/models/errors/lookup-by-upc-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`LookupByISBNNotFoundError`](./src/models/errors/lookup-by-isbn-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`GetCharacterDetailsNotFoundError`](./src/models/errors/get-character-details-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`GetCreatorDetailsNotFoundError`](./src/models/errors/get-creator-details-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`FollowContentNotFoundError`](./src/models/errors/follow-content-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`UnfollowContentNotFoundError`](./src/models/errors/unfollow-content-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`GetIssueDetailsNotFoundError`](./src/models/errors/get-issue-details-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`GetVariantDetailsNotFoundError`](./src/models/errors/get-variant-details-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`GetListNotFoundError`](./src/models/errors/get-list-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`RemoveItemFromListNotFoundError`](./src/models/errors/remove-item-from-list-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`LiveListingsNotFoundError`](./src/models/errors/live-listings-not-found-error.ts): Market Disabled. Status code `404`. Applicable to 1 of 94 methods.*
* [`UnsubscribeTheAuthenticatedUserFromTheNewsletterNotFoundError`](./src/models/errors/unsubscribe-the-authenticated-user-from-the-newsletter-not-found-error.ts): . Status code `404`. Applicable to 1 of 94 methods.*
* [`GetUserProfileNotFoundError`](./src/models/errors/get-user-profile-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`GetSeriesDetailsNotFoundError`](./src/models/errors/get-series-details-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`UpdateCollectionItemNotFoundError`](./src/models/errors/update-collection-item-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`RemoveIssueFromCollectionNotFoundError`](./src/models/errors/remove-issue-from-collection-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 94 methods.*
* [`LookupByUPCConflictError`](./src/models/errors/lookup-by-upc-conflict-error.ts): Multiple Matches. Status code `409`. Applicable to 1 of 94 methods.*
* [`AddItemToListConflictError`](./src/models/errors/add-item-to-list-conflict-error.ts): Already Exists. Status code `409`. Applicable to 1 of 94 methods.*
* [`SubmitAMarketSaleConflictError`](./src/models/errors/submit-a-market-sale-conflict-error.ts): Duplicate. Status code `409`. Applicable to 1 of 94 methods.*
* [`SubscribeTheAuthenticatedUserToTheNewsletterConflictError`](./src/models/errors/subscribe-the-authenticated-user-to-the-newsletter-conflict-error.ts): . Status code `409`. Applicable to 1 of 94 methods.*
* [`UpdateFollowPreferencesUnprocessableEntityError`](./src/models/errors/update-follow-preferences-unprocessable-entity-error.ts): Not Following. Status code `422`. Applicable to 1 of 94 methods.*
* [`AddToPullListUnprocessableEntityError`](./src/models/errors/add-to-pull-list-unprocessable-entity-error.ts): Series Not Found. Status code `422`. Applicable to 1 of 94 methods.*
* [`MarkAsReadUnprocessableEntityError`](./src/models/errors/mark-as-read-unprocessable-entity-error.ts): Invalid Variant. Status code `422`. Applicable to 1 of 94 methods.*
* [`AddToWishlistUnprocessableEntityError`](./src/models/errors/add-to-wishlist-unprocessable-entity-error.ts): Wishlist Full. Status code `422`. Applicable to 1 of 94 methods.*
* [`AddIssueToCollectionUnprocessableEntityError`](./src/models/errors/add-issue-to-collection-unprocessable-entity-error.ts): Invalid Variant. Status code `422`. Applicable to 1 of 94 methods.*
* [`GetActivityFeedTooManyRequestsError`](./src/models/errors/get-activity-feed-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`LookupByUPCTooManyRequestsError`](./src/models/errors/lookup-by-upc-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`LookupByISBNTooManyRequestsError`](./src/models/errors/lookup-by-isbn-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListCharactersTooManyRequestsError`](./src/models/errors/list-characters-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetCharacterDetailsTooManyRequestsError`](./src/models/errors/get-character-details-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetCharacterSeriesTooManyRequestsError`](./src/models/errors/get-character-series-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetCharacterIssuesTooManyRequestsError`](./src/models/errors/get-character-issues-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetCharacterTeamsTooManyRequestsError`](./src/models/errors/get-character-teams-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListComicShopsTooManyRequestsError`](./src/models/errors/list-comic-shops-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetAComicShopTooManyRequestsError`](./src/models/errors/get-a-comic-shop-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListCreatorsTooManyRequestsError`](./src/models/errors/list-creators-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetCreatorDetailsTooManyRequestsError`](./src/models/errors/get-creator-details-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetCreatorsBlogPostsTooManyRequestsError`](./src/models/errors/get-creators-blog-posts-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetCreatorsIssuesTooManyRequestsError`](./src/models/errors/get-creators-issues-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetCreatorsSeriesTooManyRequestsError`](./src/models/errors/get-creators-series-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListEventsTooManyRequestsError`](./src/models/errors/list-events-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetAnEventTooManyRequestsError`](./src/models/errors/get-an-event-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`FollowContentTooManyRequestsError`](./src/models/errors/follow-content-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`UnfollowContentTooManyRequestsError`](./src/models/errors/unfollow-content-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`CheckFollowStatusTooManyRequestsError`](./src/models/errors/check-follow-status-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`UpdateFollowPreferencesTooManyRequestsError`](./src/models/errors/update-follow-preferences-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetAchievementsForTheAuthenticatedUserTooManyRequestsError`](./src/models/errors/get-achievements-for-the-authenticated-user-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListImprintsTooManyRequestsError`](./src/models/errors/list-imprints-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetImprintDetailsTooManyRequestsError`](./src/models/errors/get-imprint-details-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListIssuesTooManyRequestsError`](./src/models/errors/list-issues-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetIssueDetailsTooManyRequestsError`](./src/models/errors/get-issue-details-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetIssueVariantsTooManyRequestsError`](./src/models/errors/get-issue-variants-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetVariantDetailsTooManyRequestsError`](./src/models/errors/get-variant-details-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetIssueCreatorsTooManyRequestsError`](./src/models/errors/get-issue-creators-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetIssueCharactersTooManyRequestsError`](./src/models/errors/get-issue-characters-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetKeyIssueReasonsTooManyRequestsError`](./src/models/errors/get-key-issue-reasons-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListKeyIssueReasonsTooManyRequestsError`](./src/models/errors/list-key-issue-reasons-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`BrowseListsTooManyRequestsError`](./src/models/errors/browse-lists-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`CreateListTooManyRequestsError`](./src/models/errors/create-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`BrowseSystemListsTooManyRequestsError`](./src/models/errors/browse-system-lists-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetListTooManyRequestsError`](./src/models/errors/get-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`UpdateListTooManyRequestsError`](./src/models/errors/update-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`DeleteListTooManyRequestsError`](./src/models/errors/delete-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetUsersListsTooManyRequestsError`](./src/models/errors/get-users-lists-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`AddItemToListTooManyRequestsError`](./src/models/errors/add-item-to-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`RemoveItemFromListTooManyRequestsError`](./src/models/errors/remove-item-from-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ReorderItemsTooManyRequestsError`](./src/models/errors/reorder-items-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`SaveListTooManyRequestsError`](./src/models/errors/save-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`UnsaveListTooManyRequestsError`](./src/models/errors/unsave-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`LikeListTooManyRequestsError`](./src/models/errors/like-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`UnlikeListTooManyRequestsError`](./src/models/errors/unlike-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`LiveListingsTooManyRequestsError`](./src/models/errors/live-listings-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetAllPriceSnapshotsForAllGradesOfAnIssueforPricingOverviewTooManyRequestsError`](./src/models/errors/get-all-price-snapshots-for-all-grades-of-an-issuefor-pricing-overview-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`SubmitAMarketSaleTooManyRequestsError`](./src/models/errors/submit-a-market-sale-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetTheAuthenticatedUsersNewsletterSubscriptionStatusTooManyRequestsError`](./src/models/errors/get-the-authenticated-users-newsletter-subscription-status-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`SubscribeTheAuthenticatedUserToTheNewsletterTooManyRequestsError`](./src/models/errors/subscribe-the-authenticated-user-to-the-newsletter-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`UnsubscribeTheAuthenticatedUserFromTheNewsletterTooManyRequestsError`](./src/models/errors/unsubscribe-the-authenticated-user-from-the-newsletter-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListAllPodcastsWithOptionalSearchTooManyRequestsError`](./src/models/errors/list-all-podcasts-with-optional-search-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetASpecificPodcastTooManyRequestsError`](./src/models/errors/get-a-specific-podcast-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListEpisodesForASpecificPodcastTooManyRequestsError`](./src/models/errors/list-episodes-for-a-specific-podcast-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetASpecificPodcastEpisodeTooManyRequestsError`](./src/models/errors/get-a-specific-podcast-episode-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetUserProfileTooManyRequestsError`](./src/models/errors/get-user-profile-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListAllPublishersWithOptionalSearchTooManyRequestsError`](./src/models/errors/list-all-publishers-with-optional-search-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetPublisherDetailsTooManyRequestsError`](./src/models/errors/get-publisher-details-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListSeriesTooManyRequestsError`](./src/models/errors/list-series-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetSeriesDetailsTooManyRequestsError`](./src/models/errors/get-series-details-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetSeriesIssuesTooManyRequestsError`](./src/models/errors/get-series-issues-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetSeriesCreatorsTooManyRequestsError`](./src/models/errors/get-series-creators-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetSeriesCharactersTooManyRequestsError`](./src/models/errors/get-series-characters-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListAllStoryArcsWithOptionalSearchTooManyRequestsError`](./src/models/errors/list-all-story-arcs-with-optional-search-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetStoryArcDetailTooManyRequestsError`](./src/models/errors/get-story-arc-detail-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetStoryArcsForASpecificIssueTooManyRequestsError`](./src/models/errors/get-story-arcs-for-a-specific-issue-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetStoryArcsForASpecificCharacterTooManyRequestsError`](./src/models/errors/get-story-arcs-for-a-specific-character-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetStoryArcsForASpecificUniverseTooManyRequestsError`](./src/models/errors/get-story-arcs-for-a-specific-universe-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListAllTeamsWithOptionalSearchTooManyRequestsError`](./src/models/errors/list-all-teams-with-optional-search-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetASpecificTeamTooManyRequestsError`](./src/models/errors/get-a-specific-team-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetCharactersForASpecificTeammembersTooManyRequestsError`](./src/models/errors/get-characters-for-a-specific-teammembers-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetSeriesForASpecificTeamTooManyRequestsError`](./src/models/errors/get-series-for-a-specific-team-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetIssuesForASpecificTeamTooManyRequestsError`](./src/models/errors/get-issues-for-a-specific-team-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListTitlesTooManyRequestsError`](./src/models/errors/list-titles-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetASpecificTitleTooManyRequestsError`](./src/models/errors/get-a-specific-title-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListUniversesTooManyRequestsError`](./src/models/errors/list-universes-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetASpecificUniverseTooManyRequestsError`](./src/models/errors/get-a-specific-universe-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`GetTheAuthenticatedUserTooManyRequestsError`](./src/models/errors/get-the-authenticated-user-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListPullListTooManyRequestsError`](./src/models/errors/list-pull-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListWishlistTooManyRequestsError`](./src/models/errors/list-wishlist-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListFollowsTooManyRequestsError`](./src/models/errors/list-follows-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListReadStatusTooManyRequestsError`](./src/models/errors/list-read-status-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`AddToPullListTooManyRequestsError`](./src/models/errors/add-to-pull-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`RemoveFromPullListTooManyRequestsError`](./src/models/errors/remove-from-pull-list-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`MarkAsReadTooManyRequestsError`](./src/models/errors/mark-as-read-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`EditReadingDateTooManyRequestsError`](./src/models/errors/edit-reading-date-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`MarkAsUnreadTooManyRequestsError`](./src/models/errors/mark-as-unread-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`AddToWishlistTooManyRequestsError`](./src/models/errors/add-to-wishlist-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`RemoveFromWishlistTooManyRequestsError`](./src/models/errors/remove-from-wishlist-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`ListCollectionTooManyRequestsError`](./src/models/errors/list-collection-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 300/hour (free) or 1,000/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`AddIssueToCollectionTooManyRequestsError`](./src/models/errors/add-issue-to-collection-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`UpdateCollectionItemTooManyRequestsError`](./src/models/errors/update-collection-item-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
* [`RemoveIssueFromCollectionTooManyRequestsError`](./src/models/errors/remove-issue-from-collection-too-many-requests-error.ts): Rate limit exceeded. This endpoint allows 150/hour (free) or 500/hour (PRO). Wait for the number of seconds in the `Retry-After` header before retrying. Status code `429`. Applicable to 1 of 94 methods.*
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
  const result = await verseDB.activity.getActivityFeed({
    perPage: 20,
  });

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
