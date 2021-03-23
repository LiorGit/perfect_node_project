import { Request, Response, Router } from 'express';
import {asyncHandler} from "../helpers/asyncHandler";
// import {OK} from "http-status-codes";

const textRouter = Router();

textRouter.post('/text', async (req: Request, res: Response) => {
    const result = await asyncHandler(req);
    res.send(`The sedulous hyena ate the antelope!, res = ${result}`);
    // res.status(200).send('words!');
});

export default textRouter;
