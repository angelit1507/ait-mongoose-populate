var atPopulate = function (data, options, callback) {
    var model = this;
    if (options.length == 0) return callback(null, data);
    User.populate(data, options[0], function (err, data) {
        if (options.length == 1)
            callback(err, data);
        else {
            options.shift();
            populate(data, options, callback);
        }
    });
}

module.exports = function (schema) {
    schema.statics.atPopulate = atPopulate;
}