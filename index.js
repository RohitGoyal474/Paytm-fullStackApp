// backend/index.js
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";
import { app } from "./app.js";
//////////////////

connectDB()
.then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log(`Server started on port ${process.env.PORT}`);
        })
})
.catch((err)=>{

    console.log("Do not able to connect to server",err);
})


