import orange from './Orange.png'
import './Addexp.css';
import {Link, Navigate} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function Addexp(){
        const navigate = useNavigate();

        const [getList,setList] = useState([]);

        const [getForm,setForm]=useState({
                eName:'',
                eCat:'',
                eAmount:'',
                ePaid:'',
                eDate:'' 
              });
        
        const checkingEmptyValidation=(value)=>{
                if(value){
                  return true;
                }
                else {
                  return false;
                }
              }
        
        const onChangeHandler=(event)=>{
                if(event.target.name === "available"){
                  setForm({...getForm,[event.target.name]:event.target.checked});
                }
                else{
                  setForm({...getForm,[event.target.name]:event.target.value});
                }
               
              }

        const getListAPI = ()=>{
                axios.get(`http://localhost:3000/book?email=${sessionStorage.getItem('email')}`).then((result)=>{
                    console.log(result.data);
                    setList(result.data);
                }).catch(()=>{
        
                })
            };
        useEffect(()=>{
                getListAPI()
            },[]);

        const onSubmitHandler=(event)=>{
                event.preventDefault();
                if(!checkingEmptyValidation(getForm.eName)){
                        alert("Title is mandatory");
                        return;
                      }
                if(!checkingEmptyValidation(getForm.eCat)){
                        alert("Category cannot be empty");
                        return;
                      }
                if(!checkingEmptyValidation(getForm.eAmount)){
                        alert("Expence Amount cannot be empty");
                        return;
                      }
                if(!checkingEmptyValidation(getForm.ePaid)){
                        alert("Payment cannot be empty");
                        return;
                      }
                if(!checkingEmptyValidation(getForm.eDate)){
                        alert("Date cannot be empty");
                        return;
                      }
                console.log(getForm);
                axios.post(`http://localhost:3000/book`,{...getForm,email:sessionStorage.getItem('email')}).then(()=>{
                        getListAPI();
                        navigate('/Search');
                }).catch(()=>{

                })
        }
        

    return(<div>
                <div className="container-fluid">
                <div className="hdr">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <div className="orangelogo">
                                        <nav>
                                                <a href="#">
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
                                                        <button onClick={()=> navigate("/signup")} className="btn btn-warning" type="button">Logout</button>
                                                </form>
                                        </nav>
                                </div>
                        </nav>
                </div>

        </div>
        <div className="container lgin">

            <form>
                <div className="form-group row">
                  <label for="etitle" className="col-sm-2 col-form-label">Expense Title:</label>
                  <div className="col-sm-10">
                    <input type="text" value={getForm.eName} name="eName" className="form-control" onChange={onChangeHandler}/>
                  </div>
                </div>
                
                <div className="form-group row">
                    <label for="selectcate" className="col-sm-2 col-form-label sele">Expense Category:</label>
                    <div>
                    <select name="eCat" onChange={onChangeHandler} className="custom-select edit">
                        <option selected>Choose...</option>
                        <option value="Business">Business</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Personal">Personal</option>
                        </select>
                      </div>
                </div>
                <div className="form-group row">
                        <label for="eamount" className="col-sm-2 col-form-label sele1">Expense Amount:</label>
                        <div className="col-sm-10">
                        <input type="number" value={getForm.eAmount} className="form-control" name="eAmount" onChange={onChangeHandler} />
                      </div>
                    </div>
                    <div className="form-group row">
                        <label for="selectpaid" className="col-sm-2 col-form-label sele">Paid By:</label>
                        <div>
                        <select name="ePaid" onChange={onChangeHandler} className="custom-select edit">
                            <option selected>Choose...</option>
                            <option value="Gpay">Gpay</option>
                            <option value="PayTm">PayTm</option>
                            <option value="Cash">Cash</option>
                            </select>
                          </div>
                        </div>
                          <div className="form-group row">
                                <label for="edate" className="col-sm-2 col-form-label">Expense Date:</label>
                                <div className="col-sm-10">
                                <input type="date" onChange={onChangeHandler} className="form-control" name="eDate"/>
                              </div>
                            </div>
                

                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" onClick={onSubmitHandler} className="btn btn-primary">Add Expense</button>
                  </div>
                </div>
              </form>
        </div>
    </div>)
}
export default Addexp;