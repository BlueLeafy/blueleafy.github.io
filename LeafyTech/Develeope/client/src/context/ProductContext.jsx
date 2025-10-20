// context/ProductContext.jsx
import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    // State management only - data loading happens in loaders
    const value = {
        products,
        featuredProducts,
        setProducts,
        setFeaturedProducts
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;