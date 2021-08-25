Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: false, desc: "Download content from insta link"}, async (message, match) => {

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
Asena.addCommand({ pattern: 'profinsta ?(.*)', fromMe: true, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))

    await message.sendMessage(infoMessage(Lang.LOADING))

    await axios
      .get(`https://api.zeks.me/api/iguser?apikey=SUcKEWdDpYjtj2q045KNQCoDyCe&q=${userName}`)
      .then(async (response) => {
        const {
          profile_pic,
          username,
          private_user,
          verified_user,
        } = response.data

        const profileBuffer = await axios.get(pic, {responseType: 'arraybuffer'})

        const msg = `
        *${gives usename }*: ${username}    
        *${private_user}*: ${private_user}
        *${verified_user}*: ${verified_user}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
      )
  },

 )
