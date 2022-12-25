const { Router } = require('express');
const userController = require('../controllers/user.controller');


const router = Router();


router.get('/login', userController.login_get);



router.post('/login', userController.login_post);
router.get('/logout', userController.logout_get);

module.exports = router;