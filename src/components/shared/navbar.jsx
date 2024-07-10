import React from 'react'
import { asset } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className="header-area-1 header-sticky">
                <span className="extra-box-border"></span>
                <div className="header-wrapper">
                    <div className="menu-bar">
                        <a href="#" className="menu-bar-btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="49"
                                height="15"
                                viewBox="0 0 49 15"
                                fill="#CCDEFF"
                            >
                                <line
                                    x1="0.249023"
                                    y1="1.41577"
                                    x2="48.6221"
                                    y2="1.41577"
                                    stroke="#CCDEFF"
                                    stroke-width="2"
                                ></line>
                                <line
                                    x1="0.249023"
                                    y1="13.9224"
                                    x2="48.6221"
                                    y2="13.9224"
                                    stroke="#CCDEFF"
                                    stroke-width="2"
                                ></line>
                            </svg>
                        </a>
                    </div>
                    <div className="logo">
                        <a href="index.html">
                            <img src={asset.logo_1} alt="VRE" />
                        </a>
                    </div>
                    <div className="main-menu main-menu-1">
                        <ul>
                            <li>
                                <Link
                                    to="/"
                                    className="font-size-1-18 transition-1"
                                >
                                    Home
                                    <span>
                                        <svg
                                            width="8"
                                            height="14"
                                            viewBox="0 0 8 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_9793)">
                                                <path
                                                    d="M3.52937 12.868C3.78979 13.2098 4.21271 13.2098 4.47312 12.868L7.80646 8.49298C8.06687 8.15118 8.06687 7.59611 7.80646 7.25431C7.54604 6.91251 7.12312 6.91251 6.86271 7.25431L4.66687 10.1391L4.66687 1.75001C4.66687 1.26603 4.36896 0.875012 4.00021 0.875012C3.63146 0.875012 3.33354 1.26603 3.33354 1.75001L3.33354 10.1391L1.13771 7.25704C0.87729 6.91525 0.454373 6.91525 0.193956 7.25704C-0.0664601 7.59884 -0.0664602 8.15392 0.193956 8.49571L3.52729 12.8707L3.52937 12.868Z"
                                                    fill="#CCDEFF"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_9793">
                                                    <rect
                                                        width="8"
                                                        height="14"
                                                        fill="white"
                                                        transform="translate(8 14) rotate(-180)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </Link>
                                <ul className="submenu submenu-1">
                                    <li>
                                        <Link
                                            href="/home-2"
                                            className="font-size-1-18"
                                        >
                                            Home Style 1
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="index-2.html"
                                            className="font-size-1-18"
                                        >
                                            Home Style 2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="index-3.html"
                                            className="font-size-1-18"
                                        >
                                            Home Style 3
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-size-1-18 transition-1"
                                >
                                    Pages
                                    <span>
                                        <svg
                                            width="8"
                                            height="14"
                                            viewBox="0 0 8 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_9793)">
                                                <path
                                                    d="M3.52937 12.868C3.78979 13.2098 4.21271 13.2098 4.47312 12.868L7.80646 8.49298C8.06687 8.15118 8.06687 7.59611 7.80646 7.25431C7.54604 6.91251 7.12312 6.91251 6.86271 7.25431L4.66687 10.1391L4.66687 1.75001C4.66687 1.26603 4.36896 0.875012 4.00021 0.875012C3.63146 0.875012 3.33354 1.26603 3.33354 1.75001L3.33354 10.1391L1.13771 7.25704C0.87729 6.91525 0.454373 6.91525 0.193956 7.25704C-0.0664601 7.59884 -0.0664602 8.15392 0.193956 8.49571L3.52729 12.8707L3.52937 12.868Z"
                                                    fill="#CCDEFF"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_979466">
                                                    <rect
                                                        width="8"
                                                        height="14"
                                                        fill="white"
                                                        transform="translate(8 14) rotate(-180)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </a>
                                <ul className="submenu submenu-1">
                                    <li>
                                        <a
                                            href="about.html"
                                            className="font-size-1-18"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="team.html"
                                            className="font-size-1-18"
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="team-details.html"
                                            className="font-size-1-18"
                                        >
                                            Team Details
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="price.html"
                                            className="font-size-1-18"
                                        >
                                            Price
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="faq.html"
                                            className="font-size-1-18"
                                        >
                                            Faq
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="404.html"
                                            className="font-size-1-18"
                                        >
                                            404
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-size-1-18 transition-1"
                                >
                                    Services
                                    <span>
                                        <svg
                                            width="8"
                                            height="14"
                                            viewBox="0 0 8 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_9793)">
                                                <path
                                                    d="M3.52937 12.868C3.78979 13.2098 4.21271 13.2098 4.47312 12.868L7.80646 8.49298C8.06687 8.15118 8.06687 7.59611 7.80646 7.25431C7.54604 6.91251 7.12312 6.91251 6.86271 7.25431L4.66687 10.1391L4.66687 1.75001C4.66687 1.26603 4.36896 0.875012 4.00021 0.875012C3.63146 0.875012 3.33354 1.26603 3.33354 1.75001L3.33354 10.1391L1.13771 7.25704C0.87729 6.91525 0.454373 6.91525 0.193956 7.25704C-0.0664601 7.59884 -0.0664602 8.15392 0.193956 8.49571L3.52729 12.8707L3.52937 12.868Z"
                                                    fill="#CCDEFF"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_9794776">
                                                    <rect
                                                        width="8"
                                                        height="14"
                                                        fill="white"
                                                        transform="translate(8 14) rotate(-180)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </a>
                                <ul className="submenu submenu-1">
                                    <li>
                                        <a
                                            href="services.html"
                                            className="font-size-1-18"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="services-details.html"
                                            className="font-size-1-18"
                                        >
                                            Services Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-size-1-18 transition-1"
                                >
                                    Blog
                                    <span>
                                        <svg
                                            width="8"
                                            height="14"
                                            viewBox="0 0 8 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_9793)">
                                                <path
                                                    d="M3.52937 12.868C3.78979 13.2098 4.21271 13.2098 4.47312 12.868L7.80646 8.49298C8.06687 8.15118 8.06687 7.59611 7.80646 7.25431C7.54604 6.91251 7.12312 6.91251 6.86271 7.25431L4.66687 10.1391L4.66687 1.75001C4.66687 1.26603 4.36896 0.875012 4.00021 0.875012C3.63146 0.875012 3.33354 1.26603 3.33354 1.75001L3.33354 10.1391L1.13771 7.25704C0.87729 6.91525 0.454373 6.91525 0.193956 7.25704C-0.0664601 7.59884 -0.0664602 8.15392 0.193956 8.49571L3.52729 12.8707L3.52937 12.868Z"
                                                    fill="#CCDEFF"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_979477">
                                                    <rect
                                                        width="8"
                                                        height="14"
                                                        fill="white"
                                                        transform="translate(8 14) rotate(-180)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </a>
                                <ul className="submenu submenu-1">
                                    <li>
                                        <a
                                            href="blog-grid.html"
                                            className="font-size-1-18"
                                        >
                                            Blog Grid
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="blog-standart.html"
                                            className="font-size-1-18"
                                        >
                                            Blog Standart
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="blog-details.html"
                                            className="font-size-1-18"
                                        >
                                            Blog Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="font-size-1-18 transition-1"
                                >
                                    Protfolio
                                    <span>
                                        <svg
                                            width="8"
                                            height="14"
                                            viewBox="0 0 8 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_9793)">
                                                <path
                                                    d="M3.52937 12.868C3.78979 13.2098 4.21271 13.2098 4.47312 12.868L7.80646 8.49298C8.06687 8.15118 8.06687 7.59611 7.80646 7.25431C7.54604 6.91251 7.12312 6.91251 6.86271 7.25431L4.66687 10.1391L4.66687 1.75001C4.66687 1.26603 4.36896 0.875012 4.00021 0.875012C3.63146 0.875012 3.33354 1.26603 3.33354 1.75001L3.33354 10.1391L1.13771 7.25704C0.87729 6.91525 0.454373 6.91525 0.193956 7.25704C-0.0664601 7.59884 -0.0664602 8.15392 0.193956 8.49571L3.52729 12.8707L3.52937 12.868Z"
                                                    fill="#CCDEFF"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_9795">
                                                    <rect
                                                        width="8"
                                                        height="14"
                                                        fill="white"
                                                        transform="translate(8 14) rotate(-180)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </a>
                                <ul className="submenu submenu-1">
                                    <li>
                                        <a
                                            href="project-grid.html"
                                            className="font-size-1-18"
                                        >
                                            Portfolio Grid
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="project-details.html"
                                            className="font-size-1-18"
                                        >
                                            Portfolio Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="contact.html"
                                    className="font-size-1-18 transition-1"
                                >
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="get-in-touch">
                        <a href="#" className="header-search-bar">
                            <span>
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.375 12.1875C24.375 14.877 23.502 17.3613 22.0312 19.377L29.4492 26.8008C30.1816 27.5332 30.1816 28.7227 29.4492 29.4551C28.7168 30.1875 27.5273 30.1875 26.7949 29.4551L19.377 22.0312C17.3613 23.5078 14.877 24.375 12.1875 24.375C5.45508 24.375 0 18.9199 0 12.1875C0 5.45508 5.45508 0 12.1875 0C18.9199 0 24.375 5.45508 24.375 12.1875ZM12.1875 20.625C13.2955 20.625 14.3927 20.4068 15.4164 19.9827C16.4401 19.5587 17.3702 18.9372 18.1537 18.1537C18.9372 17.3702 19.5587 16.4401 19.9827 15.4164C20.4068 14.3927 20.625 13.2955 20.625 12.1875C20.625 11.0795 20.4068 9.98229 19.9827 8.95861C19.5587 7.93492 18.9372 7.00478 18.1537 6.22129C17.3702 5.43779 16.4401 4.81629 15.4164 4.39227C14.3927 3.96824 13.2955 3.75 12.1875 3.75C11.0795 3.75 9.98229 3.96824 8.95861 4.39227C7.93492 4.81629 7.00478 5.43779 6.22129 6.22129C5.43779 7.00478 4.81629 7.93492 4.39227 8.95861C3.96824 9.98229 3.75 11.0795 3.75 12.1875C3.75 13.2955 3.96824 14.3927 4.39227 15.4164C4.81629 16.4401 5.43779 17.3702 6.22129 18.1537C7.00478 18.9372 7.93492 19.5587 8.95861 19.9827C9.98229 20.4068 11.0795 20.625 12.1875 20.625Z"
                                        fill="#CCDEFF"
                                    />
                                </svg>
                            </span>
                        </a>
                        <a href="#" className="font-size-1-20 transition-1">
                            +8 (123) 985 789
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
