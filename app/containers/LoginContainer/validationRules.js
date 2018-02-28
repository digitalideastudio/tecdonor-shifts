export default {
    username: {
        presence: {
            allowEmpty: false,
        },
        length: {
            minimum: 3,
            message: 'must be at least 3 characters',
        },
    },
    password: {
        presence: {
            allowEmpty: false,
        },
        length: {
            minimum: 8,
            message: 'must be at least 8 characters',
        },
    },
};