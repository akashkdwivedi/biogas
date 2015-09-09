/**
 * Created by haywire on 06/09/15.
 */

var Promise = require('bluebird');
var SensorModel = Promise.promisifyAll(require('./../models/SensorModel'));
var commons = require('./../utils/commons');

module.exports = function(req, res) {

    var sensorData = {data: req.query.sensor.toString()};

    SensorModel.saveDataAsync(commons.generateUID(), sensorData )
        .then(function(result){
            res.json(result);
        })
        .catch(function(err){
            console.log('err: ', err, err.stack);
            res.send('err');
        })

};