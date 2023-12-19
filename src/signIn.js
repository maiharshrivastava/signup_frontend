import React,{useState} from 'react'
import './signIn.css';
import { Link, useNavigate } from 'react-router-dom';
import signinValidation from './signinValidation';
import axios from 'axios';

function SignIn(){
    const [Values,setValues]=useState({
        name:'',
        email:'',
        password:''
    });

    const navigate = useNavigate();
    
    const [errors,setErrors]=useState({});
    
    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    };

    const handleSubmit =(event)=>{
        event.preventDefault();
        setErrors(signinValidation(Values));
        
        if(errors.name==="" && errors.email==="" && errors.password===""){
            axios.post('http://localhost:8089/signIn',Values)
            .then(res =>{
                navigate('/');
            })
            .catch(err => console.log(err))
        }
    }

    return(
        <div>
            <form action='/' onSubmit={handleSubmit}>
                <div className='signIn'  >
                    <p className='head'>Sign Up</p><br></br>
                        
                        <label>
                            <strong style={{fontSize:"large"}}> Name : </strong>
                        </label>&nbsp;
                        
                        <input type='text ' placeholder='Enter Your Name...' name='name' onChange={handleInput} /><br></br>
                            {errors.name && <span style={{color:'red',width:'5px',fontSize:'small'}}>{errors.name}</span>}<br></br><br></br>
                        
                        <label>
                            <strong style={{fontSize:"large"}}> Email : </strong>
                        </label>&nbsp;
                        
                        <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} /><br></br>
                            {errors.email && <span style={{color:'red',width:'5px',fontSize:'small'}}>{errors.email}</span>}  <br></br><br></br>

                        <label>
                            <strong style={{fontSize:"large"}}> PassWord :</strong>
                        </label>&nbsp;
                        
                        <input type='password' placeholder='Enter PassWord' name='password' onChange={handleInput} /><br></br>
                            {errors.password && <span style={{color:'red',width:'5px',fontSize:'small'}}>{errors.password}</span>} <br></br><br></br>

                        
                        <button className='l' type='submit' >Create Account</button> <br></br><br></br>
                        
                        <p>
                            <strong style={{fontSize:"large"}}> Back To </strong>
                        </p> <br></br><br></br>

                        <Link to='/' className='btn1' style={{padding: '10px 110px',textDecoration:'none'}}>Login</Link>
                </div>   
            </form>
        </div>
    )
}

export default SignIn;