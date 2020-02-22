const PirateController = require('../controllers/pirates.controller'),
    UserController = require('../controllers/users.controller'),
    {authenticate} = require('../config/jwt.config');


module.exports = (app) => {
    app.post('/api/register', UserController.register)
    app.post('/api/login',UserController.login)
    app.get('/api/pirates',authenticate, (req,res) => {
        console.log(`Cookie: ${req.cookies}`);
        PirateController.index(req,res)})
    app.get('/api/pirate/:id', authenticate, PirateController.show)
    app.post('/api/pirate',authenticate, PirateController.create)
    app.put('/api/pirate/:id',authenticate,PirateController.update)
    app.delete('/api/pirate/:id',authenticate,PirateController.destroy)
}