const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3000
const Eureka = require('eureka-js-client').Eureka;
const ENV =  process.env.NODE_ENV || 'production';
var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
const loginController = require('./controller/loginController');

if(ENV === 'test'){
    app.use('/api/auth', loginController);
}else{
const client = new Eureka({
    // application instance information
    instance: {
        app: 'authen',
        hostName: process.env.EUREKA_CLIENT_HOST || 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: (process.env.EUREKA_CLIENT_URL || 'http://localhost:') + port,
        vipAddress: 'authen',
        port: {
            $: port,
            '@enabled': 'true',
        },
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
        registerWithEureka: true,
        fetchRegistry: true,
        leaseRenewalIntervalInSeconds: 1,
        leaseExpirationDurationInSeconds: 2
    },
    eureka: {
        // Eureka server
        host: process.env.EUREKA_SERVER_HOST || 'localhost',
        port: process.env.EUREKA_SERVER_PORT || 8761,
        servicePath: '/eureka/apps/',
    },
});

client.logger.level('debug');
client.start((error) => {
    console.log(error || 'Eureka client started');
    app.use('/api/auth', loginController);
});
}
module.exports = app