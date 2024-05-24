import { useState } from "react";
import Pagination from "./Pagination";
import styles from './Pagination.module.css';


export default function PaginationTest() {

    const dummyData = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`
    }));

    console.log(dummyData);

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentListOfItem = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    console.log(currentListOfItem);

    function handlePageChange(currentPage){
        setCurrentPage(currentPage)
    }

    return (
        <div>
            <h1>Pagination</h1>
            <ul className={styles.listitem}>
                {
                    currentListOfItem.map((listItem) => (
                        <li key={listItem.id}>
                            {listItem.name}
                        </li>
                    ))
                }
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(dummyData.length/itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
}