const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3000
const Eureka = require('eureka-js-client').Eureka;
const Prometheus = require('prom-client')

var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

const metricsInterval = Prometheus.collectDefaultMetrics()
const checkoutsTotal = new Prometheus.Counter({
  name: 'checkouts_total',
  help: 'Total number of checkouts',
  labelNames: ['payment_method']
})
const httpRequestDurationMicroseconds = new Prometheus.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.10, 5, 15, 50, 100, 200, 300, 400, 500]  // buckets for response time from 0.1ms to 500ms
})

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

// Prometheus
app.use((req, res, next) => {
    res.locals.startEpoch = Date.now()
    next()
  })

app.get('/api/auth/metrics', (req, res) => {
    res.set('Content-Type', Prometheus.register.contentType)
    res.end(Prometheus.register.metrics())
  })

app.use((req, res, next) => {
    const responseTimeInMs = Date.now() - res.locals.startEpoch
  
    httpRequestDurationMicroseconds
      .labels(req.method, req.route.path, res.statusCode)
      .observe(responseTimeInMs)
  
    next()
  })
// End Prometheus

const loginController = require('./controller/loginController');
client.logger.level('debug');
client.start((error) => {
    console.log(error || 'Eureka client started');
    app.use('/api/auth', loginController);
});

module.exports = app