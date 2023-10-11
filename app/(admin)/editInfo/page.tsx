import React from "react";
import Sidebar from "@/app/components/sidebar_admin/Sidebar";
const EditInfoPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="overflow-hidden w-full m-3 border border-slate-200
            rounded">
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label htmlFor={"Username"} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Username</label>
                            <input id={"Username"} name={"Username"}
                                   type={"text"} placeholder={"Username"} required
                                   className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                   border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                            />
                            <label htmlFor={"password"} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">password</label>
                            <input id={"password"} name={"password"}
                                   type={"text"} placeholder={"password"} required
                                   className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                   border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                            />
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                บันทึก
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditInfoPage;