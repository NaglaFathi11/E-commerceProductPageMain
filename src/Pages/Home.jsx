import ProductItem from "../Components/ProductItem/ProductItem";

export default function Home(props) {
  function Test(count) {
    props.Test2(count);
  }
  return (
    <>
      <ProductItem Test={Test} />
    </>
  );
}
