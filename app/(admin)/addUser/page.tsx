"use client";
import React, { Fragment, useState } from 'react';
import Sidebar from "@/app/components/sidebar_admin/Sidebar";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";

const people = [
    { name: 'เลือกแผนก' },
    { name: 'แผนกการตลาด' },
    { name: 'แผนกขาย' },
    { name: 'แผนกบุคคล' },
    { name: 'แผนกบัญชี/การเงิน' },
    { name: 'แผนกไอที' },
]
const addUsersPage = () => {
    const [selected, setSelected] = useState(people[0])
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="w-full flex-grow">
                <div className="flex items-center justify-center border-1 border-b py-3">
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 8h6m-3 3V5m-6-.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
                    </svg>
                    <span className="text-2xl font-bold ml-3 my-2">เพิ่มสมาชิก</span>
                </div>
                <div className="flex items-center justify-center w-full mt-10 py-3">
                    <div className="card bg-white flex justify-center w-[800px] px-5 shadow-lg rounded-md">
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label htmlFor={"fname"} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">ชื่อ</label>
                                <input id={"fname"} name={"fname"}
                                       type={"text"} placeholder={"ชื่อ"} required
                                       className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                       border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                                <label htmlFor={"lname"} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">นามสกุล</label>
                                <input id={"lname"} name={"lname"}
                                       type={"text"} placeholder={"นามสกุล"} required
                                       className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                       border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                />
                                <Listbox value={selected} onChange={setSelected}>
                                    <Listbox.Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">แผนก</Listbox.Label>
                                    <div id={"department"} className="flex-1 relative mt-1 block">
                                        <Listbox.Button className="relative w-full cursor-default rounded bg-white py-1.5 pl-3 pr-10 text-left border-2 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{selected.name}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {people.map((person, personIdx) => (
                                                    <Listbox.Option
                                                        key={personIdx}
                                                        className={({ active }) =>
                                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                active ? 'bg-slate-100 text-slate-900' : 'text-gray-900'
                                                            }`
                                                        }
                                                        value={person}
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${
                                                                        selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                                >
                                                                    {person.name}
                                                                </span>
                                                                { selected ? (
                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                                <label htmlFor={"Username"} className="block uppercase tracking-wide text-gray-700 mt-3 text-xs font-bold mb-2">Username</label>
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
            </main>
        </div>
    )
}

export default addUsersPage;