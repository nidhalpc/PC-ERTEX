## INFORMATION ℹ️
```diff
You need 2 devices to build the Eva!
You will do the process from the second device. 
You will only scan QR code with the first device.
I mean by the first device is you want to install the Eva.
```
##

1. If you are using android; Download the [Termux](https://play.google.com/store/apps/details?id=com.termux)

IOS users can start with online method. The rest of the article writes transactions.

If you are using pc to setup Eva; Open the “Powershell” with administrator.

##

2. Let's paste the codes;

_Termux:_ 

`bash <(curl -L https://t.ly/tHxh)`

**Alternative:** `bash <(curl -L https://bit.ly/32OLsKl)`

**Online QR:**  [Online QR](https://repl.it/@phaticusthiccy/WhatsAsena-QR#index.js)

_iOS:_ 

`IOS Devices don't support yet but they can use the online QR code scraper.` [Online QR](https://repl.it/@phaticusthiccy/WhatsAsena-QR#index.js)

_Windows 10:_ 

`Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://gitlab.com/phaticusthiccy/whatsasenaduplicated-kurulum/-/raw/master/win10.ps1')`

If it asks you questions like Y/N, write Y to all of them. If all transactions are works perfectly, you will see a QR code. You need to scan this QR code in WhatsApp application. The process is very simple;

##

3. Open the WhatsApp.
Let's click on the three points above.
Then choose WhatsApp Web.

![Example](https://i.hizliresim.com/XN2aqJ.jpg)

Scan the QR Code;
It will then give us a long code starting with *ASENA;;;*. This is a String Session specially designed by the _AsenaDev_ team. 
Let's paste it.

##

4. Click the Button Below.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/anirudhsudheer/Eva)

Let's paste the code you received into the `ASENA_SESSION` section. Let's fill in the sections requested from us. If you using +1 number, please choose US from Region partial. Also one important thing u must know, App name and HEROKU_APP_NAME must be same! Then dont leave blank Asena Session, Heroku API Key and App Name.
[(If you don't know how to take Heroku API key, Click Here!)](https://t.me/herokuapikeyscraper)

##

5. Let's press deploy and wait a moment. (5-10 min)
Open the dynos.
[If you don't know how to open dynos, Click Here!!](https://t.me/herokudynoonscraper)

Your bot is ready! You can type `.help` to get information about commands.

##

```js
Remember, the bot is open source!
You are responsible for all changes!
Bot is just an infrastructure!
```

ASENA_SESSİON=Your Session
HEROKU_API_KEY=Your API Key
HEROKU_APP_NAME=App Name
DEBUG=false 
LANGUAGE=en
AUTO_BİO=true
SEND_READ=true
NO_ONLINE=true
ANTİ_LİNK=true
GAN_IMAGE=https://i.hizliresim.com/loUtAb.jpg
BLOCK_CHAT=Add JID Without @... to add Block Chat
KICKME_MESSAGE=default
ALIVE_MESSAGE=default
ADD_MESSAGE=default
FULL_EVA=off
NO_LOG=false
MUTE_MESSAGE=default
PROMOTE_MESSAGE=default
WORK_TYPE=private
UNMUTE_MESSAGE=default
UNBLOCK_MESSAGE=default
BLOCK_MESSAGE=default
HANDLERS=^[.!;]
AFK_MESSAGE=default
BAN_MESSAGE=default
DEMOTE_MESSAGE=default
HEROKU=Set true if working on heroku or set false
SUDO=Add Users Number to Give Unlimited Permission
REMOVE_BG_API_KEY=Your Remove.bg API Key

## Remove BG Plugin Helps to Remove the Background of Your Photos!

1. *To get API Key, let's first go to the following site:* https://accounts.kaleido.ai/users/sign_in

2. *After registration, let's go to this page:* https://www.remove.bg/dashboard#

3. *Then follow the steps in the picture below.:*

![BG](https://i.hizliresim.com/11v4kc.jpg)

4. *Copy the API Key by clicking the Show button.*

- *To make it faster, I will tell you on WhatApp, not heroku.*

5. *Enter WhatsApp and type:*

- `.setvar REMOVE_BG_API_KEY:api key`

- Paste the copied API key where it says `api key` . If all the steps are correct, you can use it easily.

##
