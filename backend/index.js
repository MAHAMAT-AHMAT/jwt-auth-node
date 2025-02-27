import mongoose from "mongoose";
import express from "express";
const app = express();
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config();
import loginRoute from "./routes/login_routes.js";


app.use(cors());
app.use(express.json());

app.use("/api",loginRoute);

mongoose.connect(process.env.DB_URL)
  .then((result) => {
    app.listen(process.env.SERVER_PORT,() => {
      console.log('la connexion est bien établis !');
    });
  });
  mongoose.connect(process.env.DB_URL)
  .catch((error) => {
    app.listen(process.env.SERVER_PORT,() => {
      console.log('erreur de connexion avec la base de donnée et aussi le serveur web !');
    });
  });








