module.exports = {
    multipleMongooseToObject: function (mongooseObjects) {
        return mongooseObjects.map((mongooseObject) =>
            mongooseObject.toObject(),
        );
    },

    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
