---
title: npm without SUDO on macOS
subtitle: Save yourself from NPM Sudo headache
category:
  - macOS
  - npm
author: Josh Campos
date: 2018-10-15T18:35
featureImage: /uploads/post/2018-10-15-npm-without-sudo/sudo-npm-banner.jpg
---

# NPM Without SUDO!

Using SUDO for every `npm install` is not a recommended practice. The simpliest way to circumvent this is to create your own node packages location within your \$HOME directory.

### This is a process followed by many others already, I'm just repeating this down the grapevine...

1. First of all, you need Node.js installed!
2. Create a hidden directory such as:

   `mkdir ~/.npm-packages`.

   The tilda ~ is equivalent to your Home directory. You can verify this by echoing your home path from your terminal:

   `echo $HOME`.

3. Tie this all together by telling npm where this newly created directory exists:

   `npm config set prefix ~/.npm-packages`

## Test your changes:

List your npm configs: `npm config list`
View your new npm directory path:

`npm list -g --depth=0`.

You should only see NPM listed as the sole library.
