import orange from './Orange.png'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './About.css';
function About(){
    const navigate = useNavigate();
    return(
        <div>
            <div class="container-fluid">
            <div class="hdr">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="orangelogo">
                        <nav>
                            <a href="#"><img src={orange} alt=""/></a>
                                        </nav>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                            <Link class="nav-link" to="/Search">Home </Link>
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
        <div class="about">
            <h1>About</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen 
                book. It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                 the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of 
                  Lorem Ipsum.</p>
            <h3>Team</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen 
                book. It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged.</p>
            <h3>History</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen 
                book. It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged.</p>


        </div>

        </div>
    )
}
export default About;