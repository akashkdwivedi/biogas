/**
 * Created by prashant on 18/9/14.
 */
var port = process.env.PORT || 3000;

module.exports = {
	conf: {
		host: '127.0.0.1',
		port: port,
		maxHttpConnections: 1000,
		maxFSDescriptor: 1000
	},
    couchdb: {
        host: 'ec2-52-18-53-105.eu-west-1.compute.amazonaws.com',
        buckets: {
            biogas: {
                name: 'biogas',
                password: 'mahender'
            }
        }
    },
	mongo: {
		hosts: [ '127.0.0.1' ],
		dbname: 'mydatabase',
		auth: {
			enabled: false,		// Note: username pwd will ONLY be used if enabled === true
			username: '',
			password: ''
		},
		poolSize: 20
	}
};