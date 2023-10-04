import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const Register = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const hendalregister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2200/users/register', {
            email: email,
            password: pass
        })
            .then(function (response) {
                console.log(response.data);
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
            <div className="loign text-white">
                <form className='px-5' onSubmit={hendalregister}>
                        <h4 className='text-black text-center'>REGISTER</h4>
                    <div className="mb-3 mt-3">
                        <input type="email" placeholder='Email adress' onChange={hendelchang} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4 padi">
                        <input type="password" placeholder='Password' onChange={hendelpssword}  className="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <div className='batan'>
                        <button type="submit" className="batan1 w-100 ">Register</button>
                    </div>
                    <div className='box-register'>
                        <span className='m-2 text-black'>Don’t have an account?</span>
                        <a href="#">Register now </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
