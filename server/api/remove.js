import { Router } from "express"

const router = Router()

/* GET users listing. */
router.post("/", (req, res) => {
    console.log(`New request. ID:${req.body.id}`)
    res.send("respond wiiiiith a resource")
})

export default router