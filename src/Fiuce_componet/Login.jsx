import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from './image/asset 0.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const hendalsub = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2200/users/', {
            email: email,
            password: pass
        })
            .then(function (response) {
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                if (response.data?.status === "success") {
                    navigate('/');
                } else {
                    setError('Incorrect email or password.');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const hendelchang = (e) => {
        setEmail(e.target.value)
    }
    const hendelpssword = (e) => {
        setPass(e.target.value)
    }
    return (
        <div>

            {/* <div className="loign text-white">
                <form onSubmit={hendalsub} className='px-5' >
                    <div className='login text-center'>
                        <img src={logo} alt="" />
                    </div>
                    <h1 className='text-center login-head'>Great to have you back!</h1>
                    <div className="mb-3 mt-5">
                        <input type="email" placeholder='Email adress' onChange={hendelchang} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4 padi">
                        <input type="password" placeholder='Password' onChange={hendelpssword} className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className='batan'>
                        <button type="submit" className="batan1 w-100 ">Login</button>
                    </div>
                    <div className='box-register'>
                        <span className='m-2 text-black'>Don’t have an account?</span>
                        <Link to="/Register"> Register now </Link>
                    </div>
                </form>
            </div> */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-xl-4 col-md-8" >
                        <form onSubmit={hendalsub} className="px-4 ">
                            <div className="text-center login">
                                <img src={logo} alt="" />
                            </div>
                            <h1 className="text-center mt-4 ">Great to have you back!</h1>
                            <div className="mb-3 mt-4">
                                <input type="email" placeholder="Email address" onChange={hendelchang} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-4">
                                <input type="password" placeholder="Password" onChange={hendelpssword} className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className='batan mb-4'>
                        <button type="submit" className="batan1 w-100 ">Login</button>
                    </div>
                            <div className="text-center">
                                <span className="text-black1">Don't have an account?</span>
                                <Link to="/Register">Register now</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
