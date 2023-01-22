<p align="center">
  <img src="src/app/assets/ear-logo.jpg" alt="Prompts" width="300" style="border-radius: 20px;"/>
</p>

<h1 align="center">Ear</h1>

<p align="center">
  <b>Ear is a desktop app that will help you transcribe what is playing on your computer!</sub>
</p>

<br />

# ❯ Why Ear:

Ear is originally developed to help deaf people, sometimes you encounter a video and most cases audio that don't have subtitles with it, that is when Ear enter helping out those who can not listen, listen to what the world have to say!

## Video Example



https://user-images.githubusercontent.com/63210374/213936992-0249f169-b06f-453c-b97e-8958b9dd6909.mp4

## ❯ CAUTION:

Currently Ear it is only tested on Ubuntu (Linux) and need adjustments to work with Windows and Mac OS. But these are not big changes, currently related to the Sox and Whisper AI.

![split](https://github.com/terkelg/prompts/raw/master/media/split.png)

## ❯ Requirements to run Ear

Mainly, you will need up to 3 things to make sure everything will work as expected.

- Ffmpeg

```bash
# on Ubuntu or Debian
sudo apt update && sudo apt install ffmpeg
# on Arch Linux
sudo pacman -S ffmpeg
# on MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg
# on Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg
# on Windows using Scoop (https://scoop.sh/)
scoop install ffmpeg
```

- [Sox]

```bash
sudo apt update && sudo apt install sox
```

- [Whisper]

```bash
pip install git+https://github.com/openai/whisper.git
```

After that you should be good to go.

## ❯ Install

```
$ cd src/app && npm install
```

![split](https://github.com/terkelg/prompts/raw/master/media/split.png)

## ❯ Running

```
$ npm run start
```

> Simple as that :), then Ear will pop up.

---

## ❯ Credit

Ear app is built on top of [Whisper AI](https://github.com/openai/whisper), [Electron](https://github.com/electron/electron) and [Sox](https://sox.sourceforge.net/).
