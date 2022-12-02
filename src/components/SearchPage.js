import React, {useState} from 'react'


const SearchBar = () => {
    const [search, setSearch] = useState('')


return (
    <>
    <input type = 'text' placeholder='Search....' onChange = {(e) => {setSearch(e.target.value);}}>
        
    </input>
    </>
)

};

export default SearchBar;