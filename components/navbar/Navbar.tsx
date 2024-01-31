"use client";

import { SafeUser } from "@/type";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Container from "../Container";
import SearchBar from "./Search";
import MobileToggle from "../MobileToggle";
import { data } from "../user/data";

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar = ({
    currentUser
}: NavbarProps) => {


    const emails = data.filter((item) => item.email === item.email);
    const organizations = data.filter((item) => item.organization === item.organization);
    const usernames = data.filter((item) => item.username === item.username);
    const contacts = data.filter((item) => item.contact === item.contact);
    const dates = data.filter((item) => item.date === item.date);


    return (
        <nav className="fixed w-full bg-white shadow-sm z-50">
            <div className="py-3 border-b-[1px]">
                <Container>
                    <div className="flex flex-grow items-center justify-between gap-3 md:gap-0">
                        <div className="flex items-center gap-2">
                            <MobileToggle />
                            <Logo />
                        </div>
                        <SearchBar
                            data={[
                                {
                                    label: "Email",
                                    type: "email",
                                    data: emails?.map((email) => ({
                                        id: email.id,
                                        name: email.email,
                                    }))
                                },
                                {
                                    label: "Organization",
                                    type: "organization",
                                    data: organizations?.map((organization) => ({
                                        id: organization.id,
                                        name: organization.organization,
                                    }))
                                },
                                {
                                    label: "Username",
                                    type: "username",
                                    data: usernames?.map((username) => ({
                                        id: username.id,
                                        name: username.username,
                                    }))
                                },
                                {
                                    label: "Contact",
                                    type: "contact",
                                    data: contacts?.map((contact) => ({
                                        id: contact.id,
                                        name: contact.contact,
                                    }))
                                },
                                {
                                    label: "Date",
                                    type: "date",
                                    data: dates?.map((date) => ({
                                        id: date.id,
                                        name: date.date,
                                    }))
                                },
                            ]}

                        />
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>
        </nav>
    )
}

export default Navbar