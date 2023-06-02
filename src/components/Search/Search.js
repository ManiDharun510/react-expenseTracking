import orange from './Orange.png'
import {Link} from 'react-router-dom';
import './Search.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Search(){
    const navigate = useNavigate();
    const [getId,setId] = useState(-1);

    const[getEditFlag,setEditFlag] = useState(false);

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

    const getListAPI = ()=>{
        axios.get(`http://localhost:3000/book?email=${sessionStorage.getItem('email')}`).then((result)=>{
            console.log(result.data);
            setList(result.data);
        }).catch(()=>{

        })
    };

    const onDeleteHandler = (index)=>{
        axios.delete(`http://localhost:3000/book/${getList[index].id}`).then(()=>{
            getListAPI();
        }).catch(()=>{

        })
    }

    const onEditSubmitHandler = ()=>{
        axios.put(`http://localhost:3000/book/${getList[getId].id}`, {...getForm,email:getList[getId].email}).then(()=>{
            getListAPI();
        }).catch(()=>{

        })
        setEditFlag(false);
    clearingData();
    setId(-1);
    }

    const onExistingBindHandler=(index)=>{
        setId(index);
        setEditFlag(true);
        setForm({
            eName:getList[index].eName,
            eCat:getList[index].eCat,
            eAmount:getList[index].eAmount,
            ePaid:getList[index].ePaid,
            eDate:getList[index].eDate
        })
      }

    useEffect(()=>{
        getListAPI()
    },[]);
    
    const onChangeHandler=(event)=>{
        if(event.target.name === "available"){
          setForm({...getForm,[event.target.name]:event.target.checked});
        }
        else{
          setForm({...getForm,[event.target.name]:event.target.value});
        }
      }

      const clearingData=()=>{
        setForm({
            eName:'',
            eCat:'',
            eAmount:'',
            ePaid:'',
            eDate:'' 
        })
      }

    return(<div>
        <div className="container">  
        <div className="modal" id="myModal">
        <div className="modal-dialog">
        <div className="modal-content">
      
        
        <div className="modal-header">
          <h4 className="modal-title">Edit Expense</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body">
        <form>
                
                  <label >Expense Title:</label>
                
                    <input type="text" value={getForm.eName} name="eName" className="form-control" onChange={onChangeHandler}/>
                            
                    <label >Expense Category:</label>
                    <div>
                    <select name="eCat" value={getForm.eCat} onChange={onChangeHandler} className="form-control" >
                        <option selected>Choose...</option>
                        <option value="Business">Business</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Personal">Personal</option>
                        </select>
                      </div>
                
                
                        <label  >Expense Amount:</label>
                        <div >
                        <input type="number" className="form-control" value={getForm.eAmount}  name="eAmount" onChange={onChangeHandler} />
                     
                    </div>
                    
                        <label >Paid By:</label>
                        <div >
                        <select name="ePaid" value={getForm.ePaid} className="form-control" onChange={onChangeHandler} >
                            <option selected>Choose...</option>
                            <option value="Gpay">Gpay</option>
                            <option value="PayTm">PayTm</option>
                            <option value="Cash">Cash</option>
                            </select>
                         
                        </div>
                          
                                <label for="edate" >Expense Date:</label>
                                <div >
                                <input type="date" value={getForm.eDate} className="form-control" onChange={onChangeHandler}  name="eDate"/>
                              </div>

                              <div>
                                <button onClick={onEditSubmitHandler} type="submit" class="btn btn-outline-success">Edit</button>
                              </div>
                            
              </form>
        </div>
        
        
        <div className="modal-footer">
            
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
                <div className="container-fluid">
            <div className="hdr">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="orangelogo">
                        <nav>
                            <a href="#"><img src={orange} alt=""/></a>
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
                                <Link to="/add_expence"><button className="btn btn-warning" type="button">Add Expense</button></Link>
                            </form>
                        </nav>
                        <nav className="sulu">
                            <form className="form-inline">
                                <button onClick={()=>navigate("/login")} className="btn btn-success" type="button">Logout</button>
                            </form>
                        </nav>
                    </div>
                </nav>
            </div>
        </div>
        <div className="tabform">
            <h4>Search Expense:</h4>
            <form>
                <div className="form-group row">
                    <label for="edate" className="col-xl-2 col-form-label">Expense Date:</label>
                    <div className="col-xl-2">
                    <input type="date" className="form-control" id="edate"/>
                  </div>
                  <button className="btn btn-warning" type="button">Search</button>
               </div>
            </form>
        </div>
        <div className="about">
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Sl.No</th>
                    <th scope="col">Exp Name</th>                   
                    <th scope="col">Exp Category</th>
                    <th scope="col">Exp Amount</th>
                    <th scope="col">Paid By</th>
                    <th scope="col">Exp. Date</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {getList.map((obj,index)=>{
                            return ( <tr key={index}>
                              <th scope="row">{index+1}</th>
                              <td>{obj.eName}</td>
                              <td>{obj.eCat}</td>
                              <td>{obj.eAmount}</td>
                              <td>{obj.ePaid}</td>
                              <td>{obj.eDate}</td>
                              <td><button onClick={()=>onExistingBindHandler(index)} data-toggle="modal" data-target="#myModal" >Edit</button></td>
                              <td><button onClick={()=>onDeleteHandler(index)}>Delete</button></td>
                            </tr>)
                        })}
                  
                </tbody>
              </table>
        </div>
        
    </div>)
}
export default Search;