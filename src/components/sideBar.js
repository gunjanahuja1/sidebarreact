import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCog } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you need
import { FaCircleQuestion, FaPhone } from "react-icons/fa6";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function SideBar() {
    return (
        <div>
            <ul className="side-menu">
                <li className='list'>
                    <a href="#">
                        <FontAwesomeIcon icon={faCode} />
                        <span className="menu-text">Superguide</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="#">
                        <FontAwesomeIcon icon={faCog} />
                        <span className="menu-text">Installation and Dependencies</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="#">
                        <FaCircleQuestion />
                        <span className="menu-text">Help</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="#">
                        <FaPhone />
                        <span className="menu-text">Contact Us</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
