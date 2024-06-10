import React, { useEffect, useState } from 'react'

function SortData() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState('')

    async function fetchListOfusers() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/users`);
            const result = await response.json();

            if (result?.users?.length > 0) {
                sort !== '' ? handleSort(result.users) : setUsers(result.users);
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListOfusers();
    }, []);

    function handleSort(listOfUser) {
        let cpyUsers = [...listOfUser]
        if (sort === 'ascending') {
            cpyUsers = cpyUsers.sort((first, second) => first.firstName > second.firstName ? 1 : -1);

            setUsers(cpyUsers);
        } else if (sort === 'descending') {
            cpyUsers = cpyUsers.sort((first, second) => first.firstName < second.firstName ? 1 : -1);

            setUsers(cpyUsers);
        }
    }

    useEffect(() => {
        handleSort(users);
    }, [sort]);

    if (loading) {
        return <h1>Loading! Please Wait.</h1>
    }

    return (
        <div className='sortdata-container'>
            <h1>Sort Data</h1>
            <div className='sort-dropdown-container'>
                <select name="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="" id=''>Please Select Option</option>
                    <option value="ascending" id='ascending'>A-Z</option>
                    <option value="descending" id='descending'>Z-A</option>
                </select>
            </div>
            <ul>
                {
                    users?.length > 0 && users.map((userItem) => (
                        <li>
                            <p>{userItem.firstName}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SortData