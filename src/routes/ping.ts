import { Request, Response, Router } from 'express';
// import {OK} from "http-status-codes";

const pingRouter = Router();

pingRouter.get('/ping', async (req: Request, res: Response) => {
    res.status(200).send('pong');
});

export default pingRouter;
