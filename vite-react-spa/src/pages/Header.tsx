import { Outlet, Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
        <div>
            <p> HEADER </p>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <Outlet/>
        </div>
      </>
    )
  };

// We use Link to replace href and similar
// We use Outlet to show the contents of the different links, else we only see the Header component
export default Header;