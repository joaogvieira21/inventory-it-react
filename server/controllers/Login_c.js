const User = require('../models/User_m');
require('dotenv').config();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

async function loginUser (req, res) {
    const status = {
        code : 200,
        msg : "OK",
        dados: []
    }

    try {
        const { email, password} = req.body
        if (!(!email || !password)) {
            const findUser = await User.findOne({email:email})
            if (findUser===null) {
                status.msg = "Usuário não encontrado!"
                status.code = 400
            } else {
                const checkPassword = await bcrypt.compare(password, findUser.password)
                if (!checkPassword) {
                    status.msg = "Senha inválida"
                    status.code = 422
                } else {
                    const secret = process.env.SECRET
                    const token = jwt.sign(
                        {
                            id: findUser._id,
                        },
                        secret,
                        )
                    status.msg = "Autenticação realizada com sucesso!"
                    status.code = 200
                    status.dados.push(token)
                    
                }
            }
        } else {
            status.msg = "Faltando parâmetros obrigatórios!"
            status.code = 422
        }
    }
    catch (err) {
        status.msg = "Ocorreu algum erro!"
        status.code = 400
    }
    res.send(status)
}

module.exports = { loginUser }