const router = express.Router();
const authController = require("../middleware/auth");

router.get("/logout", authController.logout);
router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/getUser", authController.getUser);

module.exports = router;
