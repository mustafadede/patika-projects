// users data
fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then(function (users) {
            for(let u of users){
                document.body.insertAdjacentHTML("afterbegin",`<h1> <p style="color:blue;display:inline;">Names:</p> ${u["name"]}</h1>`)
            }
        }).catch((err) => console.log(err));