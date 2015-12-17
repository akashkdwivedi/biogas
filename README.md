# SDC: Sensor Data Collector

SDC is written primarily in node.js and has been tested successfully with node v0.12.2 and v4.2.0.
It uses an API driven approach to record data in couch database. Sample Input to the API:
    
    HTTP GET Request
    http://localhost:3000/api/savesensordata?sensor=20151220,1830,1276546,1,2,3,4,5;20151220,1930,1276546,a,b,c,d,e;20151220,1830,1276546,1,2,3,4,5;
    
The server reads the value of the `sensor` parameter and parses it. Each set of data is separated by a `;`. So if you need to send data for 3 hours (as in the example above), it would look like `sensor=dataset1;dataset2;dataset3`

Each dataset here comprises of the values separated by a `,` (comma) in the following order:
    `date,time,deviceid,sensordata1,sensordata2,sensordata3`

#### Configuration Files:

You can set couchdb host and  bucket configurations in
`project_root/config/development.js`

#### Project Flow: Quick Project Setup and Starting:

This project is based on ExpressJS framework for Node.js. 

	* Dependencies are listed in `project_root/package.json`
	* The first file loaded on starting the project is `proeject_root/bin/www`
	* www then loads `project_root/app.js` file which bootstraps the application
	* app.js sets all the routes and corresponding controllers and models
	* routes are set in `project_root/routes` folder.
	* This project's route is set in `project_root/routes/api.js` file
	* api.js invokes `project_root/controllers/SaveSensorDataCtrl.js` file
	* the business logic descirbed above in the overview section is written in the SaveSensorDataCtrl.js
	* SaveSensorDataCtrl.js includes `project_root/models/SensorModel.js` model file.
	* SensorModel.js interacts with couch db to save the data.
	* In addition to saving data in couchbase, the SaveSensorDataCtrl also writes the data in the log file.
	* the log file's path is configured in config/development.js file

#### Running the Project:
Make sure node.js and npm is already installed in your system. nodejs version 4.2.0 is recommended.

	1. Obtain the source code of the project by cloning it from Bitbucket: https://hay_wire@bitbucket.org/hay_wire/couch_biogas.git
	2. cd to project_root
	3. run `npm install`
	4. If `forever` module is not present already, install it using `sudo npm install -g forever`
	5. Start the app using: `forever bin/www`
	6. It is advised to run this app in a `screen` session on the server, else it will be stopped when ur ssh session disconnects 
	7. You can find more about screen session in linux from: https://www.rackaid.com/blog/linux-screen-tutorial-and-how-to/


For furher queries feel free to shoot me an email at: prashantdwivedi06@gmail.com.


Thanks :)









