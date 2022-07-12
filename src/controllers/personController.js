"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDetailes = void 0;
var axios = require('axios');
const fetchData = (name) => __awaiter(void 0, void 0, void 0, function* () {
    let urlOne = {
        method: 'get',
        url: `https://api.genderize.io/?name=${name}`,
        headers: {}
    };
    let urlTwo = {
        method: 'get',
        url: `https://api.nationalize.io/?name=${name}`,
        headers: {}
    };
    return Promise.all([axios(urlOne), axios(urlTwo)])
        .then(([res1, res2]) => ({ res1: res1.data, res2: res2.data }));
});
function getAllDetailes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { name } = req.query;
        if (name == "" && typeof name !== 'string') {
            res.status(404).json('enter name!');
        }
        else {
            try {
                const response = yield fetchData(name);
                res.status(200).json(response);
            }
            catch (error) {
                res.status(404).json(error.message);
            }
        }
    });
}
exports.getAllDetailes = getAllDetailes;
