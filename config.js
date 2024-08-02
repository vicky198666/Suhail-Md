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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_37_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICA3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTksXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0LFxuICAgICAgICA4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgODYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9IVnd0dnN1N3RoZjhVR3QzcUFwNG1KVnA1WUptclVqWUdZQStHVTNWRjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJYeHFoS2pMUjJhakIxNkxzaDdfM2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDM3YjQ2ZWItN2VjMS00MzJiLWI4OGItZTc2MTAwZDAxMDdhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDE4NixcbiAgICAgIDkxLFxuICAgICAgMjQxLFxuICAgICAgNzksXG4gICAgICA2MCxcbiAgICAgIDIxLFxuICAgICAgODEsXG4gICAgICA0NixcbiAgICAgIDg3LFxuICAgICAgMTY0LFxuICAgICAgNzAsXG4gICAgICAwLFxuICAgICAgMTUyLFxuICAgICAgNTAsXG4gICAgICAyNixcbiAgICAgIDEwOCxcbiAgICAgIDIwNixcbiAgICAgIDE1NixcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMjEwLFxuICAgICAgMzEsXG4gICAgICAxMjAsXG4gICAgICA3NCxcbiAgICAgIDEwOSxcbiAgICAgIDE1NixcbiAgICAgIDI1MyxcbiAgICAgIDc5LFxuICAgICAgODUsXG4gICAgICAzNixcbiAgICAgIDE5LFxuICAgICAgNjUsXG4gICAgICAyNDEsXG4gICAgICAxNTksXG4gICAgICAyMjMsXG4gICAgICAyMDUsXG4gICAgICA4MyxcbiAgICAgIDIzMixcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm01cjQwR0VLUDZzN1VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSZnNzWTMrMXhtWEhsQm4xZEE1elVYeTY2SHVxaU5kanBES1I1RlFhMHlzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVNcEJ4R2xqcHcveGE3bDQvWStDVFNoejF2ck5hUXBMai95Qkh6NFUyYUp0WlUwTCtPVEI5bUYrMkJib0VWYU4reE9nUTdnMGpxeVZCL0FsWktCWkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjk2Y2FMOERJeThNQ3l3azF3WGNoaUx6WlByejdyOUIxY2hyNllIZWVMbVJpZVY5N1BFTG9XN2VTaVJDR3J2Y05rQzdHb283UW4vcE1SaWJCajQ3OWhBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1NzcyNzU0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNb3JhYVwiLFxuICAgIFwibGlkXCI6IFwiNTE2ODE3Nzc2OTY3ODM6NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0NTc3Mjc1NDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYxMzAzNFxufSIKfQ=="  // PUT your SESSION_ID 


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
