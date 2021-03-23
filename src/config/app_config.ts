/*import readFileSync from "fs";
import join from "path";

const envData = {
    couchbase: '',
};
const localCfg = JSON.parse(readFileSync(join(__dirname, '../../localCfg/conf.json'), 'utf8'));
envData.couchbase = localCfg.couchbase;
*/

const envData = {
    couchbaseDetails: {
        /*host: "10.111.90.101",
        password: "4a9e0ce7293332cebb032f089f2963c2.40b10a9619d7488a258b4218d4b36ffa.6ebcd41af3e6fe251b870a733992f2a7373b888f16d37672019e0d6610ebc939",
        bucket: "usms"*/
        host: "couchbase://localhost",
        username: "Administrator",
        password: "123456",
    }
}
module.exports = Object.assign({}, envData);
