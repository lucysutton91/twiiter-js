const express = require( 'express' );
const app = express();


app.use(function (request, response, next) {
    console.log(request);
    next();
})


app.listen(3000, function () {
    console.log('server listening')
});