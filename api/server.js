const app = require('./app')

const server = app.listen(3000, function () {
    console.log('app listening on port 3000!')
})