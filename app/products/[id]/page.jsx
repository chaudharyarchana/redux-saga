"use client"

import ProductCard from "@/app/ui/product/ProductCard";
// import { useSearchParams } from 'next/navigation'

const Page = ({params}) => {
  // const searchParams = useSearchParams()
  // const search = searchParams.get('id')
  return <div>
    <ProductCard id={params.id}/>
  </div>;
};
export default Page;