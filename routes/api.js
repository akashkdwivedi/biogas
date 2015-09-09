/**
 * Created by haywire on 06/09/15.
 */

var express = require('express');
var router = express.Router();
var SaveSensorDataCtrl = require('./../controllers/SaveSensorDataCtrl');

/* GET home page. */
router.get('/savesensordata', SaveSensorDataCtrl);

module.exports = router;