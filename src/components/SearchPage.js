import React, {useState} from 'react'


const SearchBar = () => {
    const [search, setSearch] = useState('')


return (
    <>
    <form>
        <label hmtlFor="search"> Search</label>
        <input type = " text " id = " search " name = "search" onChange ={e => setSearch(e.target.value)} />
    </form>
    </>
)

};

export default SearchBar;