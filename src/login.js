import React,{useState} from 'react'
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './loginValidation';
import axios from 'axios';


function Login(){

    const [Values,setValues]=useState({
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
        setErrors(Validation(Values));
        
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8089/login',Values)
            .then(res =>{
               if(res.data === "Success"){
                navigate('/home');
               }
               else{
                alert("No Record Found");
               }
            })
            .catch(err => console.log(err))
        }
    }

    return(
        <div>
            <form action='/' onSubmit={handleSubmit} >
                <div className='login' id='log'>
                    <p className='head'>Login</p><br></br>
                        
                        <label>
                            <strong style={{fontSize:"large"}}> Email : </strong>
                        </label>&nbsp;
                        <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} /> <br></br>
                        
                            {errors.email && <span style={{color:'red',width:'5px',fontSize:'small'}}>{errors.email}</span>}       <br></br><br></br><br></br>
                        
                        <label>
                            <strong style={{fontSize:"large"}}> PassWord : </strong> 
                        </label>&nbsp;
                        <input type='password' placeholder='Enter PassWord ' name='password' onChange={handleInput} /><br></br>
                            {errors.password && <span style={{color:'red',width:'3px',fontSize:'small'}}>{errors.password}</span>}<br></br><br></br>
                        
                        <button  className='l' type='submit'>Login</button><br></br><br></br>
                        
                            <p>
                                <strong style={{fontSize:"large"}}> Or </strong>
                            </p> <br></br>
                    
                        <Link to="/signIn" className='btn1' style={{padding: '10px 68px',textDecoration:'none'}}>Register Now ! </Link>
                </div>
                
            </form>
        </div>
    )
}

export default Login;