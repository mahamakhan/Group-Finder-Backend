const router = require("express").Router();
const controller = require("../controllers/playerController");

router.get("/", controller.getplayers);
router.get("/:player_id", controller.getplayer);
router.post("/:player_id", controller.registerPlayer);

module.exports = router;
