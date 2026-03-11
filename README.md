<h1 align="center">Github Unofficial Trending API</h1>

<p align="center">:octocat: A simple API that returns number of Github trending repositories and developers.</p>

<div align="center">
  <img src="images/hero.svg" alt="hero image" width="400"/>
  <br>
  <p>
    <em>Credits: Illustration by <a href="https://undraw.co/">unDraw</a></em>
  </p>
</div>

<br />

[![Financial Contributors on Open Collective](https://opencollective.com/github-trending-api/all/badge.svg?label=financial+contributors)](https://opencollective.com/github-trending-api) [![GitHub closed issues](https://img.shields.io/github/issues-closed/huchenme/github-trending-api.svg)](https://github.com/huchenme/github-trending-api/issues)
[![Travis](https://img.shields.io/travis/huchenme/github-trending-api.svg)](https://travis-ci.org/huchenme/github-trending-api)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![coverage](https://img.shields.io/codecov/c/github/huchenme/github-trending-api.svg)](https://codecov.io/github/huchenme/github-trending-api)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/huchenme/github-trending-api/blob/master/LICENSE)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg)](CODE_OF_CONDUCT.md)

[![npm (scoped)](https://img.shields.io/npm/v/@huchenme/github-trending.svg)](https://www.npmjs.com/package/@huchenme/github-trending)
[![module formats: cjs, es](https://img.shields.io/badge/module%20formats-cjs%2C%20esm-green.svg)](https://unpkg.com/@huchenme/github-trending/dist/)

---

## Table of Contents

<details>

<summary><b>Expand Table of Contents</b></summary>

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Projects using github-trending-api](#projects-using-github-trending-api)
- [Backers](#backers)
- [API Status](#api-status)
- [REST API](#rest-api)
- [Tutorial](#tutorial)
  - [Trending Repositories](#trending-repositories)
  - [Trending Developers](#trending-developers)
  - [List Languages](#list-languages)
  - [List Spoken Languages](#list-spoken-languages)
- [NPM Package](#npm-package)
  - [Install](#install)
  - [Usage](#usage)
  - [API](#api)
    - [languages](#languages)
    - [spokenLanguages](#spokenlanguages)
    - [fetchRepositories(params)](#fetchrepositoriesparams)
    - [fetchDevelopers(params)](#fetchdevelopersparams)
- [Deployment](#deployment)
  - [Vercel](#vercel)
  - [Cloudflare Workers](#cloudflare-workers)
- [docker](#docker)
- [Contributors](#contributors)
  - [Code Contributors](#code-contributors)
  - [Financial Contributors](#financial-contributors)
    - [Individuals](#individuals)
    - [Organizations](#organizations)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

</details>

## Projects using github-trending-api

- **[Hacker Tab](https://github.com/huchenme/hacker-tab-extension)** ([Chrome Store](https://chrome.google.com/webstore/detail/hacker-tab/ibomigipadcieapbemkegkmadbbanbgm)): Chrome extension to view GitHub trending projects on new tab.
- **[github-trending-plus](https://github.com/zircleUI/github-trending-plus)** ([Live](https://github-trending-plus.surge.sh/)): ✨ Experimental Github trending UI.
- **[HitUp](https://github.com/wonderbeyond/HitUP)** ([Chrome Store](https://chrome.google.com/webstore/detail/hitup/eiokaohkigpbonodjcbjpecbnccijkjb)) ([Website](https://hitup.wondertools.top/)): Help you find top things, including GitHub Trending Repositories.
- **[Gitter](https://github.com/huangjianke/Gitter)**: Gitter for GitHub - 可能是目前颜值最高的 GitHub 小程序客户端.
- **[flutter_wanandroid](https://github.com/Sky24n/flutter_wanandroid)**:
  Flutter 完整项目，WanAndroid 客户端，BLoC、RxDart 、国际化、主题色、启动页、引导页，拥有较好的项目结构&比较规范的代码！
- **[vsc-github-trending](https://github.com/4gray/vsc-github-trending)**: ([VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=4gray.vsc-github-trending#overview)): Explore Github Trending repositories directly from Visual Studio Code
- **[GiTiny](https://github.com/k-lpmg/GiTiny)**([AppStore](https://itunes.apple.com/app/tiny-github/id1461424565)): iOS app for GitHub with exploring trending.
- **[SwiftHub](https://github.com/khoren93/SwiftHub)**: GitHub iOS client written in RxSwift and MVVM clean architecture.
- **[GitNews](https://git.news)**: Trending repositories from GitHub, HackerNews & Reddit (Mobile & Desktop).
- **[mini-github](https://github.com/kezhenxu94/mini-github)**: GitHub WeChat Mini Program (可能是全网功能最全的 GitHub 微信小程序).
- **[StarGit](https://github.com/theArgex/stargit2.0)** ([Website](https://stargit.xyz)): Find trending repositories from GitHub. Built with Angular.
- **[GitTouch](https://github.com/pd4d10/git-touch)** ([App Store](https://itunes.apple.com/us/app/gittouch/id1452042346), [Google Play](https://play.google.com/store/apps/details?id=io.github.pd4d10.gittouch)): Open source GitHub App built with Flutter.
- **[lazyhub](https://github.com/ryo-ma/lazyhub)**: :octocat: lazyhub - Terminal UI Client for GitHub using gocui.
- **[Gitrepos](https://github.com/Hyraze/gitrepos)** ([Website](https://gitrepos.now.sh)): :octocat: A simple PWA app that returns Trending Repositories & Developers from GitHub, Gitlab & HackerNews.
- **[Trendzz](https://github.com/omarryhan/trendzz)** ([Website](https://trendzz.netlify.app)): Github trending PWA focusing on usability.
- **[Ceelog](https://mp.weixin.qq.com/s?__biz=MzAwOTMxMzgxMA==&mid=2647972345&idx=1&sn=8b316d6b89b9aae2454f89144ffafa61&chksm=8341f284b4367b9227901a69bcb49be191a4c1e4054a2df464a58b073745e225a943ad808db4&token=1659362714&lang=zh_CN#rd)** Github trending in WeChat Official Account Platform.

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/github-trending-api#backer)]

<a href="https://opencollective.com/github-trending-api#backers" target="_blank"><img src="https://opencollective.com/github-trending-api/backers.svg?width=890"></a>

<a href="https://www.buymeacoffee.com/huchenme" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## API Status

API status is available at [uptimerobot](https://stats.uptimerobot.com/K6yKjcKlM).

## REST API

See the full API documentation in [Apiary](https://githubtrendingapi.docs.apiary.io/#).

## Tutorial

[How to scrape any website and build an API using cheerio.js](https://medium.com/@chen/how-to-scrape-any-website-and-build-an-api-using-cheerio-js-6a3f0c651d2e?source=friends_link&sk=7b76d9abf0b6c572042238906e281228)

### Trending Repositories

Receive an array of trending repositories.

**URL Endpoint:**

https://github-trending-api-ten.vercel.app/repositories?language=javascript&since=weekly

**Parameters:**

- `language`: **optional**, list trending repositories of certain programming languages, possible values are listed [here](./src/languages.json).
- `since`: **optional**, default to `daily`, possible values: `daily`, `weekly` and `monthly`.
- `spoken_language_code`: **optional**, list trending repositories of certain spoken languages (e.g English, Chinese), possible values are listed [here](./src/spoken-languages.json).

**Response:**

```json
[
  ...
  {
    "author": "google",
    "name": "gvisor",
    "avatar": "https://github.com/google.png",
    "url": "https://github.com/google/gvisor",
    "description": "Container Runtime Sandbox",
    "language": "Go",
    "languageColor": "#3572A5",
    "stars": 3320,
    "forks": 118,
    "currentPeriodStars": 1624,
    "builtBy": [
      {
        "href": "https://github.com/viatsko",
        "avatar": "https://avatars0.githubusercontent.com/u/376065",
        "username": "viatsko"
      }
    ]
  }
  ...
]
```

> Note that [GitHub trending page](http://github.com/trending) sometimes is empty, in that case this API returns `[]` in response, your application should be able to handle it or read from previous cache.

### Trending Developers

Receive an array of trending developers.

**URL Endpoint:**

https://github-trending-api-ten.vercel.app/developers?language=javascript&since=weekly

**Parameters:**

- `language`: **optional**, list trending repositories of certain programming languages, possible values are listed [here](./src/languages.json).
- `since`: **optional**, default to `daily`, possible values: `daily`, `weekly` and `monthly`.

**Response:**

```json
[
  {
    "username": "google",
    "name": "Google",
    "type": "organization",
    "url": "https://github.com/google",
    "avatar": "https://avatars0.githubusercontent.com/u/1342004",
    "repo": {
      "name": "traceur-compiler",
      "description": "Traceur is a JavaScript.next-to-JavaScript-of-today compiler",
      "url": "https://github.com/google/traceur-compiler"
    }
  }
]
```

> `type` could be `organization` or `user`.

### List Languages

**URL Endpoint:**

https://github-trending-api-ten.vercel.app/languages

**Response:**

```json
[
  {
    "urlParam": "1c-enterprise",
    "name": "1C Enterprise"
  },
  {
    "urlParam": "abap",
    "name": "ABAP"
  },
  {
    "urlParam": "abnf",
    "name": "ABNF"
  },
  {
    "urlParam": "actionscript",
    "name": "ActionScript"
  }
]
```

### List Spoken Languages

**URL Endpoint:**

https://github-trending-api-ten.vercel.app/spoken_languages

**Response:**

```json
[
  {
    "urlParam": "ab",
    "name": "Abkhazian"
  },
  {
    "urlParam": "aa",
    "name": "Afar"
  },
  {
    "urlParam": "af",
    "name": "Afrikaans"
  },
  {
    "urlParam": "ak",
    "name": "Akan"
  }
]
```

## NPM Package

You could also use the API as a NPM package.

### Install

```sh
$ npm install --save @huchenme/github-trending
```

### Usage

```js
import {
  languages,
  spokenLanguages,
  fetchRepositories,
  fetchDevelopers,
} from '@huchenme/github-trending';

fetchRepositories({ language: 'ruby', since: 'monthly' }).then(
  (repositories) => {
    console.log(repositories);
  },
);

fetchDevelopers({ language: 'javascript' }).then((developers) => {
  console.log(developers);
});

console.log(languages);
console.log(spokenLanguages);
```

### API

#### languages

List all languages

```js
[
  {
    urlParam: '1c-enterprise',
    name: '1C Enterprise',
  },
  {
    urlParam: 'abap',
    name: 'ABAP',
  },
  {
    urlParam: 'abnf',
    name: 'ABNF',
  },
  {
    urlParam: 'actionscript',
    name: 'ActionScript',
  },
];
```

#### spokenLanguages

List all spoken languages

```js
[
  {
    urlParam: 'ab',
    name: 'Abkhazian',
  },
  {
    urlParam: 'aa',
    name: 'Afar',
  },
  {
    urlParam: 'af',
    name: 'Afrikaans',
  },
  {
    urlParam: 'ak',
    name: 'Akan',
  },
];
```

#### fetchRepositories(params)

Receive an array of trending repositories.

**params**:

- `language`: possible values are the the ones from `languages` or [just find here](./src/languages.json).
- `since`: `daily`, `weekly` or `monthly`, default to `daily`.
- `spokenLanguageCode`: possible values are the the ones from `spokenLanguages` or [just find here](./src/spoken-languages.json).

```js
[
  ...
  {
    author: 'google',
    name: 'gvisor',
    avatar: 'https://github.com/google.png',
    url: 'https://github.com/google/gvisor',
    description: 'Container Runtime Sandbox',
    language: 'Go',
    languageColor: '#3572A5',
    stars: 3320,
    forks: 118,
    currentPeriodStars: 1624,
    "builtBy": [
      {
        "href": "https://github.com/viatsko",
        "avatar": "https://avatars0.githubusercontent.com/u/376065",
        "username": "viatsko"
      }
    ]
  }
  ...
]
```

#### fetchDevelopers(params)

Receive an array of trending developers.

**params**:

- `language`: possible values are the the ones from `languages` or [just find here](languages.json).
- `since`: `daily`, `weekly` or `monthly`, default to `daily`.

```js
[
  ...
  {
    username: 'google',
    name: 'Google',
    type: 'organization',
    url: 'https://github.com/google',
    avatar: 'https://avatars0.githubusercontent.com/u/1342004',
    repo: {
      name: 'traceur-compiler',
      description:
        'Traceur is a JavaScript.next-to-JavaScript-of-today compiler',
      url: 'https://github.com/google/traceur-compiler'
    }
  }
  ...
]
```

## Deployment

This API is designed to run completely serverless, without any backend.

### Vercel

You can easily deploy your own instance of this API to [Vercel](https://vercel.com). The repository contains Vercel serverless functions inside the `api/` directory.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhuchenme%2Fgithub-trending-api)

1. Fork this repository or click the **Deploy with Vercel** button above.
2. Vercel will automatically detect the configuration in `vercel.json` and build the API routes.

### Cloudflare Workers

You can also deploy this API using [Cloudflare Workers](https://workers.cloudflare.com/). A ready-to-use `cloudflare-worker.js` and `wrangler.toml` are included.

1. Ensure you have [`wrangler`](https://developers.cloudflare.com/workers/wrangler/) installed:
   ```sh
   npm install -g wrangler
   ```
2. Authenticate wrangler with your Cloudflare account:
   ```sh
   wrangler login
   ```
3. Deploy the worker:
   ```sh
   wrangler deploy
   ```

## docker

You can develop by using docker.

```
$ docker build -t github-trending-api .
$ docker run -d --rm -p 8000:8888 github-trending-api:latest
```

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/huchenme/github-trending-api/graphs/contributors"><img src="https://opencollective.com/github-trending-api/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/github-trending-api/contribute)]

#### Individuals

<a href="https://opencollective.com/github-trending-api"><img src="https://opencollective.com/github-trending-api/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/github-trending-api/contribute)]

<a href="https://opencollective.com/github-trending-api/organization/0/website"><img src="https://opencollective.com/github-trending-api/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/github-trending-api/organization/1/website"><img src="https://opencollective.com/github-trending-api/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/github-trending-api/organization/2/website"><img src="https://opencollective.com/github-trending-api/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/github-trending-api/organization/3/website"><img src="https://opencollective.com/github-trending-api/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/github-trending-api/organization/4/website"><img src="https://opencollective.com/github-trending-api/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/github-trending-api/organization/5/website"><img src="https://opencollective.com/github-trending-api/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/github-trending-api/organization/6/website"><img src="https://opencollective.com/github-trending-api/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/github-trending-api/organization/7/website"><img src="https://opencollective.com/github-trending-api/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/github-trending-api/organization/8/website"><img src="https://opencollective.com/github-trending-api/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/github-trending-api/organization/9/website"><img src="https://opencollective.com/github-trending-api/organization/9/avatar.svg"></a>

## License

MIT
