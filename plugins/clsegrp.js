
const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const CL = ('This command for Close the  Group at night');

const code = ('!mute 10h')
const FINAL = "THIS GROUP IS CLOSED & OPEN IN MORNING"
const TMUTE = "Trying to close temporary,\nAttempting to temporarily close the group"
const SCXR = "Closing Group...."
Asena.addCommand({pattern: 'close', fromMe: true, deleteCommand: false, desc: CL,}, (async (message, match) => {

  var msg = await message.reply('Preforming....');

  await message.client.sendMessage(
    message.jid,TMUTE, MessageType.text);

      await message.client.sendMessage(
        message.jid,SCXR, MessageType.text);

        await message.client.sendMessage(
          message.jid,code, MessageType.text);

                          await message.client.sendMessage(
                             message.jid,FINAL, MessageType.text);


}));
