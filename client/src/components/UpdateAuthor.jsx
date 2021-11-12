import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory, Link} from 'react-router-dom';

const UpdateAuthor = () => {
    let history = useHistory();

    const [name, setName] = useState("");

    // ARRAY TO STORE ERRORS FROM API
    const [errors, setErrors] = useState([]);

    const {id} = useParams();

    useEffect ( () => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setName(res.data.author.name);
            })
            .catch(err => console.log(err))
    }, [])

    const updateSubmit = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/api/authors/update/" + id, {name})
            .then(res => {
                console.log(res.data);
                history.push("/authors/" +id)
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <p>
                <Link to={"/"}>Home</Link>
            </p>
            <h4>Edit this author:</h4>
            {JSON.stringify(name)}
            <div>
                <form className="card" onSubmit={updateSubmit}>
                    {errors.map((err, i) => <p key={i}>{err}</p>)}
                    <p>
                        Name: <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    </p>
                    <button className="button">Update</button> &nbsp;
                    <Link to={"/"} className="button">Cancel</Link>
                </form>
            </div>
        </div>
    )
}

export default UpdateAuthor