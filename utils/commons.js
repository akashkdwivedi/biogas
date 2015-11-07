/**
 * Created by haywire on 09/09/15.
 */

exports.generateUID = function(){
    var uid = (new Date()).getTime() + '.' + Math.random()*10;
    console.log('uid: ', uid);
    return uid;
};