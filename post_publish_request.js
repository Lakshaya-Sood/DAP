var axios = require('axios')

axios.post('http://localhost:3000/publish',{ appId: '90cf4642-2f52-41b3-aebd-f46eacc2bfc5'})
.then(function(){
    console.log('successfully published')
})
.catch(function(err){
    console.log('error',err)
})