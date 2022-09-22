import express from "express";
import cors from "cors";
import database from "./config/database.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

try {
    await database.authenticate();
    console.log("Koneksi ke database berhasil.");
} catch (err) {
    console.log(err)
    console.error("Koneksi ke database gagal.")
}

app.use(userRouter)

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});