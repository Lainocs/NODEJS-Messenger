var controller = {
    login: async function(req, res) {
        let login = req.body.login
        let password = req.body.password
        if(login == null || login == '') {
            res.status(400).json({
                message: 'Login is required',
                status: "error"
            })
        }
        if(password == null || password == '') {
            res.status(400).json({
                message: 'Password is required',
                status: "error"
            })
        }
        try {
            let user = await models.User.findOne({
                include: [{
                    model: models.Role,
                    require: true
                }],
                where: {
                    login: login,
                }
            })   
            if(user != null) {
                if(user.active == false) {
                    res.status(400).json({
                        message: 'User is not active',
                        status: "error"
                    })
                }
                if(bcrypt.compareSync(password, user.password)) {
                    res.status(200).json({
                        message: 'User is logged in',
                        status: "success",
                        user: user
                    })
                } else {
                    res.status(400).json({
                        message: 'Password is incorrect',
                        status: "error"
                    })
                }
                return res.status(401).json({
                    message: 'User already exists',
                    status: "error"
                })
            } else {
                res.status(400).json({
                    message: 'User does not exist',
                    status: "error"
                })
            }
        } catch(e) {
            res.status(500).json({
                message: 'Something went wrong',
                status: "error"
            })
        }
    }
}