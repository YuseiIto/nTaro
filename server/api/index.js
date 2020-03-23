import { Router } from "express"
const router = Router()


const line = require("@line/bot-sdk");
import { lineBot, line_config } from "./webhook";
let middle = line.middleware(line_config);


import add from "./add"
import remove from "./remove"
import get from "./get"

router.use("/add", add)
router.use("/remove", remove)
router.use("/get", get)
router.use("/webhook", (req, res) => lineBot(req, res))

export default router