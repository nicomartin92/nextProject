import React from 'react';

const SearchInput = (props: any) => {
    React.useEffect(() => {
    }, []);

    return (
        <div>
            <div className="list__searchBar">
                <div className="list__search">
                    <div className="list__searchMain">
                        <input
                            type="text"
                            value={props.searchString}
                            onChange={props.handleChange}
                            placeholder="type name here" />

                        <button className="button" onClick={props.clearAll}>{props.labelClearAll}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchInput;