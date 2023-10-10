"use client";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Sidebar from "@/app/components/Sidebar";

const people = [
    { name: 'เลือกแผนก' },
    { name: 'แผนกการตลาด' },
    { name: 'แผนกขาย' },
    { name: 'แผนกบุคคล' },
    { name: 'แผนกบัญชี/การเงิน' },
    { name: 'แผนกไอที' },
]
const ReportPage = () => {
    const [selected, setSelected] = useState(people[0])
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-grow">
                <div className="flex items-center pl-20 border-1 border-b py-3">
                    <svg className="w-[32px] h-[32px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"/>
                    </svg>
                    <span className="text-2xl font-bold ml-3 my-2">แจ้งซ่อม</span>
                </div>
                <div className="px-20 w-[800px]">
                    <div>
                        <form className="flex flex-col">
                            <div className="mt-3 flex items-center space-x-1.5">
                                <label htmlFor="room" className="mr-3">ห้อง</label>
                                <input id="room" type="text" placeholder="หมายเลขห้อง" required
                                       className="flex-1 border-2 py-1 px-2 rounded"
                                />
                                <label htmlFor="floor" className="pl-8 w-[65px]">ชั้น</label>
                                <input id="floor" type="number" placeholder="ห้อง" required
                                       className="flex-1 border-2 py-1 px-2 rounded" />
                            </div>
                            <div className="w-full mt-3 flex items-center space-x-1.5">
                                <label htmlFor="department">แผนก</label>
                                {/*<input id="department" type="text"*/}
                                {/*       className="flex-1 border-2 py-1 px-2 rounded"*/}
                                {/*/>*/}
                                <Listbox value={selected} onChange={setSelected}>
                                    <div className="flex-1 relative mt-1">
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
                                <label htmlFor="type" className="px-2">อุปกรณ์</label>
                                <input id="type" type="text" placeholder="ex computer, table"
                                       className="flex-1 border-2 py-1 px-2 rounded"
                                />
                            </div>
                            <label htmlFor="details" className="mt-3 mb-1">รายละเอียด</label>
                                <textarea name="x" id="details" cols={30} rows={10} placeholder="อธิบายอาการที่เกิดปัญหา" className="border-2 rounded py-1 px-2"></textarea>
                            <label htmlFor="images" className="mt-3 mb-1">รูปภาพ</label>
                                <input type="file" id="images" accept="image/png, image/jpeg" className="border-2 p-2" disabled={true} />
                            <button className="rounded bg-blue-400 text-white mt-3 py-1.5">แจ้งเรื่อง</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReportPage;