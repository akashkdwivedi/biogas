/**
 * Created by haywire on 06/09/15.
 */

var Promise = require('bluebird');
var SensorModel = Promise.promisifyAll(require('./../models/SensorModel'));
var commons = require('./../utils/commons');
var moment = require('moment');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

module.exports = function(req, res) {
    //var recordTime = moment().utc().format();
    var sensorDataLines = req.query.sensor.toString().split(";");
    var saveDataPromises = [];
    sensorDataLines.map(function(sensorDataLine){
        if(!_.isEmpty(sensorDataLine)){
            var data = sensorDataLine.split(',');
            var sensorDate = data.shift();
            var sensorTime = data.shift();
            var deviceId = data.shift();
            var sensorData = data.shift();
            var sensorData = {date: sensorDate, time: sensorTime, deviceid: deviceId, data: sensorData };
            // log to static file
            logtofile(recordTime +":\t" + JSON.stringify(sensorData));
            saveDataPromises.push(SensorModel.saveDataAsync(commons.generateUID(), sensorData))
        }
    });

    Promise.all(saveDataPromises)
        .then(function(result){
            res.json(result);
        })
        .catch(function(err){
            console.log('err: ', err, err.stack);
            res.send('err');
        })

};

function logtofile(data){
    var time = moment().format("YYYY-MM-DD");
    fs.appendFile(path.join(global.config.conf.log_path + '/' + time +'.log'), data, function (err) {
        if (err)
            console.log("Error writing to file: "+err);
    });
}