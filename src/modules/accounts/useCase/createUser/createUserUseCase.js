const UserRepository = require("../../repositories/implemantions/userRepository");

class CreateUserUseCase {
    static userRepository;
    constructor(){
        this.userRepository = new UserRepository();
    }

    async execute({name,login,password,email}) {
        await this.userRepository.create({name,login,password,email});
    }
}

module.exports = CreateUserUseCase;