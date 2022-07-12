"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const app = express();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
const PORT = 3002;
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
const personRoute = require('./src/routes/personRoute');
app.use('/person', personRoute);
app.listen(PORT, () => {
    console.log(`listeniing at port:${PORT}`);
});
