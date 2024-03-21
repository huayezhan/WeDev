import express from 'express'
import userCtrl from '../controllers/user.controller.js' 
import authCtrl from '../controllers/auth.controller.js'
  const router = express.Router()
  router.route('/surveyapi/users') 
  .get(userCtrl.list)
  .post(userCtrl.create)
  /*router.route('/api/users/:userId') 
    .get(userCtrl.read)
    .put(userCtrl.update) 
    .delete(userCtrl.remove)*/
  router.route('/surveyapi/users/:userId')
.get(authCtrl.requireSignin, userCtrl.read)
.put(authCtrl.requireSignin, authCtrl.hasAuthorization, 
userCtrl.update)
.delete(authCtrl.requireSignin, authCtrl.hasAuthorization, 
userCtrl.remove)
router.param('userId', userCtrl.userByID)
router.route('/surveyapi/users').post(userCtrl.create) 
router.route('/surveyapi/users').get(userCtrl.list)
router.param('userId', userCtrl.userByID)
router.route('/surveyapi/users/:userId').get(userCtrl.read)
router.route('/surveyapi/users/:userId').put(userCtrl.update)
router.route('/surveyapi/users/:userId').delete(userCtrl.remove)
router.route('/surveyapi/filter').get(userCtrl.filter)
  
  export default router