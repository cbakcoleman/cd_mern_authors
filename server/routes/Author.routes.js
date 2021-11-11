const Product = require("../controllers/Author.controllers");

const {findAllAuthors, findOneAuthor, createNewAuthor, updateAuthor, deleteAuthor} = require("../controllers/Author.controllers");

module.exports = (app) => {
    app.get("/api/authors", findAllAuthors);
    app.get("/api/authors/:id", findOneAuthor);
    app.post("/api/authors/new", createNewAuthor);
    app.put("/api/authors/update/:id",updateAuthor);
    app.delete("/api/authors/delete/:id", deleteAuthor);
}