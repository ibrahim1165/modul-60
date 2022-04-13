import React from 'react';

const Footer = () => {
    const today =  new Date();
    const todayDate = (today.getFullYear(today))
    return (
        <footer className="text-center m-5 text-primary">
            <p><small>Copyright&copy; {todayDate}</small></p>
        </footer>
    );
};

export default Footer;