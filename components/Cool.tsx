import React from 'react';

function Cool() {
    const features = [
        {
            title: "What makes ALTRD BITES special?",
            desc: "ALTRD BITES are not just any snacks – they're delightful triangle-style granola-focused bite-sized treats crafted to bring joy to your snacking moments. With each bite, you'll experience a burst of happiness from our bold flavors and wholesome ingredients, perfectly designed to fuel your active lifestyle.",
            id: "1",
        },
        {
            title: "How do you select your ingredients?",
            desc: "At ALTRD BITES, we're dedicated to sourcing our ingredients from the happiest places on earth – trusted suppliers who share our commitment to quality and sustainability. From lush orchards to vibrant farms, every ingredient is carefully chosen to ensure that each bite of our products is a blissful indulgence.",
            id: "2",
        },
        {
            title: "Are ALTRD BITES suitable for dietary needs?",
            desc: "Absolutely! We believe that happiness knows no bounds, which is why we offer a delightful array of options to suit every dietary preference. Whether you're vegan, gluten-free, or simply seeking low-sugar delights, there's a perfect ALTRD BITES treat waiting to brighten your day.",
            id: "3",
        },
        {
            title: "How can I get my hands on ALTRD BITES?",
            desc: "Hooray! ALTRD BITES are available for purchase both online through our website and in select retailers near you. It's easy peasy – simply hop onto our website, pick your favorite flavors, and let the happiness begin! And if you prefer the thrill of in-store shopping, look out for our cheerful packaging in stores.",
            id: "4",
        }
    ]




    return (
        <div className='w-full mx-auto min-h-screen px-20 text-black'>
            <div className='flex w-full gap-20 items-start'>

                <div className='w-full py-20 md:py-32 lg:py-[50vh]'>
                    <ul className='flex flex-col gap-10 md:gap-20 lg:gap-40'>
                        {features.map((feature) =>
                            <li key={feature.id} className='flex flex-col items-center gap-4 md:gap-6'>
                                <h1 className='text-4xl md:text-6xl lg:text-6xl font-bold'>{feature.title}</h1>
                                <p className='text-base md:text-lg lg:text-xl'>{feature.desc}</p>
                            </li>
                        )}
                    </ul>
                </div>


                <div className='hidden md:flex w-full flex-col items-center mt-10'>
                    <div className='sticky top-0 justify-center'>
                        <div className="relative aspect-square rounded-2xl w-96 bg-transparent">
                            <img src="./ie.png" className='object-cover absolute scale-150 -top-10 z-50' alt="Joint Image" />
                        </div>
                    </div>
                    <img src='./bite1.png' className='object-cover mt-96 mr-[22] scale-[0.25] z-[-1]' alt="Cig Image" />
                    <img src='./bite2.png' className='object-cover -top-60 mr-[22] scale-[0.25] z-[-1]' alt="Cig Image" />
                </div>


            </div>
        </div>
    )


}


export default Cool;
