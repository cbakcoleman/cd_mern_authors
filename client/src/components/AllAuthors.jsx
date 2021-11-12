import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';

const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect( () => {
        getAuthorsFromDB();
    }, [])

    const getAuthorsFromDB = () => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data.authors);
                setAuthors(res.data.authors);
            })
            .catch(err => console.log(err))
    }

    const deleteAuthor = (deleteId) => {
        console.log(deleteId)
        axios.delete("http://localhost:8000/api/authors/delete/" + deleteId)
            .then(res => {
                console.log("Successfully deleted " + deleteId);
                
                setAuthors( authors.filter( (author) => author._id !== deleteId))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p>
                <Link to={"/authors/new"}>Add an author</Link>
            </p>
            <h4>Our favorite authors:</h4>
            <div className="container">
                <table>
                    <thead>
                        <th>Author</th>
                        <th>Actions</th>
                    </thead>
                    {
                        authors.map( (author, i) => {
                            return (
                                <tbody key={author._id}>
                                    <tr>
                                        <td>{author.name}</td>
                                        <td>
                                            <Link to={"/authors/update/" + author._id}><button>Edit</button></Link> &nbsp;
                                            <button onClick={ () => deleteAuthor(author._id)}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                        
                </table>
            </div>
        </div>
    )
}

export default AllAuthors