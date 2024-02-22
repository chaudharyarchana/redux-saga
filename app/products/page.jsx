import Card from "../ui/products/Card";

async function getProducts(){
  await new Promise((res) => setTimeout(res,4000))
  let data = await fetch('https://dummyjson.com/products');
  data = await data.json();
  return data.products;
}
const Page = async () => {
  let products = await getProducts();
  
  return <div className="flex flex-wrap justify-evenly gap-2 my-5">
    {
      products.map((item) => (
        
          <Card  item={item} id={item.id} />
      ))
    }
  </div>;
};
export default Page;