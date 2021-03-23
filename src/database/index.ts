import couchbase from 'couchbase';

export class Db {

    private static instance: couchbase;

    private constructor(){}

    public static getInstance() {
        if(!this.instance){
            const connectionString=  'couchbase://10.111.90.101//'/* + options.host*/;
            const db = new couchbase.Cluster(connectionString);

            const bucket = db.openBucket('usms', '123456');
            bucket.on('error', (err) => {
                console.log(err);
            });
            const api = {
                addNewValue(key, value) {
                    return new Promise((resolve, reject) => {
                        bucket.insert(key,value, (err) => {
                            if (err){
                                console.log(err);
                                reject(err);
                            } else {
                                console.log('success!!');
                                resolve();
                            }
                        });
                    })
                },
                getValue(key) {
                    return new Promise((resolve, reject) => {
                        bucket.getAndLock(key, (err, res) => {
                            if (err || (!res || !res.value)){
                                console.log(res);
                                reject(res);
                            } else {
                                console.log('success!!');
                                resolve(res.value);
                            }
                        });
                    });
                }
            };
            this.instance = api;
        }
        return this.instance;
    }
}
