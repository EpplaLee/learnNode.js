var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tasks');
var Schema = mongoose.Schema;
var Tasks = new Schema({
    project: String,
    description: String
});
mongoose.model('Task', Tasks);

var Task = mongoose.model('Task');
var task = new Task();
task.project = 'Bikeshed';
task.description = 'Paint the bikeshed red.';
task.save(function(err) {
    if(err) throw err;
    console.log('Task saved');
});

Task.find({ 'project': 'Bikeshed'}, function(err, tasks) {
    for(var i = 0; i < tasks.length; i++) {
        console.log('ID:' + tasks[i]._id);
        console.log(tasks[i].description);
    } 
});

Task.update(
    {_id: '58c632fb182e8a2ad8b9fec0'},
    {description: 'Paint the bikeshed green.'},
    {multi: false},
    function(err, rows_updated) {
        if(err) throw err;
        console.log('Updated.');
    }
);
