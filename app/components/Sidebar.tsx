import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import LinkSidebar from './Link';
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/navigation"

type Props = {}
const fetcher = (url: string, accessToken: string) => {
    return axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`, // Replace 'accessToken' with your actual access token
            'Content-Type': 'application/json', // You can specify other headers as needed
        },
    })
        .then(res => res.data);
};
const Sidebar = (props: Props) => {
    const Navlink = [
        {
            name: "แจ้งซ่อม",
            path: "/report",
            icon: <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"/>
            </svg>
        },
        {
            name: "ติดตามสถานะ",
            path: "/trace",
            icon: <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"/>
            </svg>
        }
    ]

    const accessToken:any = sessionStorage.getItem('access_token')
    const { data, error } = useSWR('http://localhost:5000/auth/profile', (url) => fetcher(url, accessToken))

    const isLogin = () => {
        if (accessToken) {
            window.location.href = '/report'
        } else {
            window.location.href = '/'
        }
    }
    const logout = () => {
        sessionStorage.removeItem('access_token')
        window.location.href = '/'
    }

        return (
            <div>
                <aside className="flex flex-col w-64 z-20 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
                    <div className="text-center">
                        <h1 className="w-auto h-7 text-xl font-bold text-blue-500">ระบบแจ้งซ่อม</h1>
                        <small>
                            <span className="text-gray-500">สำหรับผู้ใช้งานทั่วไป</span>
                        </small>
                    </div>
                    <div className="flex flex-col items-center mt-6 -mx-2">
                        <Image className="object-cover w-24 h-24 mx-2 rounded-full" width={200} height={200} src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                        <h4 className="mx-2 mt-2 font-medium text-gray-800">{data?.firstname} {data?.lastname}</h4>
                        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{data?.email}</p>
                    </div>

                    <div className="flex flex-col justify-between flex-1 mt-6">
                        <nav className="flex-1 -mx-3 space-y-2">
                            <LinkSidebar NavLink={Navlink}/>
                            <button className={"flex items-center px-3 py-3 text-slate-900 " +
                                    "transition-colors duration-300 transform rounded-lg hover:bg-red-400 w-full hover:text-white"}
                                    onClick={logout}>
                                    <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
                                    </svg>
                                <span className="mx-2 text-sm font-medium">ออกจากระบบ</span>
                            </button>
                        </nav>
                    </div>
                </aside>
            </div>
        )
}

export default Sidebar