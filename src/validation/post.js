const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
    let errors = {}

    data.postHeader = !isEmpty(data.postHeader) ? data.postHeader : '';
    data.postContent = !isEmpty(data.postContent) ? data.postContent : '';

    if (Validator.isEmpty(data.postHeader)) {
        errors.postHeader = "post Header is required"
    }

    if (Validator.isEmpty(data.postContent)) {
        errors.postContent = "post Content is required"
    }

    if (!Validator.isLength(data.postHeader, { min: 2, max: 500 })) {
        errors.postHeader = 'Name must be between two and five hundred characters';
    }

    if (!Validator.isLength(data.postContent, { min: 2, max: 300000000 })) {
        errors.postContent = 'Name must be between two and 300000000 characters';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}
