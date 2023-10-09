import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <div className="border-2 border-t py-2 flex justify-center">
                <p className="text-slate-400">© 2023 Design and Coding By
                    <Link className="text-blue-400" href={"https://github.com/danunaise/"}> Zusture </Link>
                    All Rights Reserved.
                </p>
            </div>
        </>
    )
}
export default Footer