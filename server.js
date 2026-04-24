const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
const API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/chat', async (req, res) => {
    const { userMessage, context } = req.body;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const payload = {
        contents: [{
            parts: [{ text: `${context}\n\nUsuário diz: ${userMessage}` }]
        }]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Erro ao comunicar com Gemini:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

app.listen(PORT, () => console.log(`Servidor de IA rodando em http://localhost:${PORT}`));