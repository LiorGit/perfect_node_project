import { Request, Response, Router } from 'express';
import {asyncHandler} from "../helpers/asyncHandler";
import { Db } from '../database';
// import {OK} from "http-status-codes";

const db = Db.getInstance();
const textRouter = Router();

textRouter.post('/text', async (req: Request, res: Response) => {
    const key = '123456';
    const result = await asyncHandler(req)
        .then(((handlerResult) => {
            return db.addNewValue(key, handlerResult);
        }));
    const readResult = await db.getValue(key);
    console.log(readResult);
    res.send(`The sedulous hyena ate the antelope!, res = ${result}`);
    // res.status(200).send('words!');
});

export default textRouter;
