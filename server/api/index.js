import { Router } from "express"
const router = Router()

import add from "./add"
import remove from "./remove"
import get from "./get"

import line from "@line/bot-sdk";
import lineBot from "./webhook";

if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}

const config = {
    channelAccessToken: process.env.LINE_ACCESS_TOKEN,
    channelSecret: process.env.LINE_SECRET_KEY
};


router.use("/add", add)
router.use("/remove", remove)
router.use("/get", get)
router.post("/webhook", line.middleware(config), (req, res) => lineBot(req, res))

export default router