import { ResultSetHeader } from "mysql2";
import database from "../../database/client";

export async function findAllMessages() {
    const [rows] = await database.query("SELECT * FROM contact_message");
    return rows;
}

export async function insertMessage(category: string, name: string, message: string) {
    const [result] = await database.query<ResultSetHeader>(
        "INSERT INTO contact_message (category, name, message) VALUES (?, ?, ?)",
        [category, name, message]
    );

    return result;
}