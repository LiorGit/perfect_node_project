import express from 'express';
import bodyParser from 'body-parser';
import process from "process";

import pingRouter from "./routes/ping";
import textRouter from "./routes/textRouter";

import './database';

const app = express();
const port = 3000;

app.set('port', process.env.PORT || 3000);
app.use('/', pingRouter);
app.use(bodyParser.json());
app.use('/api/v1', textRouter);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
