import {Request} from "express";
import {IWordsResult, RequestHandler} from './requestHandler';

export class FileHandler extends RequestHandler {
    private text: string;

    constructor() {
        super(1, '');
    }

    public handle(req: Request): IWordsResult{
        this.text = req.body.text || "";
        const res = {} as IWordsResult;
        res.lior = 3;
        res.test = 1;
        return res;
    }
}
