import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <h3>Error: 404</h3>
            <p>Could not find that page</p>
            <Link to="/">Go back to homepage</Link>
        </div>
     );
}
 
export default NotFound;