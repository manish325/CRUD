const {mongoose} = require('./db.js');
const taskSchema = new mongoose.Schema({
    name : String,
    email: String,
    number : String
})

const taskModel = mongoose.model('Tasks', taskSchema);
module.exports = {
    taskModel
}