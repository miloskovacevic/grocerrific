var $ = require('jquery');

var RestHelper = {
    get: function (url) {
        return new Promise(function (success, error) {
            $.ajax({
               url: url,
               dataType: 'json',
               success: success,
               error: error
            });
        });
    },
    post: function (url, data) {
        return new Promise(function (success, error) {
            $.ajax({
                url: url,
                type: "POST",
                dataType: "json",
                data: data,
                success: success,
                error: error
            });
        });
    }
};

module.exports = RestHelper;
