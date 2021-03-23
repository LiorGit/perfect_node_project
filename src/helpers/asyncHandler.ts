import {Request} from "express";
import { StringRequestHandler } from './stringHandler';
import { FileHandler } from './fileHandler';
import { ExternalApiHandler } from './externalApiHandler'

const stringRequestHandler = new StringRequestHandler();
const fileHandler = new FileHandler();
const externalApiHandler = new ExternalApiHandler();

function asyncHandler(req: Request): Promise<string> {
    if (req.body.type === 1){
        stringRequestHandler.handle(req);
    } else if (req.body.type === 2){
        fileHandler.handle(req);
    } else if (req.body.type === 3){
        externalApiHandler.handle(req);
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve('test');
        }, 3000)
    })
}

export {
    asyncHandler
};
