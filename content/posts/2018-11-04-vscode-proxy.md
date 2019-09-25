---
title: VS Code behind a proxy
subtitle: Another set of configs....
category:
  - VS Code
author: Josh Campos
date: 2018-11-04T13:28
featureImage: /uploads/post/2018-11-04-vscode-proxy/vscode-proxy-banner.jpg
---
The following error, in my case, was VS Code failing to download .NET Core library dependecies from behind my proxy:

![vscode-proxy-error](/uploads/post/2018-11-04-vscode-proxy/vscode-proxy-error.png)

This is wierd and I still don't understand the situation because I was able to download packages from the Marketplace including OmniSharp for OSX but failed when requesting '.NET Core Debugger for (macOS / x64)'.

Anyhow, all that is required is to update your VS Code proxy config (Preferences > Settings):

``` json
{
    "http-proxy": "http:myProxy.proxy"
}
```


Restart VS Code and you'll be off and running to install new extensions.