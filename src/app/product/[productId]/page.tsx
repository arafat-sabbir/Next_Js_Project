const ProductDetail = ({ params }: { params: { productId: string } }) => {
  console.log(params);
  return <div>ProductDetail of {params.productId}</div>;
};

export default ProductDetail;
