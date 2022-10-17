const express = require('express'),
      sass = require('node-sass');

const app = express();
const PORT = 3000;


app.use('/', express.static('src'));
app.use('/registration', express.static('src'));
app.use('/chats', express.static('src'));
app.use('/profile', express.static('src'));
app.use('/profile/edit', express.static('src'));
app.use('/404', express.static('src'));
app.use('/505', express.static('src'));


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 