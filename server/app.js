'use strict';
import express from "express"
import { Nuxt, Builder } from "nuxt"
import config from "../nuxt.config.js"
import bodyParser from "body-parser"
import api from "./api"

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

export default app