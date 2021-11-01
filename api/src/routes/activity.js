const { Router } = require("express");
const { conn } = require("../db");
const { Activity } = conn.models;

const router = Router();
// http://localhost:3001/api/activity/

// {
//   "id": "166b3bf7-9248-433d-808f-666f53161d31",
//   "name": "paracaidas",
//   "difficulty": "5",
//   "duration": 30,
//   "season": "Spring",
//   "createdAt": "2021-10-28T19:36:11.663Z",
//   "updatedAt": "2021-10-28T19:36:11.663Z"
// }

router.get("/", async (req, res, next) => {
  try {
    const newActivity = await Activity.findAll();
    res.send(newActivity);
  } catch (error) {
    next(error);
  }
});

// http://localhost:3001/api/activity/

// {
//   "name": "paracaidas",
//   "difficulty": "5",
//   "duration": "30",
//   "season": "Spring"
// }

router.post("/", async (req, res, next) => {
  try {
    const { name, difficulty, duration, season, countryId } = req.body;
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    if (countryId) await newActivity.addCountry(countryId);
    res.status(201).send(newActivity);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
