import Buttonz from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
import { useState } from "react";

const products = [
    {
        id: 1,
        title: "Planted Tree",
        image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 1000000
    },
    {
        id: 2,
        title: "ROG Strix",
        image: "/images/product.jpg",
        price: 2500000
    }
];

const email = localStorage.getItem("email");

const ProductPage = () => {
    const [cart, setCart] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    };

    const handleToCart = (id) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                return [...prevCart, { id: id, qty: 1 }];
            }
        });
    };

    return (
        <>
            {/* Navbar */}
            <div className="flex justify-between items-center bg-blue-600 h-16 w-screen text-white font-bold px-10">
                {email}
                <Buttonz variant="bg-black" onClick={handleLogout}>Logout</Buttonz>
            </div>

            {/* Main Layout */}
            <div className="flex justify-center items-start min-h-screen gap-10 p-10">
                {/* Product List */}
                <div className="w-3/4 flex flex-wrap gap-4">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body title={product.title}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates amet culpa cum.
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price}>
                                <Buttonz variant="bg-blue-600" onClick={() => handleToCart(product.id)}>
                                    Add to Cart
                                </Buttonz>
                            </CardProduct.Footer>
                        </CardProduct>
                    ))}
                </div>

                {/* Cart Section */}
                <div className="w-1/4 border p-4 rounded shadow-lg">
                    <h1 className="text-2xl font-bold text-blue-600 mb-4">Cart</h1>

                    <table className="text-left table-auto w-full border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2">Product</th>
                                <th className="p-2">Qty</th>
                                <th className="p-2">Price</th>
                                <th className="p-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center p-4">No items in cart</td>
                                </tr>
                            ) : (
                                cart.map((item) => {
                                    const product = products.find(p => p.id === item.id);
                                    if (!product) return null;
                                    return (
                                        <tr key={item.id} className="border-b">
                                            <td className="p-2">{product.title}</td>
                                            <td className="p-2">{item.qty}</td>
                                            <td className="p-2">{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                            <td className="p-2">{(product.price * item.qty).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Counter */}
            {/* <div className="flex justify-center">
                <Counter />
            </div> */}
        </>
    );
};

export default ProductPage;
