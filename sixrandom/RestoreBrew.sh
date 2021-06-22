#!/bin/sh
#git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git

# 以下针对 mac OS 系统上的 Homebrew
#git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git
#git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git
#git -C "$(brew --repo homebrew/cask-fonts)" remote set-url origin https://github.com/Homebrew/homebrew-cask-fonts.git
#git -C "$(brew --repo homebrew/cask-drivers)" remote set-url origin https://github.com/Homebrew/homebrew-cask-drivers.git

# 以下针对 Linux 系统上的 Linuxbrew
#git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/linuxbrew-core.git

# 更换后测试工作是否正常
#brew update

# brew 程序本身，Homebrew / Linuxbrew 相同
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git

# 以下针对 macOS 系统上的 Homebrew
BREW_TAPS="$(brew tap)"
for tap in core cask{,-fonts,-drivers,-versions}; do
    if echo "$BREW_TAPS" | grep -qE "^homebrew/${tap}\$"; then
        git -C "$(brew --repo homebrew/${tap})" remote set-url origin https://github.com/Homebrew/homebrew-${tap}.git
    fi
done

# 以下针对 Linux 系统上的 Linuxbrew
# git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/linuxbrew-core.git

# 重新设置 git 仓库 HEAD
brew update-reset