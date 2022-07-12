import { getAllDetailes } from "../controllers/personController";

const router = require("express").Router();

router.get("/", getAllDetailes);

module.exports = router;

