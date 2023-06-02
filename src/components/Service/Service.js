import orange from './Orange.png'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Service.css';
function Service(){
    const navigate = useNavigate();
    return(<div>
        <div class="container-fluid">
            <div class="hdr">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div class="orangelogo">
                        <nav>
                            <a href="#"><img src={orange} alt=""/></a>
                                        </nav>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                            <Link class="nav-link" to="/Search">Home <span
                                                                        class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link " to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/service">Services</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <nav class="sulu">
                            <form class="form-inline">
                            <Link to="/add_expence"><button class="btn btn-warning" type="button">Add Expense</button></Link>
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
        <div class="container mgn">
            <div class="row">
                <div class="col-xl-3">
                <h3>CRM & Marketing</h3>
                <hr/>
                <ul>
                    <li><a href="#">Pricing Software</a></li>
                    <li><a href="#">Salesforce CRM Document Generation Software</a></li>
                    <li><a href="#">Local SEO Software</a></li>
                    <li><a href="#">Creative Management Platforms</a></li>
                    <li><a href="#">Conversation Intelligence Software</a></li>
                </ul>
                </div>
                
                
                    <div class="col-xl-3">
                <h3>Cloud Computing</h3>
                <hr/>
                <ul>
                    <li><a href="#">Relational Databases</a></li>
                    <li><a href="#">Continuous Delivery Software</a></li>
                    <li><a href="#">Mobile Development Platforms</a></li>
                    <li><a href="#">Mobile Application Management Software</a></li>
                    <li><a href="#">IT Asset Management Software</a></li>
                </ul>
                </div>
                
                
                    <div class="col-xl-3">
                <h3>ERP & Commerce</h3>
                <hr/>
                <ul>
                    <li><a href="#">Payment Gateways</a></li>
                    <li><a href="#">Accounts Payable Automation Software</a></li>
                    <li><a href="#">Subscription Revenue Management Software</a></li>
                    <li><a href="#">Contact Center Knowledge Base Software</a></li>
                    <li><a href="#">Discrete ERP Software</a></li>
                </ul>
                </div>
                
                
                    <div class="col-xl-3">
                <h3>HR & Office</h3>
                <hr/>
                <ul>
                    <li><a href="#">Email Software</a></li>
                    <li><a href="#">Screen and Video Capture Software</a></li>
                    <li><a href="#">Emergency Notification Software</a></li>
                    <li><a href="#">HR Analytics Software</a></li>
                    <li><a href="#">OCR Software</a></li>
                </ul>
            </div>
            </div>
        </div>
    </div>)
}
export default Service;