import React,{useState} from 'react';
import Input from '../components/Input';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Landing = (props) => {
    const [register,setRegister] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [login,setLogin] = useState({
        email:"",
        password:""
    })
    const [errors,setErrors] = useState({
        register:{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        },
        login:{
            email:"",
            password:""
        }
    })
    const handleRegisterChange = (e) => {
        e.preventDefault();
        setRegister({
            ...register,
            [e.target.name]:e.target.value
        })
    }
    const handleLoginChange = (e) => {
        e.preventDefault();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    const getCookie = (e) => {
        e.preventDefault();
        Axios.get('http://localhost:8000/api/cookie')
            .then(res => console.log(res))
            .catch( err => console.log(err))
    }
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/register',register)
            .then(res => {
                console.log(res.data);
                setRegister({
                    firstName:"",
                    lastName:"",
                    email:"",
                    password:"",
                    confirmPassword:""
                })
                setErrors({
                    register:{
                        firstName:"",
                        lastName:"",
                        email:"",
                        password:"",
                        confirmPassword:""
                    },
                    login:{
                        email:"",
                        password:""
                    }
                })
            })
            .catch(err => setErrors({
                ...errors,
                register : err.response.data
            }))
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/login',login)
            .then(res => {
                console.log(document.cookie);
                console.log(res.data)
                navigate('/pirates');
            })
            .catch(err => console.log(err.response));
    }


    return(
        <div className="row col-8 mx-auto mt-5 justify-content-around">
            <button onClick={(e) => getCookie(e)}>Click for Cookie</button>
            <form className="col-5" onSubmit={(e) => handleRegisterSubmit(e)}>
                <h2>Register</h2>
                <Input 
                    name="firstName"
                    type="text"
                    label="First Name:"
                    error={errors.register.firstName ? errors.register.firstName: null}
                    handleChange={handleRegisterChange}
                    value={register.firstName}
                />
                <Input 
                    name="lastName"
                    type="text"
                    label="Last Name:"
                    error={errors.register.lastName ? errors.register.lastName: null}
                    handleChange={handleRegisterChange}
                    value={register.lastName}
                />
                <Input 
                    name="email"
                    type="email"
                    label="Email:"
                    error={errors.register.email ? errors.register.email: null}
                    handleChange={handleRegisterChange}
                    value={register.email}
                />
                <Input 
                    name="password"
                    type="password"
                    label="Password:"
                    error={errors.register.password ? errors.register.password: null}
                    handleChange={handleRegisterChange}
                    value={register.password}
                />
                <Input 
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password:"
                    error={errors.register.confirmPassword ? errors.register.confirmPassword: null}
                    handleChange={handleRegisterChange}
                    value={register.confirmPassword}
                />
                <div className="form-group">
                    <input type="submit" value="Register" className="btn btn-primary" />
                </div>
            </form>
            <form className="col-5" onSubmit={(e) => handleLoginSubmit(e)}>
                <h2>Login</h2>
                <Input 
                    name="email"
                    type="email"
                    label="Email:"
                    error={errors.login.email ? errors.login.email: null}
                    handleChange={handleLoginChange}
                    value={login.email}
                />
                <Input 
                    name="password"
                    type="password"
                    label="Password:"
                    error={errors.login.password ? errors.login.password: null}
                    handleChange={handleLoginChange}
                    value={login.password}
                />
                <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-warning" />
                </div>
            </form>
        </div>
    );
}

export default Landing;