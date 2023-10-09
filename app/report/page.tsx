import Sidebar from "@/app/components/Sidebar";
const ReportPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-grow py-4">
                <div className="flex items-center pl-20 border-1 border-b">
                    <svg className="w-[32px] h-[32px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"/>
                    </svg>
                    <span className="text-2xl font-bold ml-3 my-2">แจ้งซ่อม</span>
                </div>
                <div className="px-20 w-[800px]">
                    <div className="flex flex-col">
                        <div className="w-full mt-3 flex items-center space-x-1.5">
                            <label htmlFor="room">ห้อง</label>
                            <input id="room" type="text" placeholder="หมายเลขห้อง" className="w-full border-2 py-1 px-2 rounded" />
                            <label htmlFor="floor">ชั้น</label>
                            <input id="floor" type="text" placeholder="ห้อง" className="w-full border-2 py-1 px-2 rounded" />
                        </div>
                        <label htmlFor="department" className="mt-3">แผนก</label>
                        <input id="department" type="text" className="border-2 py-1 px-2 rounded" />
                        <label htmlFor="type" className="mt-3">อุปกรณ์</label>
                        <input id="type" type="text" placeholder="ex computer, table" className="border-2 py-1 px-2 rounded" />
                        <label htmlFor="details" className="mt-3">รายละเอียด</label>
                        <textarea name="x" id="details" cols={30} rows={10} placeholder="อธิบายอาการที่เกิดปัญหา" className="border-2 rounded py-1 px-2"></textarea>
                        <label htmlFor="x" className="mt-3">รูปภาพ</label>
                        <input type="file" accept="image/png, image/jpeg" className="border-2 p-2" />
                        <button className="rounded bg-blue-400 text-white mt-3 py-1.5">แจ้งเรื่อง</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReportPage;