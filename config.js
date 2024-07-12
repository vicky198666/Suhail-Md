const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_17_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxODksXG4gICAgICAgIDUzLFxuICAgICAgICA0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOCxcbiAgICAgICAgNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5LFxuICAgICAgICA4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI2LFxuICAgICAgICAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc1LFxuICAgICAgICA4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMixcbiAgICAgICAgMjAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNixcbiAgICAgICAgMjI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJteEZUVXlRM1k1MExjUDF2bFQrRmo0SmlleVNXcWluQ1RIZ1NNM2dCVTg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcyNDAzNjc3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTFDMTk1MzIzRTdGMUJEM0UzQUQ2REY2MkI1RUY5RTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzgzMDM3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzI0MDM2Nzc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRjc0OTlBREI5NURBRjI3QTIwMTkwQjk2MzA3NEQ3MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3ODMwMzdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibTM2cTZOZmdTNnlkNEZ0ZDVKSW8xQVwiLFxuICBcInBob25lSWRcIjogXCI5ODQ1NzQ0Ny1mMTk1LTQ2MWYtYTNjNC1mMmQ3MGVmMzUxZWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICAyMjIsXG4gICAgICAyMixcbiAgICAgIDE3OCxcbiAgICAgIDIyOCxcbiAgICAgIDI0MyxcbiAgICAgIDgzLFxuICAgICAgMjAzLFxuICAgICAgMTk1LFxuICAgICAgMTgsXG4gICAgICAwLFxuICAgICAgNTQsXG4gICAgICAxMzgsXG4gICAgICA2LFxuICAgICAgMTgyLFxuICAgICAgNTAsXG4gICAgICAxOTMsXG4gICAgICAxMjUsXG4gICAgICA1NCxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDY5LFxuICAgICAgMTE0LFxuICAgICAgODAsXG4gICAgICAyMzUsXG4gICAgICA1NixcbiAgICAgIDIzNixcbiAgICAgIDYyLFxuICAgICAgNjQsXG4gICAgICA1NCxcbiAgICAgIDE4OSxcbiAgICAgIDIwOSxcbiAgICAgIDI1NSxcbiAgICAgIDIwOCxcbiAgICAgIDE0MyxcbiAgICAgIDQ0LFxuICAgICAgNDIsXG4gICAgICA5NixcbiAgICAgIDMwLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhOSjlOTUhKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjQwMzY3Nzk6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0Njg1MzkwNzY3MzEzMjoxN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNd2FuY2hhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2lHdHJvR0VMZWh4TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJMDBQaTdobUZRcDN6RWdNQUZ2aTR0TkJVcWE5SCtoNVlid3NsTmU5ckZBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjc0cXpYVFE3eW40QlNhdE0xSVhHdVBNKy9LYmtFdXI3cVNjTU02cno5aHA3UEtzQ3ZUMVJHTVNldUlhUzVUSFhZWG1uY050Nk1lUEtST3ZPTE8rZkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFBYnF6UG5NUC9wVmJtMFNWU2sraWVKT0Uzb21jckhpSDh4WDAzdXdaYmFGVXNjSXJON0ZZa2xPT3lraVNXVzBhUlBtaDBkMmdacHdUMWt3T1VETmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNDAzNjc3OToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzgzMDM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2pqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDamouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3VU5jQktSWDJUY0RlNnZmY0trc3pUeUpSOGpXTnI1M0taeFIzMi9nQXFFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MzMxMzMxNjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDc4MzAzNzU4OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
