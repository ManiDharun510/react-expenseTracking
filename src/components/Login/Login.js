import orange from './Orange.png';
import {Link} from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login(){

        const navigate = useNavigate();

        const [input, setInput] = useState({
                email: "",
                password: ""
        });
        const onChangeHandler = (event)=>{
                let name= event.target.name;
                let value= event.target.value;
                setInput({...input, [name]: value})
                console.log(input);
                
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
                if(!checkingEmptyValidation(input.email) || !minLengthValidation(input.email)){
                        alert("email cannot be empty and minlength is 5");
                        return;
                      }
                      if(!checkingEmptyValidation(input.password) || !minLengthValidation(input.password)){
                        alert("password cannot be empty and minlength is 5");
                        return;
                      }
                axios.get(`http://localhost:3000/registration?email=${input.email}&password=${input.password}`).then((result)=>{
                if(result.data && result.data.length>0){
                        sessionStorage.setItem("email", input.email);
                        navigate("/Search");
                } 
                else{
                        alert("Email and password not matching");
                }
        }).catch((error)=>{
                console.log(error);
        });
        };



    return(
        <div>
                    <div className="container-fluid">
                <div className="hdr">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <div className="orangelogo">
                                        <nav>
                                                <a >
                                                        <img src={orange} alt=""/>
                                                </a>
                                        </nav>
                                </div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                                <li className="nav-item ">
                                                        <Link className="nav-link" to="/Search">Home <span
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
                                                <Link to="/signup"><button className="btn btn-outline-success su" type="button">Sign Up</button></Link>
                                                                
                                                <Link to="/login">        <button className="btn btn-outline-success lu" type="button">Log In
                                                                </button></Link>        
                                                </form>
                                        </nav>
                                </div>
                        </nav>
                </div>

        </div>
        <div className="container lgin">
            <h2>Log In</h2>
                <form>  
                        <div className="form-group">
                          <label for="exampleInputEmail1"></label>
                          <input type="email" name="email" className="form-control" onChange={onChangeHandler}/>
                          </div>
                        <div className="form-group">
                          <label for="exampleInputPassword1"></label>
                          <input type="password" name="password" className="form-control" onChange={onChangeHandler}/>
                        </div>
                        <button onClick={onSubmitHandler} type="submit" className="btn btn-primary">Log In</button>
                      </form>
        </div>
        </div>
    )
}
export default Login;