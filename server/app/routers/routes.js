const express = require("express"); 
const AuthController = require("../controllers/AuthController");
const CarsController = require("../controllers/Cars");
const router = express.Router();


router.post("/login", AuthController.login);

router.get("/cars", AuthController.auth, CarsController.all);
router.post("/cars", AuthController.auth, CarsController.create);

router.get("/secure", AuthController.auth, (req, res) => {
    res.json({ message: "this is a secure route!", username: req.username });
  });

module.exports = router;