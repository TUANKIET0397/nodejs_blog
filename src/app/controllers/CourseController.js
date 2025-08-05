const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongo');

class courseController {
    // GET /news/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // GET /courses/create
    create(req, res, next) {
        // res.send("COURSE CREATE")
        res.render('courses/create');
    }

    // POST /courses/store
    // async store(req, res, next) {
    //     res.send("COURSE store")
    //     // const formData = req.body
    //     // formData.image = `https://img.youtube.com/vi/${formData.videoId}/maxresdefault.jpg`
    //     // const course = new Course(formData)
    //     // await course.save()
    //     // res.send("Course created successfully")
    //     // .then(() => res.redirect("/"))
    //     // .catch((error) => {
    //     //     console.log(error)
    //     // })
    // }

    async store(req, res, next) {
        try {
            const formData = req.body;
            formData.image = `https://img.youtube.com/vi/${formData.videoId}/maxresdefault.jpg`;

            const course = new Course(formData);
            await course.save();

            res.redirect('/'); // hoặc render trang thông báo thành công
        } catch (error) {
            console.error('Lỗi khi lưu course:', error);
            next(error); // hoặc res.status(500).send("Đã xảy ra lỗi")
        }
    }
}

// export the instance of NewsController - xuất ra ngoài
module.exports = new courseController();
