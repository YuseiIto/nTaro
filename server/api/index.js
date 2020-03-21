import { Router } from "express"
const router = Router()

import add from "./add"
import remove from "./remove"

router.use("/add", add)
router.use("/remove", remove)

export default router