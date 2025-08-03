class NewsController {
    // GET /news
    index(req, res) {
        res.render('news');
    }

    // GET /news/:slug
    show(req, res) {
        res.send('News detail -');
    }
}

// export the instance of NewsController - xuất ra ngoài
module.exports = new NewsController();
