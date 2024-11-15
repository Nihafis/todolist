import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todoRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true, // enable cookies
  })
);

app.use("/api", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

