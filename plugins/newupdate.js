const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'newupdate', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*These Are The New Updates*
🔰️.eva Was Added - It Give Some Flim Dialouges
🔰️New Plugins Were Added Into .txttoimg Command(Some Plugins DonT Work)
🔰️.owner Command Was Added-It Give You The Details Of The Owner
🔰️.theri Was Added-It Will Kick Those Who Say Somee Bad Words
🔰️.pubg Command Was Added-It Will Give A PUBG Logo Type Like This
✴️Eg:.pubg EVA
🔰️.show Command Was Added-It Wil Give You The Details Of Series And Shows
✴️Eg:.show Breaking Bad
🔰️Created .ffire Command-It Will Give You Logo Of Freefire 
✴️Eg:.ffire Eva
*ENJOY WITH NEW UPDATES...🤗️*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'contact', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Eva Owner Anirudh═💥*\n\n*💘https://github.com/anirudhsudheer/Eva*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'newupdate', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[1] = "*These Are The New Updates*
🔰️.eva Was Added - It Give Some Flim Dialouges
🔰️New Plugins Were Added Into .txttoimg Command(Some Plugins DonT Work)
🔰️.owner Command Was Added-It Give You The Details Of The Owner
🔰️.theri Was Added-It Will Kick Those Who Say Somee Bad Words
🔰️.pubg Command Was Added-It Will Give A PUBG Logo Type Like This
✴️Eg:.pubg EVA
🔰️.show Command Was Added-It Wil Give You The Details Of Series And Shows
✴️Eg:.show Breaking Bad
🔰️Created .ffire Command-It Will Give You Logo Of Freefire 
✴️Eg:.ffire Eva
*ENJOY WITH NEW UPDATES...🤗️*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'contact', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Eva Owner Anirudh.S═💥*\n\n*💘https://github.com/anirudhsudheer/Eva*\n*"

    await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
