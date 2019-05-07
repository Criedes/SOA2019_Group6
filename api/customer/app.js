const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000
const Eureka = require('eureka-js-client').Eureka;
var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())

const customerController = require('./controller/customerController');
const client = new Eureka({
    // application instance information
    instance: {
        app: 'customer',
        hostName: process.env.EUREKA_CLIENT_HOST || 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: (process.env.EUREKA_CLIENT_URL || 'http://localhost:') + port,
        vipAddress: 'customer',
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
    app.use('/api/customers', customerController);
});

module.exports = app
