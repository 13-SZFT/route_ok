const express = require('express');
const app = express();
const connectToDatabase = require('./utils/db');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// adatbázis kezelése
connectToDatabase();

// route-ok
app.use('/', require('./routes/mainRoute'));
app.use('/feltolt', require('./routes/uploadRoute'));

app.listen(5000, () => {
    console.log(`A szerver fut az http://localhost:5000`);
});
