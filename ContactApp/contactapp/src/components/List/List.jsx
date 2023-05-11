import { useState } from "react";
const List = ({ info, setInfo }) => {
    function deleteUser(id) {
        console.log(id);
        const newList = info.filter((item) => item.id !== id);
        setInfo(newList);

    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
                <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
            </div>
            <div>
                <ul className="list-group">
                    {info.map((item, i) =>
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