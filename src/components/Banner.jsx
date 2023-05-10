import Image from 'react'

import bannerimage from "@/assets/promotional1.png"


export default function   Banner() {
  return (
    <>
    <div className='py-48 bg-[url("../assets/promotional1.png")] bg-cover bg-no-reoeat'>

        <div className="container">
          <div className="w-1/2">

            <p className='text-secondary font-bold  mb-3'>Best Furniture For Your Castle....</p>
            <h1 className='text-[53px] font-extrabold mb-3'>New Furniture CollectionTrends in 2020</h1>
            <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.</p>
            <button className='bg-secondary text-white font-semibold py-3 px-6 mb-3'>shop Now
            </button >
          </div>
        </div>


      </div>
    </>

  )
  
}
