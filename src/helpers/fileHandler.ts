import {Request} from "express";
import {IWordsResult, RequestHandler} from './requestHandler';
import fs from 'fs';

export class FileHandler extends RequestHandler {
    private text: string;

    constructor() {
        super(1, '');
    }

    public handle(req: Request): IWordsResult{
        const read = fs.createReadStream('/Users/lhasson/Documents/projects/perfect_node_project/examples/sample.txt', 'utf8');
        const data = [];
        read.on('data', function(chunk){
            console.log('new chunk received');
            console.log('data :', chunk, chunk.length);
        });

        read.on('end', () => {
            console.log('end :', Buffer.concat(data).toString());
            // end : I am transferring in bytes by bytes called chunk
        })

        read.on('error', (err) => {
            console.log('error :', err)
        })

        this.text = req.body.text || "";
        const res = {} as IWordsResult;
        res.lior = 3;
        res.test = 1;
        return res;
    }
}
