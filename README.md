# frontend-hosting-template

フロントエンド（静的サイト）のデプロイを試す用のテンプレートリポジトリです。

## Technology

* [Svelte](https://svelte.dev) */ Generated with [Svelte template](https://github.com/sveltejs/template)*
* JavaScript

## Getting started

* Install

```bash
$ git clone git@github.com:KotaTanaka/frontend-hosting-template.git
$ cd frontend-hosting-template
$ yarn
```

* Run

```bash
$ yarn dev
```

→ http://localhost:5000

* Build

```bash
$ yarn build
```

* Run in production mode

```bash
$ yarn start
```

## Hosting settings

| Service | Setting | URL |
|:---|:---|:---|
| [Netlify](https://www.netlify.com) | `netlify.toml` | https://frontend-hosting-template.netlify.com |
| [AWS Amplify](https://aws.amazon.com/jp/amplify) | `amplify.yml` | https://master.d2wib2s5x5hg1d.amplifyapp.com |
| GitHub Pages | `.github/workflows/gh-pages.yml` | https://kotatanaka.github.io/frontend-hosting-template |
