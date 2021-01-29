const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOOB_URI,{
    useNewUrlParser: true
})
    .then(db => console.log('DB is connect'))
    .catch(err => console.error(err))