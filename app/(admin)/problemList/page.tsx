import Sidebar from "@/app/components/sidebar_admin/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProblemList = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="overflow-auto w-full m-3 border border-slate-200 rounded">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">ไอดี</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">อุปกรณ์</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">แผนก</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">วันที่</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">สถานะ</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">แก้ไขโดย</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">วันที่แก้ไข</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        <tr className="hover:bg-gray-50">
                            <th className="px-6 py-4 font-medium text-gray-900">0001</th>
                            <td className="px-6 py-4">Computer</td>
                            <td className="px-6 py-4">แผนกการตลาด</td>
                            <td className="px-6 py-4">10/10/66</td>
                            <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                        แก้ไขแล้ว
                                    </span>
                            </td>
                            <td className="px-6 py-4">mechanic</td>
                            <td className="px-6 py-4">10/10/66</td>
                            <td className="px-6 py-4">
                                <div className="flex justify-end gap-4">
                                    <Link x-data="{ tooltip: 'Delete' }" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </Link>
                                    <Link x-data="{ tooltip: 'Edite' }" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                        </svg>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default ProblemList;