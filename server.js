var app = require('express')();

app.get('/', function(req, res) {
    res.json({"hello": "world"})
})

app.listen(3001, function() {
    console.log('Relax and Restore API running on port 3001');
});