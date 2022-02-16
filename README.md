# HYPEBEAR &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

This project provides rest api and NFT MARKET. It also provides nft transport and publishing and nft search.


## requirements 

```bash
# npm install
curl -O -L https://npmjs.org/install.sh

# nvm node version manager install (recommend)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# node version 16
nvm install 16
nvm use 16
```


## REST API SERVER

### Why do we need rest api?

We made this simple list so that you can easily check it. So, if you extend this function, you can use it for filters, etc. This function is linked with the opensea api. Therefore, limitations exist.

#### How to start 
```bash
cd server
npm ci
npm run start
```

#### HOW?

|METHOD|PATH|Explanation| 
|----|---|---|
|GET|/account/:walletaddress|You can check the nft works in your wallet.|


## Wallet NFT Client

The function exists for the convenience of using the site.

#### How to start

```bash
cd client
npm ci
npm run start
```

![example](https://github.com/codestates/beb-02-hypebear/blob/main/gif/output.gif)



### License
React is [MIT licensed](./LICENSE)
