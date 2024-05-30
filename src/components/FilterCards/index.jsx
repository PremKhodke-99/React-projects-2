import React, { useEffect, useState } from 'react'
import './filter.css'

const FilterProducts = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("");
    const [filteredItems, setFilteredItems] = useState("");

    async function fetchProducts() {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/products', {
                method: 'GET'
            });
            const result = await apiResponse.json();

            if (result?.products && result.products.length > 0) {
                setProducts(result.products);
                setFilteredItems(result.products);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);


    useEffect(() => {
        let cpyProducts = [...products];
        setFilteredItems(
            currentCategory !== '' ? cpyProducts.filter(productItem => productItem.category.toLowerCase() === currentCategory.toLowerCase()) : cpyProducts
        )
    }, [currentCategory]);

    const uniqueCategories = products?.length > 0 ? [...new Set(products.map(productItem => productItem.category))] : [];

    if (loading) {
        return <h3>Fetching the products please wait</h3>
    }

    return (
        <div className='filter-products-container'>
            <h1>Filter Products by categories</h1>
            <div className="product-category">
                {uniqueCategories.map((uniqueCategoryItem) => (
                    <button onClick={() => setCurrentCategory(
                        currentCategory !== '' && currentCategory === uniqueCategoryItem ? '' : uniqueCategoryItem)}
                        className={`${currentCategory === uniqueCategoryItem ? 'active' : ''}`}
                        >
                        {uniqueCategoryItem}
                    </button>
                ))}
            </div>
            <ul className='list-of-products'>
                {
                    filteredItems?.length > 0 ?
                        filteredItems.map(productItem => <li key={productItem.id}>
                            <p>{productItem.title}</p>
                            <button>{productItem.category}</button>
                        </li>) : null
                }
            </ul>
        </div>
    )
}

export default FilterProducts