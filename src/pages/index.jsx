import bannerimage from "@/assets/promotional1.png"
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Image from "next/image"
import ChairImg from "@/assets/Chair.png"
import ChairImg2 from "@/assets/image 2.png"
import ChairImg3 from "@/assets/image 3.png"
import ChairImg4 from "@/assets/image 4.png"
import LatestProduct from "@/components/latestProduct"
import axios from "axios"
import { useEffect, useState } from "react"


export default function Home({ users }) {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios.get("https://ecommerce-sagartmg2.vercel.app/api/products? per_pages=6")
      .then(res => {
        console.log(res.data.data[0].data)
        setproducts(res.data.data[0].data)
      })

  },[])

  return (
    <>

      <Header />
      <Banner />

      <div className='mt-32 container'>
        <h2 className='text-4 font-bold text-header text-center mb-12'>Featured Products</h2>
        <div className='flex flex-wrap justify-between gap-4 '>
          <div className="border shadow basis-[270px] flex-grow">
            <Image src={ChairImg} className='bg-[#F6F7FB] w-full object-contain aspect-square ' height={200} width={200} />
            <div className="text-center">
              <p className="text-secondary text-xl">Cantilever chair</p>
              <p className="text-header">code:Y9864</p>
              <p className="text-header">$45</p>
            </div>
          </div>
          <div className="border shadow basis-[270px] flex-grow">
            <Image src={ChairImg2} className='bg-[#F6F7FB] w-full object-contain aspect-square' height={200} width={200} />
            <div className="text-center">
              <p className="text-secondary text-xl">Cantilever chair</p>
              <p className="text-header">code:Y9864</p>
              <p className="text-header">$45</p>
            </div>
          </div>
          <div className="border shadow basis-[270px] flex-grow">
            <Image src={ChairImg3} className='bg-[#F6F7FB] w-full object-contain aspect-square' height={200} width={200} />
            <div className="text-center">
              <p className="text-secondary text-xl">Cantilever chair</p>
              <p className="text-header">code:Y9864</p>
              <p className="text-header">$45</p>
            </div>
          </div>
          <div className="border shadow basis-[270px] flex-grow">
            <Image src={ChairImg4} className='bg-[#F6F7FB] w-full object-contain aspect-square' height={200} width={200} />
            <div className="text-center">
              <p className="text-secondary text-xl">Cantilever chair</p>
              <p className="text-header">code:Y9864</p>
              <p className="text-header">$45</p>
            </div>
          </div>

        </div>
        
      </div>

      <div className='mt-32 container'>
      <h2 className='text-4 font-bold text-header text-center mb-12 '>Latest Product</h2>
      {products.length==0 &&<p>loading...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {
            products.map(product => {
              return <LatestProduct product={product} key={products._id}/>

            })
          }
        </div>
        </div>
    </>

  )

}

