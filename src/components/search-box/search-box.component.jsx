import React from "react";
import './search-box.styles.css.css'

export const SearchBox = ({placeholder, onChangeHandle}) =>
    (
        <div >
            <input  className='search' type='search' placeholder={placeholder} onChange={onChangeHandle}/>
        </div>
    )
