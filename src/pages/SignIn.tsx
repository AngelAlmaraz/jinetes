import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {setUserSession} from "../services/auth";
import {resetUserSession} from "../services/auth";
const loginUrl = 'https://4nxi7wtmf2.execute-api.us-east-1.amazonaws.com/dev/users/login';


interface LogInFormState {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    resetUserSession();
    const navigate = useNavigate();
    const [formState, setFormState] = useState<LogInFormState>({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(formState.email.trim()==='' || formState.password.trim() === ''){
            setErrorMessage('email and password required');
            return;
        }
        setErrorMessage('');
        const requestConfig = {
            headers:{
                'x-api-key':'iHc2GMJqnY4fR2g8o1aP19iyNYPHJB66TbqLdC30'
            }
        }
        const requestBody ={
            email:formState.email,
            password:formState.password
        }
        axios.post(loginUrl,requestBody,requestConfig).then((response) => {
            setUserSession(response.data.user,response.data.token);
            navigate('/');
        }).catch((error) => {
            if(error.response.status === 401 || error.response.status===403){
                setErrorMessage(error.response.data.message);
            } else{
                setErrorMessage('server error');
            }
        })
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '50%', padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 style={{ textAlign: 'center', fontSize: '4vw' }}>Sign In</h2>
                <h3 style={{ textAlign: 'center', fontSize: '2vw', marginTop: '5%' }}>
                    Add an account to be able to buy books
                </h3>
                <form onSubmit={handleSubmit}>
                    <div style={{marginTop: '10%', width:"100%" }}>
                        <div style={{marginTop:"2%"}}>
                            <label style={{marginLeft:"15%", fontSize: '1.5vw'}}>Email</label>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '1%' }}>
                            <input
                                style={{ borderRadius: '5px', background: 'white', width: '70%', height: '30px',color:"black",fontSize:"15px" }}
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div style={{marginTop:"2%"}}>
                            <label style={{marginLeft:"15%", fontSize: '1.5vw'}}>Password</label>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '1%' }}>
                            <input
                                style={{  borderRadius: '5px', background: 'white', width: '70%', height: '30px',color:"black",fontSize:"15px" }}
                                type="password"
                                name="password"
                                value={formState.password}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
                        <button type="submit" style={{ background: '#0C1326', padding: '10px',width:"20%",fontSize:"1.5vw" }}>
                            Sign In
                        </button>
                    </div>
                </form>
                {errorMessage && <p className="message" style={{color:"red"}}>{errorMessage}</p>}
                <div>
                    <h3  style={{ textAlign: 'center', fontSize: '1vw', marginTop: '2%' }}>don't have an account? <Link to="/signup" style={{textDecoration:"underline"}}>Sign up</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

