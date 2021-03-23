import {Request} from "express";
import { StringRequestHandler } from './stringHandler';

const stringRequestHandler = new StringRequestHandler();

function asyncHandler(req: Request): Promise<string> {
    stringRequestHandler.handle(req);
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve('test');
        }, 3000)
    })
}

export {
    asyncHandler
};
