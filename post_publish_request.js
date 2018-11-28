var axios = require('axios')

axios.post('http://localhost:3000/publish',{ appId: 'e0af8a3e-ca7d-4557-adb8-cb9d58901bb5'})
.then(function(){
    console.log('successfully published')
})
.catch(function(err){
    console.log('error',err)
})