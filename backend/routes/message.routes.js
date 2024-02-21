import expess from "express"
import protectRoute from "../middleware/protectRoute.js"
import { sendMessage,getMessage } from "../controllers/message.controller.js";
const router=expess.Router();

router.get("/:id",protectRoute,getMessage)
router.post("/send/:id",protectRoute,sendMessage)

export default  router;