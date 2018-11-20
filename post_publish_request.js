var axios = require('axios')

axios.post('http://localhost:3000/publishScripts',{ appName: 'Greeting App'})
.then(function(){
    console.log('successfully published')
})
.catch(function(err){
    console.log('error',err)
})