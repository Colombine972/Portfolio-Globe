import { Request, Response } from "express";
import { findAllMessages, findMessageById, insertMessage } from "./contactRepository";

export async function getAllMessages (req: Request, res: Response) {
    try {
    const contactMessages = await findAllMessages();
    res.json(contactMessages);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des messages"});
    }
}

export async function getMessageById (req: Request, res: Response) {
    try {
        const id = Number(req.params.id);

        if (Number.isNaN(id)) {
            res.status(400).json({ message: "id invalide"});
            return;
        }
    
    const contactMessages = await findMessageById(id);

    if (contactMessages.length === 0) {
        res.status(404).json ({ message: "Note non trouvée"});
        return;
    }
    res.json(contactMessages[0])
    } catch (error) {
        return res.status(500).json({ message: "erreur serveur" });
    }
}

export async function addMessage (req: Request, res: Response) {
    try {
    console.log("BODY RECU :", req.body)
    const { category, name, commentaires } = req.body;

    if (!category || !name || !commentaires) {
        res.status(400).json({ message: "Catégorie, nom et message sont requis" });
    return;
}
    
const result = await insertMessage(category, name, commentaires);
res.status(201).json({
    id: result.insertId, category, name, commentaires
});
    } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'enregistrement du message"});
    }
}
