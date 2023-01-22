import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: '',
        password: '',
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting", form);
        await axios({
            method: 'post',
            url: 'http://localhost:4040/users/login',
            data: form
        }).then(res => {
            if (res.status === 200) {
                window.location.reload();
                alert("User Login Successfully");
                navigate('/');
            }
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Username" name='username' required value={form.username} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" className="form-control" id="title" required placeholder="Enter Password" name='password' value={form.password} onChange={handleChange} />
                </div>
                <Link to="/register">Don't have a account</Link>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login