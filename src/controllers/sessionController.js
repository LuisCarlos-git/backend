const User = require('../models/users')

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json({ user })

    }
}
//crianção de usuarios e verificação se ele e existente ou não