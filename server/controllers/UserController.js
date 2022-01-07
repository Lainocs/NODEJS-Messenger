const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10
// create and save new user
exports.create = (req, res) => {
    // validate req
    if(!req.body) {
        res.status(400).send('Request body is missing')
        return
    }

    req.body.password = bcrypt.hashSync(req.body.password, saltRounds)


    // create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        status: req.body.status
    })

    // save user in db
    user
        .save(user)
        .then((result) => {
            // res.send(result)
            res.redirect('/add-user')
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the user'
            })
        });
}

// retrieve all users / retrieve single user
exports.find = (req, res) => {

    if(req.query.id) {
        const id = req.query.id
        User.findById(id)
            .then(data => {
                if(!data) {
                    res.status(404).send({
                        message: `User with id ${id} not found`
                    })
                } else {
                    res.send(data)
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || `Error retrieving user with id ${id}`
                })
            })
    } else {
        User.find()
            .then((users) => {
                res.send(users)
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving users'
                })
            })
    }
}

// update user
exports.update = (req, res) => {
    if(!req.body) {
        res.status(400).send('Request body is missing')
        return
    }

    const id = req.params.id
    User.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: `Cannot update user with id ${id}. User was not found`
            })
        } else {
            res.send(data)
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: `Error updating user with id ${id}`
        })
    })
}

// delete user
exports.delete = (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: `Cannot delete user with id ${id}. User was not found`
            })
        } else {
            res.send({
                message: `User with id ${id} was deleted`
            })
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: `Error deleting user with id ${id}`
        })
    })
}

exports.verifyLogin = async (req, res) => {
    // Our login logic starts here
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            // user
            res.status(200).json({token: token, userId: user._id});
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
}
