import Sidebar from "../components/Sidebar"

const TracePage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full">
                <div className="flex items-center pl-6 border-1 border-b">
                    <svg className="w-[28px] h-[28px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5h6M9 8h6m-6 3h6M4.996 5h.01m-.01 3h.01m-.01 3h.01M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
                    </svg>
                    <span className="text-2xl font-bold ml-3 my-2">รายการแจ้งซ่อม</span>
                </div>
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">ไอดี</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">อุปกรณ์</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">วันที่</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">สถานะ</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">โดย</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">วันที่แก้ไข</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                        <th className="px-6 py-4 font-medium text-gray-900">0001</th>
                        <td className="px-6 py-4">Computer</td>
                        <td className="px-6 py-4">10/10/66</td>
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                แก้ไขแล้ว
                            </span>
                        </td>
                        <td className="px-6 py-4">Helen Howard</td>
                        <td className="px-6 py-4">10/10/66</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <th className="px-6 py-4 font-medium text-gray-900">0002</th>
                        <td className="px-6 py-4">Router</td>
                        <td className="px-6 py-4">10/10/66</td>
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                                ยังไม่ได้รับการแก้ไข
                            </span>
                        </td>
                        <td className="px-6 py-4">-</td>
                        <td className="px-6 py-4">-</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <th className="px-6 py-4 font-medium text-gray-900">0003</th>
                        <td className="px-6 py-4">Monitor</td>
                        <td className="px-6 py-4">10/10/66</td>
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                                </svg>
                                กำลังดำเนินการแก้ไข
                            </span>
                        </td>
                        <td className="px-6 py-4">Helen Howard</td>
                        <td className="px-6 py-4">10/10/66</td>
                    </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default TracePage