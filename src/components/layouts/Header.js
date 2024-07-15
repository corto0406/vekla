import React from 'react';
import './Header.css';
import notificationIcon from '../notification/notification.svg';
import profileIcon from '../profile/profile.png';
import Button from '../profile/Button'; // Adjust path as needed

function Header() {
    return (
        <header className="header">
            <div className="topic">Dashboard</div>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <a href="/notification">
                            <img src={notificationIcon} alt="Notification" className="notification-picture" />
                        </a>
                        <a href="/profile">
                            <img src={profileIcon} alt="Profile" className="profile-picture" />
                        </a>
                        <div className="button-container">
                            <Button User="User" />
                            <div className="button-info">Sana Alex</div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
