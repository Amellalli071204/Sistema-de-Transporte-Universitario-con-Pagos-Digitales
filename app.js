// Endpoint para obtener solo el URL del paso 7

import express from "express";
import cors from "cors";
import send from "send";
import { get } from "http";
const app = express();

app.use(cors());
app.use(express.json());

let lastRedirectUrl = null;

app.post("/setRedirect", (req, res) => {
    const { url } = req.body;
    lastRedirectUrl = url;
    console.log("Redirect URL updated to:", url);
    res.json({ message: "Redirect URL updated" });
});

app.get("/redirect", (req, res) => {
    if (!lastRedirectUrl) {
        return res.status(404).json({ error: "No redirect URL set" });
    }
    res.json({ redirect: lastRedirectUrl });
});

app.get("/sending", (req, res) => {
    res.json({get: "Step 1: got wallet addresses"});
    step1()
});

app.get("/outgoing-url", (req, res) => {
    if (!lastRedirectUrl) {
        return res.status(404).json({ error: "No outgoing payment URL set" });
    }
    res.json({ url: lastRedirectUrl });
});

app.listen(3000, () => {
    console.log('Servidor Express escuchando en http://localhost:3000');
});
