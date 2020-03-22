import { Router } from "express"
import { deleteRecord } from "./db"
const router = Router()

/* GET users listing. */
router.post("/", (req, res) => {
    deleteRecord(req.body.id).then(() => { res.send({ res: "OK" }) });
})

export default router