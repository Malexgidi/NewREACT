import {Link} from 'react-router-dom'




function Home() {
    return (
        <div>
            <h1>This is the home page</h1>
            <Link to="login">Click to view our about page</Link>
            <Link to="signup">Click to view our signup page</Link>
            
        </div>
    )
}

export default Home;
