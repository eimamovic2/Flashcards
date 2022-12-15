import express, { Request, Response} from "express";
import mongoose from "mongoose";

import Deck from "./models/Deck";
const PORT = 5000;

const app = express();

app.use(express.json());


app.post("/decks", async (req:Request, res:Response) => {
    const newDeck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck); 
});



mongoose.connect(
    "mongodb+srv://flashcardsage:f8ujONTtVWcx2VO6@cluster0.h51x2il.mongodb.net/?retryWrites=true&w=majority"
    ).then(()=>{
        console.log(`listening on port ${PORT}`);
        app.listen(PORT);
});

