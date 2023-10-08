import Sidebar from "@/app/components/Sidebar";

const ReportPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-grow py-4">
                <h1 className="text-2xl font-bold border-1 border-b pb-2 pl-4">แจ้งซ่อม</h1>
                {/* เนื้อหาหน้าแรก */}
            </main>
        </div>
    );
};

export default ReportPage;