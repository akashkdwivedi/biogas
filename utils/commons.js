/**
 * Created by haywire on 09/09/15.
 */

exports.generateUID = function(){
    var uid = Math.random()*10 + '.' + Math.random()*10 + '.'+Math.random()*10;
    console.log('uid: ', uid);
    return uid;
};