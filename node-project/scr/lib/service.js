// [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

const { default: axios } = require("axios")


function getData(number) {
    return new Promise(async (res,rej) => {
        let user;
        let posts;
        try {
            user = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${number}`
            )
            posts = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?userId=${number}`
            )
        } catch(e) {
            `Hata : ${e}`
        }

        res(Object.assign(user.data,{posts: posts["data"][0]}))
    })
}

module.exports = getData;