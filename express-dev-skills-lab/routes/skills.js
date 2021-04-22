const express = require("express");
const router = express.Router();

const skillsCtrl = require("../controllers/skills");

// when the request makes it to this file, we are already at /skills

router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);
router.get("/:id", skillsCtrl.show);
router.post("/", skillsCtrl.create);
router.delete("/:id", skillsCtrl.delete);
router.get('/:id/edit', skillsCtrl.edit);
router.put('/:id', skillsCtrl.update);

module.exports = router;
