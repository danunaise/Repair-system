import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import LinkSidebar from './Link';

type Props = {}

const Sidebar = (props: Props) => {
    const Navlink = [
        {
            name: "หน้าแรก",
            path: "/dashboard",
            icon: <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
            </svg>
        },
        {
            name: "เพิ่มสมาชิก",
            path: "/addUser",
            icon: <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 8h6m-3 3V5m-6-.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
            </svg>
        },
        {
            name: "แก้ไขสมาชิก",
            path: "/editUser",
            icon: <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"/>
            </svg>
        },
        {
            name: "แก้ไขข้อมูลทั่วไป",
            path: "/edit",
            icon: <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
                    <path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z"/>
                    <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </g>
            </svg>
        },
        {
            name: "จัดการรายการปัญหา",
            path: "/trace",
            icon: <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"/>
            </svg>
        },
        {
            name: "ออกจากระบบ",
            path: "/home",
            icon: <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
            </svg>
        }
    ]
      return (
          <div>
              <aside className="flex flex-col w-64 z-20 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
                  <div className="text-center">
                      <h1 className="w-auto h-7 text-xl font-bold text-blue-500">ระบบแจ้งซ่อม</h1>
                      <small>
                          <span className="text-gray-500">สำหรับผู้ดูแลระบบ</span>
                      </small>
                  </div>
                  <div className="flex flex-col items-center mt-6 -mx-2">
                      <Image className="object-cover w-24 h-24 mx-2 rounded-full" width={200} height={200} src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                      <h4 className="mx-2 mt-2 font-medium text-gray-800">John Doe</h4>
                      <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">john@example.com</p>
                  </div>

                  <div className="flex flex-col justify-between flex-1 mt-6">
                      <nav className="flex-1 -mx-3 space-y-2">
                          <LinkSidebar NavLink={Navlink}/>
                      </nav>
                  </div>
              </aside>
          </div>
      )
}

export default Sidebar