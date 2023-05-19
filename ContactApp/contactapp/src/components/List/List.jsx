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

    // Edit Function Starts
    const editUser = (id) => {
        const updatedItems = info.map((item) => {
            if (item.id === id) {
                return { ...item, isEditing: true };
            }
            return item;
        });
        setInfo(updatedItems);
    };
    // Edit Function Ends

    // onChange Event Starts
    const onChange = (e, id) => {
        const newText = e.target.value;
        const updatedItems = info.map((item) => {
            if (item.id === id) {
                return { ...item, fullName: newText };
            }
            return item;
        });
        setInfo(updatedItems);
    };
    const onChangePhone = (e, id) => {
        const newText = e.target.value;
        const updatedItems = info.map((item) => {
            if (item.id === id) {
                return { ...item, phoneNumber: newText };
            }
            return item;
        });
        setInfo(updatedItems);
    };
    // onChange Event Ends

    // Save Events Starts
    const saveUser = (id, newName,newNumber) => {
        const updatedItems = info.map((item) => {
          if (item.id === id) {
            return { ...item, fullName: newName, phoneNumber:newNumber, isEditing: false };
          }
          return item;
        });
        setInfo(updatedItems);
      };
    // Save Events Ends

    // Cancel Event Starts
    const cancelUser = (id) => {
        const updatedItems = info.map((item) => {
          if (item.id === id) {
            return { ...item, isEditing: false };
          }
          return item;
        });
        setInfo(updatedItems);
      };
    // Cancel Event Ends

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
                                        {item.isEditing ? (
                                            <input
                                                type="text"
                                                value={item.fullName}
                                                onChange={(e) => onChange(e, item.id)}
                                            />
                                        ) : (
                                            <span>{item.fullName}</span>
                                        )}
                                    </div>
                                    <div id="phoneNumber">
                                        {item.isEditing ? (
                                            <input
                                                type="text"
                                                value={item.phoneNumber}
                                                onChange={(e) => onChangePhone(e, item.id)}
                                            />
                                        ) : (
                                            <span>{item.phoneNumber}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="actions">
                                {item.isEditing ? (
                                    <>
                                        <button type="button" onClick={() => saveUser(item.id,item.fullName,item.phoneNumber)} className="btn-edit">Save</button>
                                        <button type="button" onClick={() => cancelUser(item.id)} className="btn-close">Cancel</button>
                                    </>
                                ):(
                                    <>
                                        <button type="button" onClick={() => editUser(item.id)} className="btn-edit">Edit</button>
                                        <button type="button" onClick={() => deleteUser(item.id)} className="btn-close">Delete</button>
                                    </>
                                )}
                                
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default List;





// import React, { useState } from 'react';

// const App3 = () => {
//   const [items, setItems] = useState([
//     { id: 1, text: 'Öğe 1', isEditing: false },
//     { id: 2, text: 'Öğe 2', isEditing: false },
//     { id: 3, text: 'Öğe 3', isEditing: false },
//   ]);

//   const handleDelete = (id) => {
//     const updatedItems = items.filter((item) => item.id !== id);
//     setItems(updatedItems);
//   };

//   const handleEdit = (id) => {
//     const updatedItems = items.map((item) => {
//       if (item.id === id) {
//         return { ...item, isEditing: true };
//       }
//       return item;
//     });
//     setItems(updatedItems);
//   };

//   const handleSave = (id, newText) => {
//     const updatedItems = items.map((item) => {
//       if (item.id === id) {
//         return { ...item, text: newText, isEditing: false };
//       }
//       return item;
//     });
//     setItems(updatedItems);
//   };

//   const handleCancelEdit = (id) => {
//     const updatedItems = items.map((item) => {
//       if (item.id === id) {
//         return { ...item, isEditing: false };
//       }
//       return item;
//     });
//     setItems(updatedItems);
//   };

//   const onChange = (e, id) => {
//     const newText = e.target.value;
//     const updatedItems = items.map((item) => {
//       if (item.id === id) {
//         return { ...item, text: newText };
//       }
//       return item;
//     });
//     setItems(updatedItems);
//   };

//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>
//           {item.isEditing ? (
//             <input
//               type="text"
//               value={item.text}
//               onChange={(e) => onChange(e, item.id)}
//             />
//           ) : (
//             <span>{item.text}</span>
//           )}
//           {item.isEditing ? (
//             <>
//               <button onClick={() => handleSave(item.id, item.text)}>
//                 Kaydet
//               </button>
//               <button onClick={() => handleCancelEdit(item.id)}>İptal</button>
//             </>
//           ) : (
//             <>
//               <button onClick={() => handleEdit(item.id)}>Düzenle</button>
//               <button onClick={() => handleDelete(item.id)}>Sil</button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default App3;
