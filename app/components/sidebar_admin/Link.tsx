"use client";
import React from "react"
import Link from 'next/link';
import { usePathname } from 'next/navigation'

interface Props {
    NavLink: {
        name: string;
        path: string;
        icon: React.ReactNode;
    }[];
}
const LinkSidebar: React.FC<Props> = ({ NavLink }) => {
    const pathname = usePathname();
    return (
        <>
            {NavLink.map((item, index) => (
                <Link key={item.path}
                      href={item.path}
                      className={`flex items-center px-3 py-3 text-slate-900 transition-colors 
                      duration-300 transform rounded-lg ${
                            pathname === item.path ? "bg-blue-50" : "hover:bg-gray-100"
                      }`}>
                    {item.icon}
                    <span className="mx-2 text-sm font-medium">{item.name}</span>
                </Link>
            ))}
        </>
    )
}

export default LinkSidebar;