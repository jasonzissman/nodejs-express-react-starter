import express from 'express';
import apiRouter from "./backend/routes/widgets.js";

const app = express();
const port = 3000;

app.get('/health', (req, res) => {
    res.json({ health_check: "ok" });
});

app.use('/api', apiRouter);

app.use(express.static('ui'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})