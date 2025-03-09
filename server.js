import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // to render the login.html file 

const app = express();
const port = 3000;

// Resolve the __dirname (since __dirname is not available in ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "login" folder
app.use(express.static(path.join(__dirname, 'login')));
app.use(express.static(path.join(__dirname, 'styling')));

// Route to serve login.html
app.get('/', (req, res) => {
    console.log("server connected");
    return res.sendFile(path.join(__dirname, 'login', 'login.html'));
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});