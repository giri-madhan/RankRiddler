const express = require("express");
const {
  valForm,
  leagueForm,
  csgoForm,
  getForm,
  getLeagueForm,
  getCsgoForm,
} = require("../controllers/formControllers");

const { bugForm } = require("../controllers/bugController");
const rateLimit = require("express-rate-limit");
const auth = require("../controllers/auth");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const router = express.Router();

router.post("/val",limiter, valForm);
router.post("/league",limiter, leagueForm);
router.post("/csgo",limiter, csgoForm);

router.get("/valdata",limiter, getForm);
router.get("/leaguedata",limiter, getLeagueForm);
router.get("/csgodata",limiter, getCsgoForm);

router.post("/bug",limiter, bugForm);

module.exports = router;
