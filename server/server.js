
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const imageRouter = require('./routes/image.router');
const reviewRouter = require('./routes/review.router');
const vehicleRouter = require('./routes/vehicle.router');
const witnessRouter = require('./routes/witness.router');
const incidentRouter = require('./routes/incident.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);
app.use('/api/review', reviewRouter);
app.use('/api/vehicle', vehicleRouter);
app.use('/api/witness', witnessRouter);
app.use('/api/incident', incidentRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
