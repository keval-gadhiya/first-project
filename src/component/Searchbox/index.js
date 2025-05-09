import './App.css'
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const SearchBox = () =>{
    const [isFocused, setIsFocused] = useState(false);

    return(
        <>
        <div className="searchBox position-relative d-flex align-items-center">
        <FiSearch color={isFocused ? '#737DF5' : '#888'} size={18} />
            <input type='text' placeholder='Search here...'
             onFocus={() => setIsFocused(true)}
             onBlur={() => setIsFocused(false)}
            />
        </div>
        </>
    )
}

export default SearchBox;