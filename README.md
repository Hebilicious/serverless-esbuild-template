# Serverless Esbuild Template

This is a template repository to get you started really quickly with the serverless framework and typescript, using the incredible esbuild.
It is slighlty opinionated.

## Features

### ⚡ esbuild-serverless

Built with esbuild, enjoy lighting fast build and script execution in typescript :

```bash
node -r esm -r esbuild-register script.ts #Aliased to TS for your convenience
```

### ⚙ Eslint / Prettier / Typescript / Yarn / .env

With sensible defaults because writing boilerplate takes too much time.

> _dotenv is intentionally a dev dependencies, if you want to use it at runtime, move it to dependencies and import it in your code._

### 🧪 Tests with Jest, GitHub Actions, Dependabot

An example of an integration test that works with the great `sls offline` and the node-fetch package.

Simply :

```bash
yarn test
```

A Github Action basic pipeline is setup with yarn caching and tests, check .github/workflows/main.yaml

### 📴 Serverless offline dev/start/stop script with pm2

```json
{
    "offline:dev": "yarn ts scripts/offline.ts dev",
    "offline:start": "yarn ts scripts/offline.ts start",
    "offline:stop": "yarn ts scripts/offline.ts stop"
}
```

-   `offline:dev` : Start `sls offline` in the foreground.
-   `offline:start` : Start `sls offline` in the background with pm2, log the output to pm2.log
-   `offline:stop` : Terminate the pm2 process(es) cleanly

Check offline.ts if you need custom behavior.
