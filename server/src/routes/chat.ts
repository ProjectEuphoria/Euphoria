import { Router } from "express";
import { getAgent } from "../agents";

const router = Router();
router.post("/chat", async (req, res) => {
    const { message, agentName } = req.body
    console.log(message,agentName)
    const {runner} = await getAgent(agentName);
    const response=await runner.ask(message);
    console.log(response)
    res.json(response)

})
export default router;