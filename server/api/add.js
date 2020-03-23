'use strict';
import { Router } from "express"
import { addRecord } from "./db"

const router = Router()

/* GET users listing. */
router.post("/", (req, res) => {
    addRecord(req.body).then(() => {
        res.send({ result: "OK" })
    })
})

export default router