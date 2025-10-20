// components/Admin/ProductsListItem.jsx
// List of products with Delete Edit actions
import { Link, useLocation } from "react-router-dom";
import Button from "../../Utils/Button";
import Card from "../../Utils/Card";
import { IoTrashBinSharp } from "react-icons/io5";

function ProductsListItem({ product }) { // Changed from 'products' to 'product'
    const location = useLocation();
    return (
        <Card key={product._id} className="w-full card-over-effect" elevated nogap>
            <Card.Body>
                {/* Name, brand, company */}
                <div className="flex gap-4 item-start">
                    <div className="flex-shrink-0 w-30 h-16 bg-gray">
                        {/* here image product preview (small - thumbnail) */}
                    </div>
                    <div className="flex-1 min-w-0">
                        {/* Infos */}
                        <div className="flex flex-row sm:flex-row sm:items-start sm:justify-between gap-2 py-4">
                            <div className="flex-1">
                                <p className="text-xs font-medium text-gray-500 uppercas tracking-widee">
                                    {product.company}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    {product.brand}
                                </p>
                                <h2 className="text-lg font-semibold text-gray-900 capitalize mt-1 line-clamp-2">
                                    {product.name}
                                </h2>
                            </div>
                            {/* Action buttons */}
                            <div className="flex flex-row justify-end gap-x-2.5 py-4 pe-4">
                                {/* Links buttons */}
                                {/* This redirect into an edit form page */}
                                <Button secondary>
                                    <Link to={`${location.pathname}/${product._id}`} >
                                        See details
                                    </Link>
                                </Button>
                                {/* this will call action to delete product */}
                                <Button text className="flex flex-row items-center gap-x-3.5">
                                    <IoTrashBinSharp />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductsListItem;