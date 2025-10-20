// loaders/productLoaders.js
import customFetch from "../apis/customFetch";

export async function productsLoader({ request }) {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);

    try {
        const response = await customFetch.get(`/prodotti`, { params })
        const {
            products,
            totalProducts,
            currentPage,
            numOfPages,
            allProducts
        } = response.data;
        return {
            products,
            allProducts,
            totalProducts,
            currentPage,
            numOfPages,
            searchValue: params
        };
    } catch (error) {
        console.log(error);
        return { products: [], error: error.message };
    }
};

export async function productDetailLoader({params}) {
    try {
        const response = await customFetch.get(`prodotti/${params.id}`);
        // const product = response;
        const product = response.data.product;
        return product;
    } catch (error) {
        console.log(error.message);
    }
}