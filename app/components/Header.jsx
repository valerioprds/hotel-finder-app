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

const Header = () => {
	return (
		<header className="flex justify-between items-center p-2.5 bg-[#003b95] w-full">
			<div className="flex-shrink-0">
				<Image
					src="/egruppa travel.png"
					alt="Logo"
					width={150}
					height={120}
					layout="fixed"
				/>
			</div>
			<Dropdown>
				<DropdownTrigger>
					<Button variant="bordered" color="primary">
						Check Our Destinations
					</Button>
				</DropdownTrigger>
				<DropdownMenu aria-label="Destinations">
					<DropdownItem key="barcelona">
						<a href="/barcelona">Barcelona</a>
					</DropdownItem>
					<DropdownItem key="madrid">
						<a href="/madrid">Madrid</a>
					</DropdownItem>
					<DropdownItem key="torremolinos">
						<a href="/torremolinos">Torremolinos</a>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</header>
	);
};

export default Header;
