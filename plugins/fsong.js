const Asena = require('../events');

const {MessageType,Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const FormData = require('form-data');

const ffmpeg = require('fluent-ffmpeg');

const FIND_DESC = "Finds the Song"

Asena.addCommand({pattern: 'find', fromMe: false, desc: FIND_DESC }, (async (message, match) => {

    if (message.reply_message === false) return await message.client.sendMessage(message.jid, '*You must Replay to an audio!', MessageType.text);

    var filePath = await message.client.downloadAndSaveMediaMessage({

        key: {

            remoteJid: message.reply_message.jid,

            id: message.reply_message.id

        },

        message: message.reply_message.data.quotedMessage

    });

    var form = new FormData();

    ffmpeg(filePath).format('mp3').save('music.mp3').on('end', async () => {

        form.append('api_token', 'SUcKEWdDpYjtj2q045KNQCoDyCe');

        form.append('file', fs.createReadStream('./music.mp3'));

        form.append('return', 'apple_music, spotify');

        var configs = {

            headers: {

                ...form.getHeaders()

            }

        }

        await axios.post('https://api.zeks.xyz/api/searchmusic', form, configs).then(async (response) => {

            var res = response.data

            if (res === 'success') {

                await message.client.sendMessage(message.jid, `Title: ${res.title}\nArtist: ${res.artist}`, MessageType.text);

            } else {

                await message.client.sendMessage(message.jid, 'No results found', MessageType.text);

            }

        }).catch((error) =>  {

            console.log(error);

        });

    });

}));
