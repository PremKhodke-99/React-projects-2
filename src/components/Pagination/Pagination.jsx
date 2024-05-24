import React from 'react'
import './Pagination.module.css'
import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages = 10, onPageChange }) {

    function generateNoOfPages() {
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }

        return pages;
    }

    return (
        <div className='pagination'>
            <button 
            className='pagination-btn' 
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            >
                Prev
            </button>
            {
                generateNoOfPages().map(pageNo => <button className={`${styles.paginationbtn} ${currentPage == pageNo && styles.active}`} key={pageNo} onClick={() => onPageChange(pageNo)}>{pageNo}</button>)
            }
            <button className='pagination-btn' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    )
}

export default Pagination