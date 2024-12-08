const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==wbPRURUJVLO1SbUVUZtpkbRBVMzM1S4sEUXNEe3tmVCBVd1s0cNt2Yr9mVjEWSJ5WaOJVVpwd=09813861749',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

𓆣⑉ꀘ꒐ꋊꍌ⃤ ꋬ꒒ꊰꋬ⑉ 🧙‍♂️-® ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/75fa0e10e066eea6c4faf.jpg',
  MONGODB_URL: 'mongodb+srv://lucibot958:<db_password>@cluster0.n8bmt.mongodb.net/', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: '𓆣⑉ꀘ꒐ꋊꍌ⃤ ꋬ꒒ꊰꋬ⑉ 🧙‍♂️-®',
  OWNER_NAME: 'MINUTH KAUSHALYA',
  OWNER_NUMBER: '94728631354',
  SUDO: '94740412225,94741877721',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ 𓆣⑉ꀘ꒐ꋊꍌ⃤ ꋬ꒒ꊰꋬ⑉ 🧙‍♂️-®',
  STICKER_AUTHOR: '𓆣⑉ꀘ꒐ꋊꍌ⃤ ꋬ꒒ꊰꋬ⑉ 🧙‍♂️-®',
  STICKER_PACK: 'MiNuTh',
  REMOVE_BG_APIKEY: 'bLdaGfjAH7yQnDNwLKcgdLoZ',
  MAXIMUM_FILESIZE: 90,
  OWNER_R_EMOJI: '👽',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
