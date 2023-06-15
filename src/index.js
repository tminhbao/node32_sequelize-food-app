import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rootRouter from "./routers/rootRouter.js";
dotenv.config();

const app = express();

app.use(express.json()); // middleware giúp BE đọc được cấu trúc JSON
app.use(cors())

app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT)
})

app.use("/api", rootRouter);

