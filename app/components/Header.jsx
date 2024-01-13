"use client";

import React, { useState } from "react";
import styles from "./Header.module.css"; // Import the styles
import Image from "next/image";
import Link from "next/link";


const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);

	return (
        <header className={styles.header}>
            <div className={styles.logo}>
                {/* Replace with your actual logo */}
                <Image
                    src="/egruppa travel.png" // Adjust the path as needed
                    alt="Logo"
                    className={styles.logoImage}
                    width={150}
                    height={150} // Set the height as needed
                    layout="fixed" // Can be 'fixed', 'responsive', 'intrinsic', or 'fill'
                />
            </div>
            <div className={styles.menu}>
                <button
                    onClick={toggleDropdown}
                    className={styles.dropdownButton}
                >
                    Check Our Destinations
                </button>
                {isOpen && (
                    <div className={styles.dropdownContent}>
                        {/* Dropdown menu items */}
                        <Link href="/barcelona" className={styles.dropdownItem}>
                            Barcelona
                        </Link>
                        <Link href="/barcelona" className={styles.dropdownItem}>
                            Madrid
                        </Link>
                        <a href="/barcelona" className={styles.dropdownItem}>
                            Valencia
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
