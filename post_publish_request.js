var axios = require('axios')

axios.post('http://localhost:3000/publish',{ appId: 'bf20d025-9a5d-436e-8b55-b2d786b53b5c'})
.then(function(){
    console.log('successfully published')
})
.catch(function(err){
    console.log('error',err)
})