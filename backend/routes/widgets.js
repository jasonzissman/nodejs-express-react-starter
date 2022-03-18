import express from 'express';

const apiRouter = express.Router()

apiRouter.get('/widgets', (req, res) => {
    res.json(["cool!"]);
});

export default apiRouter;