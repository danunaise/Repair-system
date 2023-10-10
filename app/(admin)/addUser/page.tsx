import React from 'react';
import Sidebar from "@/app/components/sidebar_admin/Sidebar";


const addUserPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-grow">
                <div className="flex items-center pl-20 border-1 border-b py-3">
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 8h6m-3 3V5m-6-.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
                    </svg>
                    <span className="text-2xl font-bold ml-3 my-2">เพิ่มสมาชิก</span>
                </div>
            </main>
        </div>
    )
}

export default addUserPage;