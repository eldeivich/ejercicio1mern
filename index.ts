import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configuration the .env file
dotenv.config();

// Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first Route of APP
app.get('/', (req: Request, res: Response) => {
    // Send a JSON
    res.json(
        {
            "data": {
                "message": "Goodbye, world"
            }
        }
    );
});

app.get('/hello', (req: Request, res: Response) => {
    let name = req.query.name;

    res.json(
        {
            "data": {
                "message": !name ? `Hola, anónimo` : `Hola: ${name}`
            }
        }
    );

    console.log(!name ? `No hay nombre, como se puede comprobar: ${name}` : `Tu nombre es: ${name}`);
})

// Execute APP and Listen Requests to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});