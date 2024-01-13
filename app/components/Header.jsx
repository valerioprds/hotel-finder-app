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

const Header = () => {
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
			<nav className={styles.navBar}>
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
				<Button className={styles.navButton}>My Trip</Button>
				<Button className={styles.navButton}>Login</Button>
			</nav>
		</header>
	);
};

export default Header;
