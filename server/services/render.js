const axios = require('axios')
const express = require('express')

const port = process.env.PORT || 3000

exports.homeRoutes = (req, res) => {
    // Make a get request to the /api/users
    axios.get(`http://localhost:${port}/api/users`)
        .then(function(response) {
            res.render('index', {users: response.data})
        })
}

exports.addUserRoutes = (req, res) => {
    res.render('add_user')
}

exports.updateUserRoutes = (req, res) => {
        axios.get(`http://localhost:${port}/api/users`, {params: {id: req.query.id}})
        .then(function(userdata) {
            res.render('update_user', {user: userdata.data})
        })
        .catch(e => {
            res.send(e)
        })
}