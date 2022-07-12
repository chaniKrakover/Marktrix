"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personController_1 = require("../controllers/personController");
const router = require("express").Router();
router.get("/", personController_1.getAllDetailes);
module.exports = router;
