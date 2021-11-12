import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';

const NewAuthor = () => {
    let history = useHistory();

    const [name, setName] = useState("");

    //ARRAY TO STORE ERRORS FROM API
    const [errors, setErrors] = useState([]);

    const formSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors/new", {name})
            .then(res => {
                console.log(res.data);
                history.push("/");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })

            setName("");
    }

    return (
        <div>
            <p>
                <Link to={"/"}>Home</Link>
            </p>
            <h4>Add a new author:</h4>
            {JSON.stringify(name)}
            <div >
                <form className="card" onSubmit={formSubmit}>
                    {errors.map((err, i) => <p key={i}>{err}</p>)}
                    <p>
                        Name: <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    </p>
                    <button className="button">Add</button> &nbsp;
                    <Link to={"/"} className="button">Cancel</Link>
                </form>
            </div>
        </div>
    )
}

export default NewAuthor