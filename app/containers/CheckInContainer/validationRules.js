export default {
    pin: {
        presence: {
            allowEmpty: false,
        },
        length: {
            minimum: 8,
            message: 'must be at least 8 characters',
        },
    },
};