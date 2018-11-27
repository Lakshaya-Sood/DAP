var axios = require('axios')

axios.post('http://localhost:3000/publish',{ appId: '35e83010-c4f8-4895-a5d2-1fe4ec846d03'})
.then(function(){
    console.log('successfully published')
})
.catch(function(err){
    console.log('error',err)
})