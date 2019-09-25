---
title: Organize macOS dock
subtitle: Tiddy up the screen
category:
  - macOS
author: Josh Campos
date: 2018-10-18T16:55
featureImage: /uploads/post/2018-10-18-organize-macos-dock/organize-macos-dock-banner.jpg
---

# Organize the Clutter

The more shortcut friendly you are, the OSX dock can become cluddered very quickly. Adding spacers to your dock can help organize those icons.

This isn’t a drag and drop GUI hack, but roll up your sleeves for a two line terminal process that will make your desktop look much cleaner.

- Step 1: Create the spacer

  `defaults write com.apple.dock persistent-apps -array-add '{tile-type="spacer-tile";}'`

- Step 2: Reset the dock

  `killall Dock`

The dock service is basically restarted and a newly added spacer will be available. Drag into the location as you please. Repeat both 1 & 2 for any additional spacers.

## Remove a spacer?
You can right click on the empty space and select the “Remove from Dock” option just like any other icon.

![remove-osx-dock-spacer](/uploads/post/2018-10-18-organize-macos-dock/remove-macos-dock-spacer.jpg)
