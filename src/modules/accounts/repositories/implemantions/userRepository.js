const User = require("../../entities/user");

class UserRepository {
    static repostory;
    constructor() {
        this.repostory = User;
    }

    async create ({name,login,password,email}) {
        console.log('tese')

        await this.repostory.create({name,login,password,email});
    }
}

module.exports = UserRepository;