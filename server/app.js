'use strict';
import express from "express"
import { Nuxt, Builder } from "nuxt"
import config from "../nuxt.config.js"
import bodyParser from "body-parser"
import api from "./api"
const cron = require('node-cron');
import cronjob from "./cron"

const app = express()

config.dev = !(process.env.NODE_ENV === "production")
const nuxt = new Nuxt(config)

if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(api)
app.use(nuxt.render)

if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}

if (process.env.NODE_ENV == "production" || (process.env.NODE_ENV != "production" && process.env.DEBUG_CYCLE == "production")) {
    console.log("Setup cron on production mode");
    cron.schedule('0 0 6,7,8,12,16,17,18,19,20,21,22,23 * * *', () => { cronjob() });
} else {
    console.log(`Setup cron with debug mode.`);
    cron.schedule("*/30 * * * * *", () => { cronjob() });
}

export default app