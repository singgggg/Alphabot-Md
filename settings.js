const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "𝓗𝓑𝓣 𝓑𝓞𝓣" //namabot kalian
global.ownername= "ᴹᴿ᭄ HBT_BOT ×፝֟͜×" //nama kalian
global.myweb ="https://google.com/" //bebas asal jan hapus
global.youtube = "https://youtube.com/" //bebas asal jan hapus
global.github = "https://github.com/" //bebas
global.email = "hbtbot@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ['6283861230413'] //premium user
global.owner = ["6283861230413","6283861230413"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "6283861230413" // nomor wa kalian
global.ownernomerr = "+6283861230413" //nmr wa kalian
global.thumbnail = "./image/bothbt.png" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/bothbt.png" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.packname = '© HBT_BOT' //sticker wm ubah
global.author = 'Di Buat Oleh HBT_BOT' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~ HBT_BOT',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin ! HBT_BOT',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin ! HBT_BOT',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner ! HBT_BOT',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group ! HBT_BOT',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private ! HBT_BOT',
	bot: 'Fitur Khusus Pengguna Nomor Bot HBT_BOT',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif ! HBT_BOT',
    wait: '⏳ Sedang Di Proses HBT_BOT',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner! HBT_BOT',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name) HBT_BOT'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
