'use strict';
import request from "request";
import { getIDs } from "./api/db"

export default function() {
    console.log("cronjob");


    getIDs().then((arr) => {

        arr.forEach((e) => {

            let MessageObj = [{
                type: "text",
                text: "Hello"
            }];


            var headers = {
                "Authorization": "Bearer " + process.env.LINE_ACCESS_TOKEN,
                "Content-Type": "application/json"
            };


            var options = {
                url: 'https://api.line.me/v2/bot/message/push',
                method: 'POST',
                headers: headers,
                json: {
                    to: e.id,
                    messages: MessageObj
                }
            };

            request(options, (err, res) => {
                console.log(`[Log] message sent to ${e.id}`);
            });
        });

    });
    return;
}