import Image from 'next/image'
import Link from 'next/link'
import Sidebar from "@/app/components/Sidebar";

export default function Home() {
  return (
      <div className="flex">
        <Sidebar />
        <main className="flex-grow py-4">
          <h1 className="text-2xl font-bold border-1 border-b pb-2 pl-4">หน้าแรก</h1>
          {/* เนื้อหาหน้าแรก */}
        </main>
      </div>
  )
}
