import React from 'react';
import logo from './quiz.png'

const Header = () => {
    return (
        <div className='d-lg-flex p-5 justify-content-center bg-light'>
            <img style={{height: '250px'}} className='w-lg-25 mx-auto' src={logo} alt="" />
            <div className='w-50 ms-lg-5 mx-auto'>
                <h1 className='fw-bold'>Grow Your Knowledge</h1>
                <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.</p>
            </div>
        </div>
    );
};

export default Header;