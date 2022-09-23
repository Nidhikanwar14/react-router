import {Link, Outlet} from "react-router-dom";

const Main = () =>{
    return(
        <>
            <nav>
        <ul>
            <li>
            <Link to="/page1">Page1</Link>
            </li>
            <li>
                <Link to='/page2'>Page2</Link>
            </li>
            <li>
                <Link to='/page3'>Page3</Link>
            </li>

        </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Main;