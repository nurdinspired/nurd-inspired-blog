---
title: Developer Terminal Setup
subtitle: ZSH Theme Setup on macOS
category:
  - macOS
author: Josh Campos
date: 2018-09-25T02:30
featureImage: /uploads/post/2018-9-25-developer-terminal-setup/macos-developer-terminal-banner.png
---

# iTERM2

First things first, I use [iTERM2](https://www.iterm2.com) as my terminal replacement on OSX. I enjoy using the window transparency feature.

![iterm-transparent](/uploads/post/2018-9-25-developer-terminal-setup/iterm-transparent.jpg)

## ZSH Shell on steroids with 'Oh My zsh'

Bash does all I 'need' from my terminal, but I like what z shell has to offer for all my wants, from impressive tab completion, non case-sensitive completion, and simplified theme control. I enjoy the git branch and status visualizations too. By default macOS uses the bash shell, but we can easily change the default to zsh.

### Change macOS Shell to zsh

1. System Preferences
1. Select Users & Groups
1. Right click your account and Select 'Advanced Options'. If nothing is happening, you may need to click on the lock icon in the bottom left corner to allow changes.
1. Change the Login Shell options to `/bin/zsh`
1. Now that the default shell is set to zsh, you can test your efforts by opening a new terminal window and enter the following:
   `echo $SHELL`
   The output should be: `/bin/zsh`

Zsh is configurable by the `~/.zshrc` file. OH MY ZSH is a framework for managing your zsh configurations. Let's get this installed and see all the cool stuff it has to offer.

### Install [Oh My Zsh](http://ohmyz.sh)

The install is as easy as executing the curl statement on the website.

`$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

With the framework installed, open the `open ~/.zshrc` (to open using TextEdit) or `vim ~/.zshrc` (to open using Vim) review and modify any zsh properties to your liking.
I'm using the 'my-agnoster' theme:
`ZSH_THEME="my-agnoster"`.

This theme is fork off the original 'agnoster' theme that I customized for myself.  You can clone the theme project from [github](https://github.com/jshcmps/my-agnoster-zsh-theme).
The catch with this theme is that it requires [Powerline fonts](https://github.com/powerline/fonts) to support the icons shown in the terminal. The following installation steps on the github page will install the required fonts.

1. Clone
   `git clone https://github.com/powerline/fonts.git --depth=1`
1. Install
   `cd fonts ./install.sh`
1. Clean-up
   `cd .. rm -rf fonts`

The list of installed fonts is available on the github page.

To activate the fonts, you'll need to change the fonts in your iTerms preferences:
Preferences
- -> Profiles > Text > Font: Cuisine for Powerline, 11pt
- -> Profiles > Colors > Basic Colors: Foreground and Selection = #10ff00
- -> Profiles > Colors > Cursor Colors: Cursor Guide Enabled,set to #808080
- -> Profiles > Window > Window Appearance > Transparency: ~ 30-35%
- -> Appearance > Tabs > Theme: Dark

Update export path for node modules in your `~/.zshrc` file:

`#NODE MODULES EXPORT`

`export PATH="$HOME/.npm-packages/bin:$PATH"`.

**Your npm packages directory may be different. This is a custom path I have them installing into.**

Removing username@hostname from command prompt can be done by adding the following to the .zshrc file:

`DEFAULT_USER='whoami'`

Those are back ticks, not single quotes!

## Tiny Care Terminal

Terminal companionship says it all. This helps the day go faster with quirky bot tweets, local weather updates, and a pomodoro timer to keep you in check.
Install it by following the directions [here](https://github.com/notwaldorf/tiny-care-terminal). It's two NPM calls and modifying your environment variables depending on your shell. Since I'm using zsh, add your TTC variables in your `~/.zshrc` file at the bottom of the file. Check out the [sample.env](https://github.com/notwaldorf/tiny-care-terminal/blob/master/sample.env) to help you along.

----

> Although, I've retired from heavily using VIM on my machine I don't need documentation for these plugins anymore.  The following references are here for nostalgic purposes. I've moved onto VS CODE Full time.  I'll setup an other post for my VS Code Config on this blog soon.

## VIM Plugins


### Pathogen Plugin Manager

The last mile of the journey is adding two helpful plugins. You can use your plugin manager of choice, but I'll walk you through using [Pathogen](https://github.com/tpope/vim-pathogen). The instructions are rather straight forward:

1. If you don't already have ~/.vim directory enter the folliwng into your terminal to install Pathogen and create your `~/.vim` bundle directory:

   `mkdir -p ~/.vim/autoload ~/.vim/bundle && \ curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim`
1. Open your ~/.vimrc file (Or create it if you don't have it already: `touch ~/.vimrc)` and paste in the following:

   `execute pathogen#infect() syntax on filetype plugin indent on`

That's all you need for now to get started using Pathogen.

### Installing vim-airline

This plugin helps with status and tabline information for vim. See the documenation [here](https://github.com/vim-airline/vim-airline). Installation is super simple now using Pathogen:

1. Enter the following in your terminal:

    `git clone https://github.com/vim-airline/vim-airline ~/.vim/bundle/vim-airline`

Pathogen will clone the git repository into your Vim bundle directory for use.

### NERDTree

The last plugin on the list is [NERDTree](https://github.com/scrooloose/nerdtree). This adds a file explorer type view that can help navigate and open files in a helpful directory tree.
Once again, installation is simple using Pathogen:

1. Enter the following in your terminal:

    `git clone https://github.com/scrooloose/nerdtree.git ~/.vim/bundle/nerdtree`

Reload your Terminal and within Vim enter `:NERDTree`. The file explorer will be displayed. The tree opens in a window so navigating back and forth between NERDTree and your Vim buffer can be done using `ctrl+w+w`.
