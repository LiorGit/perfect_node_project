import {Request} from "express";

export interface IWordsResult {
    [key: string]: number;
}
export interface IHash {
    [details: string] : string;
}

export abstract class RequestHandler {
    constructor(
        protected type: number,
        protected payload: any,
    ) {}

    public handle<T extends RequestHandler>(req: Request): IWordsResult {
        return {};
        // console.log("Not implemented yet!!!");
    }
}


