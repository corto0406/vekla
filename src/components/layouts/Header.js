import React from 'react';
import './Header.css';
import notification from '../notification/notification.svg';
import profile from '../profile/profile.png';
import Button from '../profile/Button';

function Header() {
    return (
        <header className="header">
            <div className="topic">Dashboard</div>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <a href="/notification">
                            <img src={notification} alt="Notification" className="notification-picture" />
                        </a>
                        <a href="/profile">
                            <img src={profile} alt="Profile" className="profile-picture" />
                        </a>
                        <Button User="User" />
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;