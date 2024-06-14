import React from 'react';

const Home = () => {
    const googleLogin = () => {
        window.open('http://localhost:5000/auth/google', '_self');
    };

    return (
        <div className="m-5">
            <h1 className="text-5xl">Welcome to the Feedback Platform</h1>
            <button className="border border-black p-1 px-2 my-5 rounded"onClick={googleLogin}>Login with Google</button>
        </div>
    );
};

export default Home;
