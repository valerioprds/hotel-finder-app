"use client";

import React, { useState } from "react";
import styles from "./Header.module.css"; // Import the styles
import Image from "next/image";

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
                        <a href="#" className={styles.dropdownItem}>
                            Catalonia
                        </a>
                        <a href="#" className={styles.dropdownItem}>
                            Basque Country
                        </a>
                        <a href="#" className={styles.dropdownItem}>
                            Canary Islands
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
