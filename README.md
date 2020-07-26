[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com) ![Serverless ESBuild CI](https://github.com/Hebilicious/serverless-esbuild-template/workflows/Serverless%20ESBuild%20CI/badge.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Serverless Esbuild Template

This is a template repository to get you started really quickly with the serverless framework and typescript, using the incredible esbuild.
It is slighlty opinionated.

## Features

### ⚡ serverless + esbuild = ❤

-   Built on top of the incredible [esbuild](https://github.com/evanw/esbuild), mad props to [@evanw](https://github.com/evanw)
-   Refer to [serverless-esbuild](https://github.com/floydspace/serverless-esbuild) for the plugin documentation, credits to [@floydspace](https://github.com/floydspace)
-   Includes the amazing [esbuild-register](https://github.com/floydspace/serverless-esbuild), thanks to [@egoist](https://github.com/egoist)

```bash
node -r esm -r esbuild-register script.ts #Aliased to TS for your convenience
```

> Enjoy lighting fast build and script execution in typescript

### ⚙ Eslint / Prettier / Typescript / Yarn / dotenv

With sensible defaults because writing boilerplate takes too much time.

> _dotenv is intentionally a dev dependencies, if you want to use it at runtime, move it to dependencies, import it in your code then load your env file._

### 🧪 Tests with Jest, GitHub Actions, Dependabot

An example of an integration test that works with the great `sls offline` and the node-fetch package.

Simply run :

```bash
yarn test
```

> A Github Action basic pipeline is setup with yarn caching and tests, check .github/workflows/main.yaml

### 📴 Serverless-offline dev/start/stop scripts with pm2

pm2 is a node process manager, very handy when you're dealing with several local microservices ...

```json
{
    "offline:dev": "yarn ts scripts/offline.ts dev",
    "offline:start": "yarn ts scripts/offline.ts start",
    "offline:stop": "yarn ts scripts/offline.ts stop"
}
```

-   `offline:dev` : Start `sls offline` in the foreground.
-   `offline:start` : Start `sls offline` in the background with pm2, log the output to pm2.log
-   `offline:stop` : Terminate the pm2 process(es) cleanly (based on the name, check offline.ts)

Check offline.ts if you need custom behavior.

> View this repository on GitHub: <https://github.com/Hebilicious/serverless-esbuild-template>
