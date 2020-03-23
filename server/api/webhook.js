'use strict';
const line = require("@line/bot-sdk");
const BOT_JOIN_MESSAGE = "join!";

if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}

export const line_config = {
    channelAccessToken: process.env.LINE_ACCESS_TOKEN,
    channelSecret: process.env.LINE_SECRET_KEY
};

const client = new line.Client(line_config);

async function bot_body(ev) {
    console.log(`${JSON.stringify(ev)}`)

    if (ev.type === "message") {
        return client.replyMessage(ev.replyToken, {
            type: "text",
            text: `"${ev.message.text}"`
        })
    } else if (ev.type === "join" || "follow") {

        return client.replyMessage(ev.replyToken, {
            type: "text",
            text: BOT_JOIN_MESSAGE
        })
    } else {
        return null;
    }
}

export function lineBot(req, res) {
    res.status(200).end();
    const events = req.body.events;
    const promises = [];
    for (let i = 0, l = events.length; i < l; i++) {
        const ev = events[i];
        promises.push(
            bot_body(ev)
        );
    }
    Promise.all(promises).then(console.log("pass"));
}