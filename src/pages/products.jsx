import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import { AiOutlineOrderedList } from 'react-icons/ai'
import { BsFillGrid1X2Fill } from 'react-icons/Bs'
import axios from "axios"
export default function products({}) {
    return (
        <>
            <Header />


            <div className="py-24 bg-tint">
                <div className="container">
                    <p className="text-3xl text-header font-bold ">Shop Left Sidebar</p>
                    <p><Link href={'/'}>Home</Link> . <Link href={'/products'}>product</Link></p>
                    {/* <p> <Link href={'/products'}>product</Link></p> */}
                    {/* <p><Link herf={'/'}>Home</Link> </p> */}
                </div>
            </div>
            <div className="container py-24 flex flex-col md:flex-row justify-between items-center text-center gap-4">
                <div>
                    <p className="text-3xl font-semibold text-header">Ecommerce Acceries & Fashion Iteam</p>
                    <p>total-50</p>
                </div>
                <form className="flex gap-3">
                    <div className="flex justify-between  items-center">
                        <lebel>Per page:</lebel>

                        <select name="" id="">

                            <option value="">20</option>
                            <option value="">30</option>
                            <option value="">40</option>

                        </select>
                    </div>

                    <div className="flex justify-between  items-center">
                        <lebel>Sort By:</lebel>

                        <select name="" id="">

                            <option value="">name desc</option>
                            <option value="">price asc</option>
                            <option value="">name desc</option>
                        </select>
                    </div>
                    <div>
                        View:
                        <AiOutlineOrderedList className="inline ml-3" />
                        <BsFillGrid1X2Fill className="inline ml-3" />
                    </div>

                </form>
            </div>
            <div className="container md:grid grid-cols-4">
                <div>
                     filter...
                </div>
                <div className="bg-primary col-start-2 col-end-5">
                    {
                        products.map=(product=>{
                            return<div className="border p-3">
                                {product.name }
                                </div>
                        })
                    }

                </div>
            </div>




        </>
    )
}

export async function getServerSideProps() {
    let res = await axios.get("https://ecommerce-sagartmg2.vercel.app/api/products")
    return {
        props: {
            products: res.data.data[0].data
        },
    }
}