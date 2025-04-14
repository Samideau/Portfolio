import React from 'react'

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className=" text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Samuel</h1>
                <p className=" text-[#ADB7BE] text-lg lg:text-xl">
                Nobis harum quia eveniet. 
                Sit accusamus perferendis aut alias est sit. 
                Doloremque et explicabo rerum repellendus hic ea. 
                Enim atque ea officiis quia voluptatum consequuntur temporibus harum. 
                Fuga a quisquam accusamus enim et.
                </p>
            </div>
            <div className="col-span-5"></div>
        </div>
    </section>
  )
}

export default HeroSection