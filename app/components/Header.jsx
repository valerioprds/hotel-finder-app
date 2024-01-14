"use client";

import React, { useState } from "react";
import styles from "./Header.module.css"; // Import the styles
import Image from "next/image";
import Link from "next/link";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@nextui-org/react";

// icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FlightIcon from "@mui/icons-material/Flight";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MenuIcon from "@mui/icons-material/Menu"; // Importa el icono de menú

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href="/">
					<Image
						src="/logo4.png"
						alt="Logo"
						width={100}
						height={50}
						layout="fixed"
					/>
				</Link>
			</div>

			<Button className={styles.menuButton} onClick={toggleMenu}>
				<MenuIcon />
			</Button>
			<nav
				className={`${styles.navBar} ${isMenuOpen ? styles.show : ""}`}
			>
				<Dropdown>
					<DropdownTrigger>
						<Button className={styles.dropdownTriggerButton}>
							Check Our Destinations <KeyboardArrowDownIcon />
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						className={styles.dropdownMenu}
						aria-label="Destinations"
					>
						<DropdownItem
							key="barcelona"
							className={styles.dropdownItem}
						>
							<Link href="/barcelona">Barcelona</Link>
						</DropdownItem>
						<DropdownItem
							key="madrid"
							className={styles.dropdownItem}
						>
							<Link href="/madrid">Madrid</Link>
						</DropdownItem>
						<DropdownItem
							key="torremolinos"
							className={styles.dropdownItem}
						>
							<Link href="/torremolinos">Torremolinos</Link>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>

				<Button className={styles.navButton}>
					{" "}
					<FlightIcon className={styles.iconStyle} />{" "}
					<Link href="/myTrip">My Trip</Link>
				</Button>
				<Button className={styles.navButton}>
					{" "}
					<LockOpenIcon className={styles.iconStyle} /> Login
				</Button>
			</nav>
		</header>
	);
};

export default Header;
