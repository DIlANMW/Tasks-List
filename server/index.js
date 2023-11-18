import express from "express";
import connectDB from "./database/db.js";
import cors from "cors";
import router from "./routes/route.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://tasks-list-dmlv64uwx-dilanweerasinghe97-gmailcom.vercel.app/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use("/", router);

const PORT = 8000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
