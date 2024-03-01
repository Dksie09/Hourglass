import React from 'react';

function Cool() {
    const features = [
        {
            title: "Lorem ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sit aliquet enim senectus dui eros nullam porttitor nascetur tortor.",
            id: "1",
        },
        {
            title: "Lorem ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sit aliquet enim senectus dui eros nullam porttitor nascetur tortor.",
            id: "2",
        },
        {
            title: "Lorem ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sit aliquet enim senectus dui eros nullam porttitor nascetur tortor.",
            id: "3",
        },
        {
            title: "Lorem ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sit aliquet enim senectus dui eros nullam porttitor nascetur tortor.",
            id: "4",
        },]

    return (
        <div className='w-full mx-auto min-h-screen px-20 '>
            <div className='flex w-full gap-20 items-start'>

                <div className='w-full py-[50vh]'>
                    <ul className=' flex flex-col gap-40'>
                        {features.map((feature) =>
                            <div key={feature.id}>
                                <div className='flex flex-col items-center gap-4'>
                                    <h1 className='text-9xl font-bold'>{feature.title}</h1>
                                    <p className='text-lg'>{feature.desc}</p>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>

                <div className='w-full flex flex-col items-center'>
                    <div className='sticky top-0 flex justify-center'>
                        <div className="relative aspect-square rounded-2xl w-96 hidden md:flex [&:has(>_.active-card)]:bg-transparent">
                            <img src="./joint.png" className='object-cover absolute -top-64 scale-75 z-50' alt="Joint Image" />
                        </div>
                    </div>
                    <img src='./cig.png' className='object-cover mt-96 mr-20 scale-75 z-[-1]' alt="Cig Image" />
                </div>

            </div>
        </div>
    )


}


export default Cool;
