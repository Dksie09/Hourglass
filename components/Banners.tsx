"use client";
import React from 'react'
import { motion } from "framer-motion"

function Banners() {
    return (
        <div className='w-full z-50 '>
            <motion.div
                className="flex w-full flex-row items-center p-2 h-14 bg-white text-black font-black uppercase overflow-hidden whitespace-nowrap overflow-ellipsis"
                style={{ rotate: '-5deg' }}
            >
                Volutpat sit aliquet enim senectus dui eros nullam porttitor nascetur tortor. Pretium cursus condimentum venenatis suscipit praesent aliquam dictumst. Molestie scelerisque pretium vulputate letius natoque pulvinar tempus pede.
            </motion.div>
            <motion.div
                className="flex w-full flex-row items-center p-2 h-14 bg-[#FFB11E] text-black font-black uppercase overflow-hidden whitespace-nowrap overflow-ellipsis"
                style={{ rotate: '5deg' }}
            >
                Volutpat sit aliquet enim senectus dui eros nullam porttitor nascetur tortor. Pretium cursus condimentum venenatis suscipit praesent aliquam dictumst. Molestie scelerisque pretium vulputate letius natoque pulvinar tempus pede.
            </motion.div>
        </div>

    )
}

export default Banners