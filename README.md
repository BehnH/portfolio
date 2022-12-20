# 📚 Personal Website
[Cloudflare Pages](https://pages.cloudflare.com)-based website using the Next.JS framework and TailwindCSS for my personal website.

## Setting up the project
### Pre-requisites
- Install [Node.JS](https://nodejs.org/en/) and NPM
- Ensure you have a Cloudflare account with a domain added

### Setting up your local environment
1. Clone the project to your local machine
```
$ git@github.com:BehnH/portfolio.git
```
2. Install the project dependencies
```
$ npm i
```
3. Run the site in development mode (Fast-refresh mode)
```
$ npm run dev
```

### Publishing to Cloudflare Pages
Follow the guide in the Cloudflare Pages docs to deploy using a repository:

🔗 https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#deploying-with-cloudflare-pages

You will need to add 2 Environment Variables, otherwise some React dependencies **will** fail to build:
- `NODE_VERSION` - This should be set to the most recent Node.JS LTS version
- `NPM_VERSION` - This should be set to the most recent NPM stable NPM version
