import orange from '../image/Orange.png';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './Signup.css';
import { useState } from 'react';
import axios from 'axios';

function Signup(){
        const navigate = useNavigate();

        const [input, setInput] = useState({
                name: "",
                email: "",
                password: ""
        });

        const onChangeHandler = (event)=>{
                let name= event.target.name;
                let value= event.target.value;
                setInput({...input, [name]: value})
        };

        const checkingEmptyValidation=(value)=>{
                if(value){
                  return true;
                }
                else {
                  return false;
                }
              }
            
              const minLengthValidation=(value)=>{
                if(value.length>5){
                  return true;
                }
                else {
                  return false;
                }
              }

        const onSubmitHandler = (event)=>{
                event.preventDefault();
                if(!checkingEmptyValidation(input.firstName) || !minLengthValidation(input.firstName)){
                        alert("First Name cannot be empty and minlength is 5");
                        return;
                      }
                if(!checkingEmptyValidation(input.lastName) || !minLengthValidation(input.lastName)){
                        alert("Last Name cannot be empty and minlength is 5");
                        return;
                      }
                if(!checkingEmptyValidation(input.email) || !minLengthValidation(input.email)){
                        alert("Email cannot be empty and minlength is 5");
                        return;
                      }
                if(!checkingEmptyValidation(input.password) || !minLengthValidation(input.password)){
                        alert("password cannot be empty and minlength is 5");
                        return;
                      }
                axios.post('http://localhost:3000/registration', input).then((value)=>{
                console.log(value.data);
                clearingData();
                navigate('/login');
        }).catch((error)=>{
                console.log(error);
        });
        };

        const clearingData = ()=>{
                
        };
        





    return(<div>
        <div className="container-fluid">
                <div className="hdr">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <div className="orangelogo">
                                        <nav>
                                                <a href="#">
                                                        <img src={orange} alt="Orange Logo"/>
                                                </a>
                                        </nav>
                                </div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                                <li className="nav-item ">
                                                        <Link className="nav-link" to="/login">Home <span
                                                                        className="sr-only">(current)</span></Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link className="nav-link " to="/about">About</Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link className="nav-link" to="/service">Services</Link>
                                                </li>
                                                <li className="nav-item">
                                                        <a className="nav-link" href="#">Contact</a>
                                                </li>
                                        </ul>
                                        <nav className="sulu">
                                                <form className="form-inline">
                                                        <Link to="/signup"><button className="btn btn-outline-success su" type="button">Sign Up
                                                                </button></Link>
                                                                <Link to="/login"><button className="btn btn-outline-success lu" type="button">Log In
                                                                </button></Link>        
                                                </form>
                                        </nav>
                                </div>
                        </nav>
                </div>

        </div>
        <div className="container lgin">
                <h2>Sign Up</h2>
                <form>
                        <div className="form-group">
                                <label for="fName">First Name</label>
                                <input type="text" className="form-control" name="firstName" onChange={onChangeHandler}/>  
                              </div>
                        <div className="form-group">
                                <label for="lName">Last Name</label>
                                <input type="text" className="form-control" name="lastName" onChange={onChangeHandler}/>
                              </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" name="email" onChange={onChangeHandler}/>
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" name="password" onChange={onChangeHandler}/>
                        </div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                          <label className="form-check-label" for="exampleCheck1">I agree the Terms and Conditions</label>
                        </div>
                        <button type="submit" onClick={onSubmitHandler} className="btn btn-primary">Sign Up</button>
                      </form>
        </div>
    </div>)
}

export default Signup;