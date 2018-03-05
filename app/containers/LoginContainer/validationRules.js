export default {
    email: {
        presence: {
            allowEmpty: false,
        },
        email: true
    },
    password: {
        presence: {
            allowEmpty: false,
        },
        length: {
            minimum: 6,
            message: 'must be at least 8 characters',
        },
    },
};