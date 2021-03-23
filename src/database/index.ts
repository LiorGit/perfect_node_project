import couchbase from 'couchbase';
// import krypton from 'krypton';

const connectionString=  'couchbase://10.111.90.101//'/* + options.host*/;
const db = new couchbase.Cluster(connectionString);
let bucket;


bucket = db.openBucket('usms', '123456');
bucket.on('error', err => {
    console.log(err);
});

/*
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('Administrator', '123456');
const bucket = cluster.openBucket('usms');*//*
var N1qlQuery = couchbase.N1qlQuery;

bucket.manager().createPrimaryIndex(function() {
    bucket.upsert('user:king_arthur', {
            'email': 'kingarthur@couchbase.com', 'interests': ['Holy Grail', 'African Swallows']
        },
        function (err, result) {
            bucket.get('user:king_arthur', function (err, result) {
                console.log('Got result: %j', result.value);
                bucket.query(
                    N1qlQuery.fromString('SELECT * FROM bucketname WHERE $1 in interests LIMIT 1'),
                    ['African Swallows'],
                    function (err, rows) {
                        console.log("Got rows: %j", rows);
                    });
            });
        });
});*/
