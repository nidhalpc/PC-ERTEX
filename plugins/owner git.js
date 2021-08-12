const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😎Eva😎═════╗*\n           \n*⚜═EVA═⚜*\n\n*owner Anirudh.S - http://Wa.me/+919539102851*\n* *\n🔰https://www.instagram.com/__a_n_i_r_u_d_h_?r=nametag*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Anirudh.S*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Eva Owner Anirudh═💥*\n\n*💘https://github.com/anirudhsudheer/Eva*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[1] = "*╔═════😎Eva😎═════╗*\n           \n*⚜═EVA═⚜*\n\n*owner Anirudh.S - http://Wa.me/+919539102851*\n* *\n🔰https://www.instagram.com/__a_n_i_r_u_d_h_?r=nametag*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Anirudh.S*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Eva Owner Anirudh.S═💥*\n\n*💘https://github.com/anirudhsudheer/Eva*\n*"

    await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    
