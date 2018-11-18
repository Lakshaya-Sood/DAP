var axios = require('axios')

axios.post('http://localhost:3000/publishScripts',{ appId: 'GreetingApp'})
.then(function(){
    console.log('successfully published')
})
.catch(function(err){
    console.log('error',err)
})