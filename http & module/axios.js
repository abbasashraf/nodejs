const axios = require('axios');
let username = "abbasashraf"

axios.get('https://api.github.com/users/' + username)
    .then((res) => {
        // console.log(res.data)
        // console.log(res.data.followers);
        console.log(res.data.blog )
                
    }).catch(err => {
        console.log(err)
    })