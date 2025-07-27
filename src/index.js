const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

// khi gõ tìm thư mục thì file index.js sẽ được tự động tìm
const route = require('./routes');

// middleware
app.use(express.urlencoded({ extended: true })); // xử lý dữ liệu từ form
app.use(express.json()); // xử lý dữ liệu json

// xử lý dạng file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
// set views directory - render xong nhảy vào đây tìm
app.set('views', path.join(__dirname, 'resources/views'));

// nạp route vào app
route(app);

// start 1 webserver -> nạp all data vào RAM -> action ---- dispathcher ----function handler
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
