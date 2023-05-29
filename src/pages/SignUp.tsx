import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {resetUserSession} from "../services/auth";

const registerUrl = 'https://4nxi7wtmf2.execute-api.us-east-1.amazonaws.com/dev/users/register';


interface SignUpFormState {
    username: string;
    email: string;
    password: string;


}

const SignUp: React.FC = () => {
    resetUserSession();
    const navigate = useNavigate()
    const [formState, setFormState] = useState<SignUpFormState>({
        username:'',
        email: '',
        password: '',
    });
    const [message,setMessage] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formState.username.trim()==='' || formState.email.trim()=== '' || formState.password.trim() === ''){
            setMessage('All fields are required');
            return;
        }
        setMessage('');
        const requestConfig = {
            headers:{
                'x-api-key':'iHc2GMJqnY4fR2g8o1aP19iyNYPHJB66TbqLdC30'
            }
        }
        const requestBody = {
            username:formState.username,
            email:formState.email,
            password:formState.password
        }
        axios.post(registerUrl, requestBody, requestConfig).then(response =>{
            setMessage('Registration Succesful');
            navigate('/signin')
        }).catch(error => {
            if (error.response.status === 401 || error.response.status ===403){
                setMessage(error.response.data.message);
            }
            else{
                setMessage('server error');
            }

        })
        //console.log(formState)


    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '50%', padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 style={{ textAlign: 'center', fontSize: '4vw' }}>Sign Up</h2>
                <h3 style={{ textAlign: 'center', fontSize: '2vw', marginTop: '5%' }}>
                    Create an account to be able to buy books
                </h3>
                <form onSubmit={handleSubmit}>
                    <div style={{marginTop: '10%', width:"100%" }}>
                        <div style={{marginTop:"2%"}}>
                            <label style={{marginLeft:"15%", fontSize: '1.5vw'}}>Username</label>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '1%' }}>
                            <input
                                style={{  borderRadius: '5px', background: 'white', width: '70%', height: '30px',color:"black",fontSize:"15px" }}
                                type="text"
                                name="username"
                                value={formState.username}
                                onChange={handleInputChange}
                            />
                        </div>
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
                            Sign Up
                        </button>
                    </div>
                </form>
                {message && <p className="message" style={{color:"red"}}>{message}</p>}
                <div>
                    <h3  style={{ textAlign: 'center', fontSize: '1vw', marginTop: '2%' }}>Already have an account? <Link to="/signin" style={{textDecoration:"underline"}}>Sign in</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

