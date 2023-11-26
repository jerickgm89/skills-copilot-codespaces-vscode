// Create web server

// Create comments array
var comments = [
  { name: 'John', message: 'Hello everyone!' },
  { name: 'Jane', message: 'Hi there!' }
]

// Create route for /comments
app.get('/comments', function (req, res) {
  res.json(comments)
})

// Start web server
app.listen(3000, function () {
  console.log('Express.js web server running at http://