const validator = require("fastest-validator");

const v = new validator();

const schema = {
    name: {
        type: "string",
        min:3,
        max:15
    },
    username: {
        type: "string",
        min:5,
        max:12
    },
    email: {
        type: "string"
    },
    age: {
        type: "number",
        min: 18,
        max: 50
    }

}

const check = v.compile(schema)

module.exports = check