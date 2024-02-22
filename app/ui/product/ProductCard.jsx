// import { useRouter } from "next/navigation";

// do the api call based on the product id
async function getProductById(id){
    let product = await fetch(`https://dummyjson.com/products/${id}`)
        product = await product.json();
        return product;
}
const ProductCard = async ({id}) => {
    
    //get the id from the path query
    
    let product = await getProductById(id)
     
  return <div className="mt-20 ml-20">
        <img src={product.images[0]}/>
        <h1>{product.title} {id} </h1>
        
  </div>;
};
export default ProductCard;