import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
        fullName: '',
        email: '',
        mobileNo: '',
        isAdmin: false,
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    }
    const handleCheckBox = (e) => {
        setForm({ ...form, isAdmin: e.target.checked });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting", form);
        await axios({
            method: 'post',
            url: 'http://localhost:4040/users/register',
            data: form
        }).then((res) => {
            if (res.status === 201) {
                window.location.reload();
                alert("User Created Successfully");
            }
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="message">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Full Name" name='fullName' required value={form.fullName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Username</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Username" name='username' required value={form.username} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password" name='password' required value={form.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Email" name='email' required value={form.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Number</label>
                    <input type="text" className="form-control" id="mobileNo" placeholder="Enter Phone Number" name='mobileNo' required value={form.mobileNo} onChange={handleChange} />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="isAdmin" required name='isAdmin' onChange={handleCheckBox} />
                    <label className="form-check-label" for="isAdmin">Are you Admin</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                <Link to="/register">Already have a account</Link>
            </form>
        </div>
    )
}

export default Register