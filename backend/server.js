import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import ueseRoute from "./router/ueserRoute.js";
import recceteroute from "./router/recceteroute.js";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", ueseRoute);
app.use("/api/v1/reccete", recceteroute);


//rest api
app.get('/',(req,res) => {
    res.send({
        message: "bismilah"
    });
});

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT,() => {
    console.log(`Server runing on ${PORT}`.bgCyan.white);
})