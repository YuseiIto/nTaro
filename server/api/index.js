import { Router } from "express"
const router = Router()

import add from "./add"
import remove from "./remove"
import get from "./get"

router.use("/add", add)
router.use("/remove", remove)
router.use("/get", get)

export default router