import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {useState} from "react";
import {HomePage} from "./pages/HomePage";
import {LoginPage} from "./pages/LoginPage";
import {AdminPage} from "./pages/AdminPage";

export const AppLayout =() =>{
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const LogOut = () => {
        navigate("/home");
        setUser(null);
    }


    return (
        <>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/blogpage" className="nav-link">BlogPage</Link></li>
                    {user && user.role === 'admin' && <li><Link to="/stats" className="nav-link">Stats</Link></li>}
                    {!user && <li><Link to="/login" className="nav-link">Login</Link></li>}
                    {user && <li><span onClick={LogOut} className="nav-link" style={{cursor: 'pointer'}}>Logout</span></li>}
                </ul>
            </nav>
            <Routes>
                <Route path="/login" element={<LoginPage onLogin={setUser}  />} />
                <Route path="/" element={<HomePage />}/>
                <Route path ="/admin" element = {<AdminPage />}>
                    <Route></Route>
                </Route>
            </Routes>

        </>
    )
}