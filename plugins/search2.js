/* Copyright (C) 2021 anirudhsudheer@gmail.com.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Eva
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'srch(.*)', fromMe: false, desc: "Search In Google" }, async (message, match) => {
	if (match[1] === '') return await message.reply(Give Me Some Words To Search...);
	const url = `https://api.lolhuman.xyz/api/gsearch?apikey=7187e9cee7fada1e3c47025c&query=${match[1]}`;
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
	let msg = '```';
	msg += 'Title      : ' + json.title + '\n\n';
    msg += 'Description  : ' + json.desc + '\n\n';
	msg += 'Link  : ' + json.link + '```';
	await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
}));