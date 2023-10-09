import Image from 'next/image'
import Link from 'next/link'
import Sidebar from "@/app/components/Sidebar";

export default function Home() {
  return (
      <div className="flex h-screen">
          <main className="flex-grow flex items-center justify-center">
              <div>
                  <div className="flex items-center">
                      <div className="card bg-white w-[350px] px-5 shadow-lg rounded-md">
                          <form action="">
                              <div className="flex-col space-y-2 pb-3">
                                  <h1 className="text-center text-2xl">เข้าสู่ระบบ</h1>
                                  <label htmlFor="username" className="text-lg">Username</label>
                                  <input id="username" type="text" className="block border py-1 w-full rounded-md" />
                                  <label htmlFor="password" className="text-lg">password</label>
                                  <input id="password" type="text" className="block border py-1 w-full rounded-md" />
                                  <button className="bg-blue-400 text-white rounded-md w-full py-1.5 mt-3">เข้าสู่ระบบ</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </main>
      </div>
  )
}
