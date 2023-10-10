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
                              <div className="flex-col">
                                  <h1 className="text-center text-2xl">
                                      <svg className="w-6 h-6 text-gray-800 inline-block mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                                      </svg>
                                      เข้าสู่ระบบ
                                  </h1>
                                  <label htmlFor="username" className="block mt-3 mb-1 text-lg">Username</label>
                                  <input id="username" placeholder="Username" type="text" required
                                         className="block border px-2 py-1.5 w-full rounded-md" />
                                  <label htmlFor="password" className="block mt-3 mb-1 text-lg">password</label>
                                  <input id="password" placeholder="password" type="password" required
                                         className="block border px-2 py-1.5 w-full rounded-md" />
                                  <button className="bg-blue-400 text-white rounded-md w-full py-1.5 my-5">เข้าสู่ระบบ</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </main>
      </div>
  )
}
