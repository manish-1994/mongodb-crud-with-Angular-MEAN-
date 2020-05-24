const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/names', (err) => {
  if (!err) {
    console.log('Mongodb connection successful.....');
  } else {
    console.log('Error in connection:' + JSON.stringify(err, undefined, 2));
  }
});
module.exports = mongoose;
