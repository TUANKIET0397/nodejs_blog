const { multipleMongooseToObject } = require('../../util/mongo');
const Course = require('../models/Course');

class SiteController {
    // GET /
    // async index(req, res) {
    //     try {
    //         const courses = await Course.find({})
    //         console.log("ket qua la:", courses)
    //         res.json(courses)
    //     } catch (err) {
    //         res.status(400).json({ error: "ERROR" })
    //     }
    // }
    // Cách viết gọn hơn
    index(req, res, next) {
        Course.find({})

            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    // GET /news/search
    search(req, res) {
        res.render('search');
    }
}

// export the instance of NewsController - xuất ra ngoài
module.exports = new SiteController();
