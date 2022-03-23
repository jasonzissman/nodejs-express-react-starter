import express from 'express';
import apiRouter from "./routes/widgets.js";

const app = express();
const port = 3000;
const STATIC_FILE_DIR = process.env.STATIC_FILE_DIR || '..\\frontend\\build';

app.get('/health', (req, res) => {
    res.json({ health_check: "ok" });
});

app.use('/api', apiRouter);

app.use(express.static(STATIC_FILE_DIR));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})