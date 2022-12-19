import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function deleteDeckController(req:Request, res:Response) {
    const deckId = req.params.deckId;
    const deck = await Deck.findByIdAndDelete(deckId);
    res.json(deck);
}