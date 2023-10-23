"use client";
import Sidebar from "@/app/components/sidebar_admin/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import axios from "axios";
import useSWR from "swr";
import {Dialog} from "@headlessui/react";

const fetcher = (url: string, accessToken: string) => {
    return axios.get(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`, // Replace 'accessToken' with your actual access token
            'Content-Type': 'application/json', // You can specify other headers as needed
        },
    })
        .then(res => res.data);
};
const ProblemList = () => {
    const accessToken:any = sessionStorage.getItem('access_token')
    const { data, error } = useSWR('http://localhost:5000/report', (url) => fetcher(url, accessToken))
    const [loading, setLoading] = useState(false);
    const [editReport, setEditReport] = useState(null);
    let [isOpen, setIsOpen] = useState(true)
    const [formData, setFormData] = useState({});
    const [fixedBy, setFixedBy] = useState('');
    const deleteReport = async (id: string) => {
        setLoading(true);
        try {
            await axios.delete(`http://localhost:5000/report/${id}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                }
            });
            alert('ลบรายการแจ้งซ่อมเรียบร้อยแล้ว');
            window.location.reload();
        } catch (err) {
            alert('เกิดข้อผิดพลาด');
        } finally {
            setLoading(false);
        }
    }

    const openEditDialog = (report: any) => {
        setEditReport(report);
        setFormData({ id: report._id, title: report.title, department: report.department, status: report.status }); // Set initial data
        setIsOpen(true);
    }

    const profile = async () => {
        await axios.get('http://localhost:5000/auth/profile', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        }).then(res => {
            console.log(res.data);
            setFixedBy(res.data.username);
        }).catch(err => {
            console.log(err);
        })
    };
    profile()

    const saveEdit = async () => {
        await axios.patch(`http://localhost:5000/report/${formData.id}`, {
            status: formData.status,
            fixedBy: fixedBy
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        }).then(res => {
            alert('แก้ไขรายการแจ้งซ่อมเรียบร้อยแล้ว');
            window.location.reload();
        }).catch(err => {
            alert('เกิดข้อผิดพลาด');
        })
    }

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
                        {data?.map((item: any) => (
                            <tr className="hover:bg-gray-50" key={item._id}>
                                <th className="px-6 py-4 font-medium text-gray-900">{item._id}</th>
                                <td className="px-6 py-4">{item.title}</td>
                                <td className="px-6 py-4">{item.department}</td>
                                <td className="px-6 py-4">
                                    {   new Date(item.createdAt).toLocaleString('th-TH', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })
                                    }
                                </td>
                                <td className="px-6 py-4">
                                    {item.status === 'pending' ? (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                                          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                        </svg>
                                        รอการแก้ไข
                                    </span>
                                    ) : item.status === 'inprogress' ? (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                                    </svg>
                                        กำลังดำเนินการแก้ไข
                                    </span>
                                    ) : item.status === 'success' ? (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                        </svg>
                                        แก้ไขเสร็จสิ้น
                                    </span>
                                    ) : (
                                        <span>-</span>
                                    )
                                    }
                                </td>
                                <td className="px-6 py-4">{item.fixedBy}</td>
                                <td className="px-6 py-4">
                                    {   new Date(item.updatedAt).toLocaleString('th-TH', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })
                                    }
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-end gap-4">
                                        <button x-data="{ tooltip: 'Delete' }"
                                                onClick={() => deleteReport(item._id)}
                                                disabled={loading}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                        <button x-data="{ tooltip: 'Edite' }"
                                                onClick={() => openEditDialog(item)}
                                                disabled={loading}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {editReport && (
                    // Display an edit form when editReport is not null
                    <Dialog
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                        className="relative z-50"
                    >
                        {/* The backdrop, rendered as a fixed sibling to the panel container */}
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                        {/* Full-screen container to center the panel */}
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                            {/* The actual dialog panel  */}
                            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white w-[800px] p-5">
                                <Dialog.Title className={"border-b-2 pb-3 text-center text-xl"}>แก้ไขการรายงาน</Dialog.Title>
                                <Dialog.Description>Edit the report details:</Dialog.Description>
                                {/*<div>*/}
                                {/*    {JSON.stringify(formData)}*/}
                                {/*    <input*/}
                                {/*        type="text"*/}
                                {/*        placeholder="Title"*/}
                                {/*        value={formData.title}*/}
                                {/*        onChange={(e) => setFormData({ ...formData, title: e.target.value })}*/}
                                {/*        className={"border-2 border-black bg-gray-300 rounded mt-3"}*/}
                                {/*        disabled={true}*/}
                                {/*    />*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                {/*    <input*/}
                                {/*        type="text"*/}
                                {/*        placeholder="Department"*/}
                                {/*        value={formData.department}*/}
                                {/*        onChange={(e) => setFormData({ ...formData, department: e.target.value })}*/}
                                {/*        className={"border-2 border-black bg-gray-300 rounded mt-3"}*/}
                                {/*        disabled={true}*/}
                                {/*    />*/}
                                {/*</div>*/}
                                <div>
                                    <select
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                        className={"border-2 border-black bg-gray-300 rounded mt-3"}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="inprogress">In Progress</option>
                                        <option value="success">Success</option>
                                    </select>
                                </div>
                                <button onClick={saveEdit}>Save</button>
                                <button onClick={() => setIsOpen(false)}>Cancel</button>
                            </Dialog.Panel>
                        </div>
                    </Dialog>
                )}
            </main>
        </div>
    )
}

export default ProblemList;