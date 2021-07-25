const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const NEWUPDATE = "it sends NEW UPDATES"
const CONTACT= "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'new', fromMe: true, deleteCommand: true, desc: NEWUPDATE,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*These Are The New Updates*\n\n🔰️.eva Was Added - It Give Some Flim Dialouges\n\n🔰️New Plugins Were Added Into .txttoimg Command(Some Plugins DonT Work)\n\n🔰️.owner Command Was Added-It Give You The Details Of The Owner\n\n🔰️.theri Was Added-It Will Kick Those Who Say Somee Bad Words\n\n🔰️.pubg Command Was Added-It Will Give A PUBG Logo Type Like This✴️Eg:.pubg EVA\n\n🔰️Created .ffire Command-It Will Give You Logo Of Freefire✴️Eg:.ffire Eva\n\n🔰️Last Updated In *Jul 27 8 pm*\n\n*ENJOY WITH NEW UPDATES...🤗️*" 
 
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'contact', fromMe: true, deleteCommand: true, desc: CONTACT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Eva Owner Anirudh═💥*\n\n*💘https://github.com/anirudhsudheer/Eva*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'new', fromMe: false, deleteCommand: true, desc: NEWUPDATE,}, (async (message, match) => {

    var r_text = new Array ();
    
    
        r_text[1] = "*These Are The New Updates*\n\n🔰️.eva Was Added - It Give Some Flim Dialouges\n\n🔰️New Plugins Were Added Into .txttoimg Command(Some Plugins DonT Work)\n\n🔰️.owner Command Was Added-It Give You The Details Of The Owner\n\n🔰️.theri Was Added-It Will Kick Those Who Say Somee Bad Words\n\n🔰️.pubg Command Was Added-It Will Give A PUBG Logo Type Like This✴️Eg:.pubg EVA\n\n🔰️Created .ffire Command-It Will Give You Logo Of Freefire✴️Eg:.ffire Eva\n\n🔰️Last Updated In *Jul 27 8 pm*\n\n*ENJOY WITH NEW UPDATES...🤗️*" 


    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'contact', fromMe: true, deleteCommand: true, desc: CONTACT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Contact Master*\n           \n*Anirudh.S*=\n\https://wa.me/919539102851"

    await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
