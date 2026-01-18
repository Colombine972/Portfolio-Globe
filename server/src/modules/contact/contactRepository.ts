import { ResultSetHeader, RowDataPacket } from "mysql2";
import database from "../../database/client";

export async function findAllMessages() {
    const [rows] = await database.query("SELECT * FROM contact_message");
    return rows;
}

export async function findMessageById(id: number) {
    const [rows] = await database.query<RowDataPacket[]>(
        "SELECT * FROM contact_message WHERE id =?", [id]
    );
    
    return rows;
}

export async function insertMessage(category: string, name: string, message: string) {
    const [result] = await database.query<ResultSetHeader>(
        "INSERT INTO contact_message (category, name, commentaires) VALUES (?, ?, ?)",
        [category, name, message]
    );

    return result;
}

export async function updateMessage(
    id: number,
    category: string, 
    name: string,
    commentaires: string
) 
{
    const [result] = await database.query<ResultSetHeader>(
        "UPDATE contact_message SET category = ?, name = ?, commentaires = ? WHERE id = ?",
        [category, name, commentaires, id]
    )
    return result;
}

export async function updateMessageRead(id: number) {
    
    const [result] = await database.query<ResultSetHeader>(
        "UPDATE contact_message SET is_read = 1 WHERE id = ?", [id]
    );
    
    return result;
}
