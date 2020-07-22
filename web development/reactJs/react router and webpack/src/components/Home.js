import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <ul>
                <li><Link to="/about" >About</Link></li>
            </ul>
            <h1>this is Home</h1>
        </div>
    )
}

export default Home;