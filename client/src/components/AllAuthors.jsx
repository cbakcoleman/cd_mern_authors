import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';

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

    return (
        <div>
            <p>
                <Link to={"/"}>Add an author</Link>
            </p>
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
                                    <td>{author.name}</td>
                                    <td>
                                        <button>Edit</button> | 
                                        <button>Delete</button>
                                    </td>
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