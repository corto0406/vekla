import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import notificationIcon from '../notification/notification.svg';
import profileIcon from '../profile/profile.png';
import Button from '../profile/Button';
import dropMenu from '../profile/dropMenu.svg';

const pageTitles = {
    '/': 'Dashboard',
    '/my-training': 'My Training',
    '/my-skills': 'My Skills',
    '/growth-plan': 'Growth Plan',
    '/knowledge-hub': 'Knowledge Hub',
};

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
    const title = pageTitles[currentPath] || 'Dashboard'; // Default to Dashboard if path is not found

    return (
        <header className="header">
            <div className="topic">{title}</div>
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
                            <div className="name-info">Sana Alex</div>
                            <div className="email-info">sana@gmail.com</div>
                        </div>
                        <a href="/profile">
                            <img src={dropMenu} alt="Drop Menu" className="dropMenu-picture" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
