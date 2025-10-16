// customLoaders.js
import { redirect } from "react-router-dom";
import customFecth from "../apis/customFetch"

const adminPath = "/admin/dashboard/";

// getAllProducts
export const getAllProducts = async ({ request }) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);

    try {
        const response = await customFecth.get(`${adminPath}prodotti`, { params })
        const products = response.data.products; // This get the Array
        return { products, searchValue: params };
    } catch (error) {
        console.log(error);
        return redirect('/admin/dashboard');
    }
}

// getSingleProduct
export const getSingleProduct = async ({ params }) => {
    try {
        const response = await customFecth.get(`${adminPath}prodotti/${params.id}`);
        // const product = response;
        const product = response.data.product;
        return product;
    } catch (error) {
        console.log(error.message);
    }
}