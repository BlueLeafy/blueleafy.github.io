// customLoaders.js
import { redirect } from "react-router-dom";
import customFecth from "../apis/customFetch"

// ADMIN LOADERS
const adminPath = "/admin/dashboard/";

// fetchProductsAPI - gets all products with no filters
const fetchProductsApi = async (params = {}) => {
    const response = await customFecth.get(`${adminPath}prodotti`, { params });
    return response.data;
}

/*  
        const [statsResponse, usersResponse, productsResponse] = await Promise.all([
            customFecth.get(`${adminPath}stats`),
            customFecth.get(`${adminPath}users`),
            fetchProductsApi(), // Get products without filters
        ]);

        console.log("ProductsResponse", productsResponse);

        return {
            stats: statsResponse.data,
            users: usersResponse.data,
            products: productsResponse

        };

*/

// adminLoader - get all data (users, products, stats)
export const adminDashboardLoader = async () => {
    try {
        // Fetch all shared admin data
        const [usersResponse, userResponse, productsResponse] = await Promise.all([
            customFecth.get(`admin/users`),
            customFecth.get(`admin/current-user`),
            fetchProductsApi(), // Get products without filters
        ]);

        return {
            users: usersResponse.data,
            currentUser: userResponse.data,
            products: productsResponse
        };

    } catch (error) {
        console.error(error);
        // Return empty data
        return {
            users: {},
            currentUser: {},
            products: {}
        }
    }
}


// This maybe used in public too??
// getAllProducts - gets filtered products with parameters
export const getAllProducts = async ({ request }) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);

    try {
        const response = await customFecth.get(`${adminPath}prodotti`, { params })
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