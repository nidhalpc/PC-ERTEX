const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const IG_DESC = "Downloads Image/Video From Instagram"
const NEED_WORD = "Must Enter a link"
const FBDESC = "Downloads Video From FaceBook"
const LOADING = "Downloading the Video..."
const NOT_FOUNDFB = "Video Not Found"
const CAPTION = "Caption"

Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: true, desc: "Download content from insta link"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORDIGTV))

    await message.sendMessage(infoMessage("Loading"))

    await axios
      .get(`https://api.zeks.me/api/ig?apikey=SUcKEWdDpYjtj2q045KNQCoDyCe&url==${userName}`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `${type}`

	 if (msg === 'image') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })}
		 	 
	if (msg === 'video') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("error.Please check the link")),
      )
  },
)




Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: false, desc: FBDESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://videfikri.com/api/fbdl/?urlfb=${userName}`)
      .then(async (response) => {
        const {
          url,
          judul,
        } = response.data.result

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${CAPTION}*: ${judul}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Made By Eva"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUNDFB )),
      )
  },
)
