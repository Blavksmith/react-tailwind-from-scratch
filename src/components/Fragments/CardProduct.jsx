import Buttonz from "../Elements/Button/Index";

const CardProduct = (props) => {
    const { children } = props;
    return (

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {children}


        </div>
    )

}

const Header = (props) => {
    const {image} = props
    return (
        <img src={image} className="rounded p-8 w-full h-80" alt="product" />
    )
}

const Body = (props) => {
    const {title, children} = props
    return (
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{children}</p>
            </a>
        </div>
    );
}

const Footer = (props) => {
    const {price, handleToCart, id} = props
    return (
        <div className="flex justify-between px-5 pb-5">
            <p className="text-xl font-bold text-gray-900 text-center dark:text-white">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
            <Buttonz variant="bg-blue-600" onClick={() => handleToCart(id)}>Buy</Buttonz>

            {/* Salah krn onclick butuh fungsi bukan return dari funsgi */}
            {/* <Buttonz variant="bg-blue-600" onClick={handleToCart(id)}>Buy</Buttonz> */}

        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct