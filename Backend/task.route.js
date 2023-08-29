const { router, app } = require("./route.global");
const authenticate = require('./middlewares/auth');
const{getTasks, getTasksById, updateTask, deleteTask, addTask} = require('./task.controller');

// router.use(authenticate)
router.get('/getAllUsers', getTasks);
router.put('/updateUser', updateTask);
router.delete('/deleteUser/:userId', deleteTask);
router.post('/addUser', addTask)

module.exports = {
    router : router
}