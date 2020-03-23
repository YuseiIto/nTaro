import line from "@line/bot-sdk";

const client = new line.Client(config);

async function bot_body(ev) {
    const pro = await client.getProfile(ev.source.userId);
    return client.replyMessage(ev.replyToken, {
        type: "text",
        text: `${pro.displayName} said"${ev.message.text}".`
    })
}


export default function(req, res) {
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