import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <h1>MORC Trails Map</h1>
            <nav>
                <ul>
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/map">Map</Link></li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;