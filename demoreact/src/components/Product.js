function Product(props){
    const pr = props.product;
    return (
        <div className="col-4">
            <h2>{pr.name}</h2>
            <p>Sản phẩm sắp ra mắt</p>
            <p>Giá quá ảo: {pr.price} </p>
            <p>{pr.qty > 0?`Số lượng: ${pr.qty} `:"Hết hàng"} </p>
        </div>
    )
}
export default Product;