---
title: npm and yarn behind a proxy
subtitle: Config settings to remember
category:
  - npm
author: Josh Campos
date: 2018-09-01T14:00
featureImage: /uploads/post/2018-09-01-npm-yarn-behind-proxy/npm-yarn-proxy.jpg
---

Wondering why your NPM Modules are failing to load? Timing out behind a corporate network?

## Lets review the npm config file

You can see your current `http` and `https` proxy configurations, if any.  To view your current NPM config file in your terminal, enter the following command:

`npm config list`

To update these configs, let's walk through the following commands...

### Update http & https proxy

`npm config set proxy http://proxy.myProxy/`

`npm config set https-proxy http://proxy.myProxy/`

Once the changes are made, go back to list the config file to see your changes.

### How do you remove the configs you say?

`npm config rm proxy`

`npm config rm https-proxy`

----

## Almost the same mods are needed for a Yarn Config

`yarn config list`

### Update http & https proxy

`yarn config set proxy http://proxy`

`yarn config set https-proxy http://proxy`

### Removing config (uses delete keyword)

`yarn config delete proxy`

`yarn config delete https-proxy`