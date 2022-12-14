const express = require('express');

const app = express();
const PORT = 3000;

app.use('/', express.static('dist'));
app.use('/registration', express.static('dist'));
app.use('/chats', express.static('dist'));
app.use('/profile', express.static('dist'));
app.use('/profile/edit', express.static('dist'));
app.use('/404', express.static('dist'));
app.use('/505', express.static('dist'));


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 