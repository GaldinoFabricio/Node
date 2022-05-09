const CreateUserUseCase = require("./createUserUseCase");

class CreateUserController {
    async handle(req,res) {
        const createUserUseCase = new CreateUserUseCase;

        const {name,login,password,email} = req.body;

        await createUserUseCase.execute({name,login,password,email})
        res.status(200).send()
    }
}

module.exports = CreateUserController;