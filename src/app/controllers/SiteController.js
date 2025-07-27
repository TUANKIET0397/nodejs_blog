class SiteController {
    // GET /
    index(req, res) {
        res.render('home');
    }

    // GET /news/search
    search(req, res) {
        res.render('search');
    }
}

// export the instance of NewsController - xuất ra ngoài
module.exports = new SiteController();
