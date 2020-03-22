import { Router } from "express"
import { getRecords } from "./db"
const router = Router()

/* GET users listing. */
router.get("/", (req, res) => {
    getRecords().then(data => {
        res.send(data)
    });
})

export default router