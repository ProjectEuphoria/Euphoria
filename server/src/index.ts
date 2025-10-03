import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // ok with/without proxy

app.use("/api", chatRoutes); // -> POST http://localhost:4000/api/chat

app.listen(4000, () => console.log("API on http://localhost:4000"));
