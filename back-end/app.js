import express from "express";
import cors from "cors";

import summaryRoutes from "./routes/summaryRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(summaryRoutes);

export default app;
