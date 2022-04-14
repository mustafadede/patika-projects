fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then(function (comments) {
            for(var comment of comments){
                document.body.insertAdjacentHTML("afterbegin",`<h1> <p style="color:orange;display:inline;">Email:</p> ${comment["email"]}</h1>`)
            }
        })