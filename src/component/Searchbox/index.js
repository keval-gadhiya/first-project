import './App.css'
import { useState } from 'react';
// Icons
import {
    HugeiconsIcon,
    Search01Icon,
} from "../Icon/icon.js";



const SearchBox = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <div className="searchBox position-relative d-flex align-items-center">
                <HugeiconsIcon
                    icon={Search01Icon}
                    size={18}
                    color={isFocused ? '#737DF5' : '#888'}
                    strokeWidth={2}
                />
                <input type='text' placeholder='Search here...'
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>
        </>
    )
}

export default SearchBox;