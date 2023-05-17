import { useState } from "react";
const List = ({ info, setInfo }) => {

    const [filterValue, setFilterValue] = useState("");

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value.toLowerCase());
    }

    const filteredList = info.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterValue)
        })
    });
    
    function deleteUser(id) {
        console.log(id);
        const newList = info.filter((item) => item.id !== id);
        setInfo(newList);

    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
                <input value={filterValue} onChange={handleFilterChange} placeholder="Search" />
            </div>
            <div>
                <ul className="list-group">
                    {filteredList.map((item, i) =>
                        <li key={i} className="list-group-item">
                            <div className="userInfo">
                                <div className="img">
                                    {item.fullName[0]}
                                </div>
                                <div className="info">
                                    <div id="fullName">
                                        {item.fullName}
                                    </div>
                                    <div id="phoneNumber">
                                        {item.phoneNumber}
                                    </div>
                                </div>
                            </div>
                            <div className="actions">
                                <button type="button" onClick={() => deleteUser(item.id)} className="btn-close">Delete</button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default List;