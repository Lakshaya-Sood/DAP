var axios = require('axios')

axios.post('http://localhost:3000/publishScripts',{ appId: '11c8a0ee-467e-43a8-a4da-5f81f5b81e55'})
.then(function(){
    console.log('successfully published')
})
.catch(function(err){
    console.log('error',err)
})