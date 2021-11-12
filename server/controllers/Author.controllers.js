const Author = require("../models/Author.models");

module.exports = {
    // READ ALL
    findAllAuthors : (req, res) => {
        Author.find()
            .then(allAuthors => res.json({ message: "Success!", authors: allAuthors }))
            .catch(err => res.json({ message: "Pobody's Nerfect!", error: err}));
    }, 
    // READ ONE
    findOneAuthor : (req, res) => {
        Author.findById(req.params.id)
            .then(oneAuthor => res.json({ message: "Success!", author: oneAuthor}))
            .catch(err => res.json({ message: "Pobody's Nerfect!", error: err}));
    },
    // CREATE
    createNewAuthor : (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json({ message: "Success!", author: newAuthor }))
            .catch(err => res.status(418).json(err));
    },
    // UPDATE
    updateAuthor : (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedAuthor => res.json({ message: "Success!", author: updatedAuthor }))
            .catch(err => res.status(418).json(err));
    },
    // DESTROYYYYY
    deleteAuthor : (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json({ message: "Success!", result: result }))
            .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    }
}