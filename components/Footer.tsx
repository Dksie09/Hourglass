import React from 'react'

function Footer() {
    return (
        <footer className=" text-black w-full bg-white">

            <div className="py-6 px-4 w-full">
                <p className="text-center  text-base">
                    &copy; {new Date().getFullYear()} ALTRD Bites. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer