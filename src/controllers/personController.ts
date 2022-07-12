
var axios = require('axios');

const fetchData = async (name: string) => {
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
        .then(([res1, res2]) => ({ res1: res1.data, res2: res2.data }))
}


export async function getAllDetailes(req: any, res: any) {
    let { name } = req.query;
    if (name == "" && typeof name !== 'string') {
        res.status(404).json('enter name!');
    } else {
        try {
            const response = await fetchData(name);
            res.status(200).json(response)
        }
        catch (error: any) {
            res.status(404).json(error.message)
        }
    }
}
