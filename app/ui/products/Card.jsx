import Link from "next/link";
const Card = ({ item, id }) => {
  const { title, price } = item;

  return (
    <div>
      <div className="w-52 border-2 py-5 px-5 h-32">
        <h1 className="font-medium">{title}</h1>
        <h1 className="mt-2">$ {price}</h1>
        <Link
          href={{
            pathname: `/products/${id}`,
            query: { "id": `${id}` },
          }}
        >
          <button>view</button>{" "}
        </Link>
      </div>
    </div>
  );
};
export default Card;
