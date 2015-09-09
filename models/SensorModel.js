/**
 * Created by haywire on 09/09/15.
 */


var couchbase = require('couchbase');
var myCluster = new couchbase.Cluster('couchbase://'+global.config.couchdb.host);
var biogasBkt = myCluster.openBucket(global.config.couchdb.buckets.biogas.name, global.config.couchdb.buckets.biogas.password);

exports.saveData = function(docId, dataObj, callback){
    console.log("Saving data", dataObj);
    biogasBkt.insert(docId, dataObj, function(err, res) {
        if (err) {
            console.log('operation failed', err, res);
            callback(err, null);
            return;
        }
        console.log('seems ok', typeof res, JSON.stringify(res));
        callback(null, res);
    });

};