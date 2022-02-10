module.exports = function(app) {

    var books = require('../controllers/book.controller.js');

    app.post('/api/book', books.createBook);
    app.delete('/api/book/:id', books.deleteBook);
    app.put('/api/book', books.updateBook);
    app.get('/api/book/:id', books.getBook); 
    app.get('/api/book', books.books);
    
}