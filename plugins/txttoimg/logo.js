const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('ttp');

Asena.addCommand({pattern: 'txttoimg', fromMe: false, desc: Lang.TXTTOIMG_DESC}, (async (message, match) => {    

       

    await message.sendMessage('\n\n\n```⏺️Some plugins are not working🙂 because of  api issues.It will work on next month starting🤠```\n\n\n♠️Usage: *.glitch*\n🎗️Desc: It Sends a glitch style image of the text provided\nYou must enter the heading and subheading seperated by */* in order!.\n\n♠️Usage: *.gradient*\n🎗️Desc: it makes gradient text\n\n♠️Usage: *.vintage*\n🎗️Desc: it makes Vintage  text\n\n♠️Usage: *.glue*\n🎗️Desc: it makes 3D Glue text\n\n♠️Usage: *.balloon*\n🎗️Desc: it makes Balloon text\n\n♠️Usage: *.1917*\n🎗️Desc: it makes 1917 font text\n\n♠️Usage: *.holo*\n🎗️Desc: it makes 3D holographic  text\n\n♠️Usage: *.silver*\n🎗️Desc: it makes silver metal text\n\n♠️Usage: *.blue*\n🎗️Desc: it makes Blue metal text\n\n♠️Usage: *.fabric*\n🎗️Desc: it makes Fabric text\n\n♠️Usage: *.avengers*\n🎗️Desc: it makes avengers text\n\n♠️Usage: *.logomarvel*\n🎗️Desc: it makes Marvel logo text\n\n♠️Usage: *.silvermetal*\n🎗️Desc: it makes silver metal  text\n\n♠️Usage: *.rosegold*\n🎗️Desc: it makes Rose gold text\n\n♠️Usage: *.metalgold*\n🎗️Desc:it makes metal gold  text\n\n♠️Usage: *.galaxy*\n🎗️Desc: it makes metal galaxy text\n\n♠️Usage: *.lion*\n🎗️Desc: it makes Lion logo\n\n♠️Usage: *.jkrlogo*\n🎗️Desc: it makes joker logo text\n\n♠️Usage: *.leaves*\n🎗️Desc: it makes leaves text\n\n♠️Usage: skull*\n🎗️Desc: it makes skull logo\n\n♠️Usage: *.robot*\n🎗️Desc: it makes Robot logo\n\n♠️Usage: *.toxic*\n🎗️Desc: it makes Toxic logo\n\n♠️Usage: *rainbow*\n🎗️Desc: it makes gradient text\n\n♠️Usage: *orangeglass*\n🎗️Desc: it makes gradient text\n\n♠️Usage: *.luxury*\n🎗️Desc: it makes luxury text\n\n♠️Usage: *.pubg*\n🎗️Desc: It Sends Pubg Logo with text\n\n♠️Usage: *.marvel*\n🎗️Desc: It Sends marvel logo type\n\♠Usage: *.google*\n🎗️Desc: It Sends a google suggest\n\n♠️Usage: *.fire*\n🎗️Desc: It Sends a fire logo\n\n♠️Usage: *.banner*\n🎗️Desc: It Sends a banner text\n\n♠️Usage: *.coffeecup*\n🎗️Desc: It Send a coffeecup image\n\n♠️Usage: *.battle*\n🎗️Desc: It Sends a battle logo\n\n♠️Usage: *.silk*\n🎗️Desc: It Sends a silk text\n\n♠️Usage: *.underwater*\n🎗️Desc: It Sends a ocean image of the text provided\n\n♠️Usage: *.pornhub*\n🎗️Desc: It Sends a blackish orange coloured image of the text provided.\nYou must enter the heading and subheading seperated by */* in order!.\n\n♠️Usage: *.sandwriting*\n🎗️Desc: It Sends a sand image of the text provided.\n\n♠️Usage: *.blackpink*\n🎗️Desc: It Sends a blackish pink image of the text provided.\n\n♠️Usage: *.lovemsg*\n🎗️Desc: It Sends love message style image of the text provided.\n\n♠️Usage: *.grass*\n🎗️Desc: It Sends a grass image of the text provided.\n\n♠️Usage: *.blood*\n🎗️Desc: It Sends a blood image of the text provided.\n\n♠️Usage: *.romance*\n🎗️Desc: It Sends a green image with love shapes of the text provided.\n\n♠️Usage: *.candlemug*\n🎗️Desc: It Sends a mug image of the text provided.\n\n♠️Usage: *.snow*\n🎗️Desc: It Sends a snow image of the text provided.\n\n♠️Usage: *.cloud*\n🎗️Desc: It Sends a sky image of the text provided\n\n♠️Usage: *.flower*\n🎗️Desc: It Sends a flower image of the text provided\n\n♠️Usage: *.burn*\n🎗️Desc: It Sends a half burned paper image of the text provided\n\n♠️Usage: *.candy*\n🎗️Desc: It Sends a candy image of the text provided\n\n♠️Usage: *.wood*\n🎗️Desc: It Sends a wood carved image of the text provided.\n\n♠Usage: *.latte*\n🎗️Desc: It put the text as latte art within a coffee cup.\n\n♠️Usage: *.8bit*\n🎗️Desc: Converts the text into an 8bit style image.\nYou must enter the heading and subheading seperated by */* in order!\n\n♠️Usage: *.shadow*\n🎗️Desc: Converts the text into shadow themed image.\n\n♠️Usage: *.harrypotter*\n🎗️Desc: Converts the text into a harrypotter themed image.\n\n♠️Usage: *.sparkling*\n🎗️Desc: Converts the text into a sparkling themed image\nYou must enter the heading and subheading seperated by */* in order!\n\n♠️Usage: *.watercolour*\n🎗️Desc: Converts the text into a watercolour themed image.\n\n♠️Usage: *.ninjalogo*\n🎗️Desc: Enters the text as the caption for a ninja themed logo.\n\n♠️Usage: *.neonlight*\n🎗️Desc: Converts the text into a neonlight themed image.\n\nUsage: *.3dtext*\n🎗️Desc: Converts the provided text into a 3D style image.');

    }));

    Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=SUcKEWdDpYjtj2q045KNQCoDyCe?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'luxury ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'pubg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'gradient ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dgradient?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'vintage ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/realisticvintage?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'summery ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));
   
    Asena.addCommand({pattern: 'darkgold ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: '1917 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'holo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'silver ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/deluxesilver?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'blue ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/glossybluemetal?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'fabric ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/fabric?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'avengers ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3davengers?text=${topText}&text2=${bottomText}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'logomarvel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/marvel?text=${topText}&text2=${bottomText}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'silvermetal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dmetalsilver?text=${topText}&text2=${bottomText}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'glue ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dglue?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'balloon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/balloontext?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'rosegold ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3drosegold?text=${topText}&text2=${bottomText}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'metalgold ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dmetalgold?text=${topText}&text2=${bottomText}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'lion ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/lionlogomascot?text=${topText}&text2=${bottomText}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'galaxy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/3dmetalgalaxy?text=${topText}&text2=${bottomText}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'jkrlogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'leaves ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/naturalleaves?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'skull ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'robot ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/robotr2d2?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'toxic ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/toxic?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'rainbow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/rainbowequalizer?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'orangeglass ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/orangeglass?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'marvel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/marvelstudios?text=${topText}&text2=${bottomText}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'latte ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));
    
    Asena.addCommand({pattern: 'wanted ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/wanted/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'silk ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/silk/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'google ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        tbottomText = split[2];
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/gsuggest/?text1=${topText}&text2=${bottomText}&text3=${tbottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'battle ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Battle logo Effect```'})

    }));

    Asena.addCommand({pattern: 'face ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/emoji-image?apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs&emoji=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'coffeecup ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/coffeecup2/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'fire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'banner ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));


    Asena.addCommand({pattern: 'wood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/woodblock/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: '8bit ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'underwater ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/underwater/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'flower ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/mugflower/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'burn ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'candy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/hpotter/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'sparkling ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'neonlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '``` Made by Eva```'})

    }));

    Asena.addCommand({ pattern: 'attp ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/attp?file&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0").replace(/#/g, "\n")}`, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp,quoted : message.data})

    }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandwriting?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by Eva'})

    }));

    Asena.addCommand({pattern: 'cloud ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by Eva'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Made by Eva'})

    }));

    Asena.addCommand({pattern: 'snow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/snowtext?text=${match[1]}&APIKEY=80d69d4e38bcd7da`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```Made by Eva```'})

    }));

    Asena.addCommand({pattern: 'grass ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by Eva'})

    }));

    Asena.addCommand({pattern: 'candlemug ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by Eva'})

    }));

    Asena.addCommand({pattern: 'romance ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/romancetext/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by Eva'})

    }));

    Asena.addCommand({pattern: 'lovemsg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by Eva'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=80d69d4e38bcd7dal`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by Eva'})

    }));
