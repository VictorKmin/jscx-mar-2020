
const bcrypt = require('bcrypt');

const { ErorHandler, errors, statusCodesEnum } = require("../error");

module.exports = async (password, hashedPassword) => {
    const isPasswordsEquals = await bcrypt.compare(password, hashedPassword);

    console.log('***********************');
    console.log(isPasswordsEquals);
    console.log('***********************');

    if (!isPasswordsEquals) {
        throw new ErorHandler(errors.NOT_FOUND_USER.message, statusCodesEnum.NOT_FOUND, errors.NOT_FOUND_USER.code)
    }
}
