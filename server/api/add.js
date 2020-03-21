import { Router } from "express"

const router = Router()

/* GET users listing. */
router.post("/", (req, res) => {
    console.log(`New request. Name:${req.body.name},DateTime:${req.body.datetime},content:${req.body.content}`)
    res.send("respond wiiiiith a resource")
})

export default router