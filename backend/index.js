// server.js

const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');

const app = express();

// Import routes
const eventRoute = require('./router/eventRouter.js');
const registerRoute = require('./router/registerRouter.js');
const feedbackRoute = require('./router/feedbackRouter.js');
const geteventRoute = require('./router/getevent-Router.js');
const galleryRoute = require('./router/galleryRouter.js');

// Define multer storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "_" + file.originalname);
  }
});

// CORS options
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://nishabareliya111:yxwj9cAQoF1TMQwM@cluster1.tazzvwo.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// User Model
const User = require('./models/model');
const eventUpdate = require('./models/eventUpdate.js');
const Booking = require('./models/eventBook');
const Feedback = require('./models/eventFeedbackModel');
const Gallery = require('./models/galleryModel');

// Routes
app.use("/event", eventRoute);
app.use("/register", registerRoute);
app.use("/feedback", feedbackRoute);
app.use("/api", geteventRoute);
app.use("/gallery", galleryRoute);

// Get Booking
app.get('/getBooking', (req, res) => {
  Booking.find()
    .then(bookings => res.json(bookings))
    .catch(err => res.status(400).json({ error: err }));
});

// Get Feedback
app.get('/getFeedback', (req, res) => {
  Feedback.find()
    .then(feedbacks => res.json(feedbacks))
    .catch(err => res.status(400).json({ error: err }));
});

// Register User
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPassword
  });

  newUser.save()
    .then(() => res.json({ message: 'User registered successfully' }))
    .catch(err => res.status(400).json({ error: err }));
});

// Get Gallery
app.get('/getGallery', (req, res) => {
  Gallery.find()
    .then(galleries => res.json(galleries))
    .catch(err => res.status(400).json({ error: err }));
});

// Create Event
app.post('/eventpost', async (req, res) => {
  const { eventType, venue } = req.body;
  const newEvent = new eventUpdate({
    eventType,
    venue
  });

  newEvent.save()
    .then(() => res.json({ message: 'Event created successfully' }))
    .catch(err => res.status(400).json({ error: err }));
});

// Upload Gallery Image
const upload = multer({ storage: storage }).single("image");

app.post('/gallery', upload, async (req, res) => {
  try {
    const { eventTypes, description } = req.body;
    const image = req.file.filename;

    const newGallery = new Gallery({
      eventTypes,
      description,
      images: image
    });

    const savedGallery = await newGallery.save();
    res.json({ message: 'Gallery updated successfully', gallery: savedGallery });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login User
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      return res.status(200).json({ msg: 'Login successful' });
    } else {
      return res.status(400).json({ msg: 'Login failed' });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Delete Feedback
app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Feedback.deleteOne({ _id: id });
    res.json({ message: "Feedback deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// Delete Booking
app.delete("/deleteBooking/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Booking.deleteOne({ _id: id });
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// Delete Gallery Image
app.delete("/deleteGallery/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Gallery.deleteOne({ _id: id });
    res.json({ message: "Gallery image deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
