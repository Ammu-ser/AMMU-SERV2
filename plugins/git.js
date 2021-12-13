const Ammu-ser = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Maalutty.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/JHqKPX5/Screenshot-2021-11-26-22-39-45-1.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `❤️AMMU-SERV2💙

*Subscribe channel* : https://youtube.com/c/AFTROLLSS


*owner number fasil* :https://wa.me/+919947430792.
            

*owner id instagram* :https://instagram.com/aftrolls_.


*github* : https://github.com/Ammu-ser/AMMU-SERV2.


*audio commands* :https://github.com/Ammu-ser/uploads/tree/main/bgm.

*sticker commands* :https://github.com/Ammu-ser/uploads/tree/main/stickers.
■□■□■□■□■□■□■□■□■□■□
❤️AMMU-SER💙
▣▣ ~NIJIN~ AND ~HUSNI~ ▣▣

`}) 

}));
