const router = require('express').Router();
// let workout = require('../models/workouts.model');
const path = require('path');
// let stats = require('../../public/stats.html')
// const { response } = require('express');

router.route('/').get((req, res) => {
  res.sendFile(path.join(__dirname,"../../public/exercise.html"));
  workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
  stats.find()
  .then(stats => res.json(stats))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.get("/exercise", (req, res) => {
  res.sendFile(path.join (__dirname, "../../public/exercise.html"));
});



module.exports = router;