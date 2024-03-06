# bip-bih-test-root

## 🌳 Congrats!
You've just created a single spa root config through BIH! Below are some basics on how to run the app locally, as well as documentation on single-spa architecture. 

## 👉 Prerequisites
#### Which tools and their version?
We recommend NodeJS 16 - Consider using [nvm](https://github.com/nvm-sh/nvm) if more than one NodeJS version is needed on your system.
We also recommend utilizing the [Single-SPA Inspector Tool]( https://single-spa.js.org/docs/devtools/). This is a devtools extension to provide utilities for helping with Single-SPA applications and allows the developer to mount and unmount MFEs.

## ⚒️ 🔬 👟 Build, Test, Run
### How do I build the code?
* `npm install` Install all dependencies
* `npm ci` Clean install all dependencies

### How do I run the application locally?
This application is a [single-spa](https://single-spa.js.org/docs/getting-started-overview#architectural-overview) root config. It is the shell that composes together several other micro-frontend (MFE) apps.

#### Starting Root Config
* `npm start` Starts up Webpack serve to run the application locally, importing live deployments of all MFEs by default.
This is ideal for doing work on the root itself.
* `npm run start-local-imports` Starts up Webpack serve to run the application locally, importing only local instances of all MFEs.
This is useful when you need to make changes across multiple MFEs involving interactions between them & the root.

#### Starting MFEs
To explore these example MFEs in action, you can start them up using the following commands:
* VBMS Header UI - `npm start`
* MFE Archetype - `npm start`

Then, use the Single-Spa inspector tool to insert your locally-running MFEs!

## 🚀 Live Environment

### Where is this deployed?
[argocd](https://argo.dev.bip.va.gov/applications/bip-bih-test-root-dev), bih -dev, 

### What is the dev URL?
https://bip-bih-test-root-dev.dev.bip.va.gov/

### Where are the runtime configurations stored?
https://github.com/department-of-veterans-affairs/test-three 

## 👩‍💻 Technical and Functional PoC
### Who can provide design, implementation, and configuration context?
Christian Alexa, Benjamin Gamman, John Lloyd, and Elizabeth Treahy
### Who can help with code reviews?
Christian Alexa, Benjamin Gamman, John Lloyd, and Elizabeth Treahy