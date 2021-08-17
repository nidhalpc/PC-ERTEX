const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
//anirudhsudheer
Asena.addCommand({ pattern: 'movie2(.*)', fromMe: false, desc: "Shows movie info." }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `https://api.lolhuman.xyz/api/lk21?apikey=7187e9cee7fada1e3c47025c&query=${match[1]}`
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
	let msg = '```';
        msg +='Thumbnail  : ' + json.thumbnail + '\n\n';
	msg += 'Title      : ' + json.Title + '\n\n';
	msg += 'Year       : ' + json.Year + '\n\n';
	msg += 'Rated      : ' + json.rating + '\n\n';
	msg += 'Released   : ' + json.date_release + '\n\n';
	msg += 'Runtime    : ' + json.Runtime + '\n\n';
	msg += 'Genre      : ' + json.genre + '\n\n';
	msg += 'Director   : ' + json.Director + '\n\n';
	msg += 'Writer     : ' + json.Writer + '\n\n';
	msg += 'Actors     : ' + json.actors + '\n\n';
	msg += 'Plot       : ' + json.desc + '\n\n';
	msg += 'Language   : ' + json.language + '\n\n';
	msg += 'Country    : ' + json.Country + '\n\n';
	msg += 'Awards     : ' + json.Awards + '\n\n';
	msg += 'BoxOffice  : ' + json.BoxOffice + '\n\n';
	msg += 'Production : ' + json.Production + '\n\n';
	msg += 'imdbRating : ' + json.imdbRating + '\n\n';
        msg += 'Location   : ' + json.location  +  '\n\n';
	msg += 'imdbVotes  : ' + json.imdbVotes + '```';
	await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
}));
