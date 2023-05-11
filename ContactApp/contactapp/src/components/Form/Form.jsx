import { useState } from "react";
const Form = ({ info, setInfo }) => {
    const [form, setForm] = useState({ fullName: "", phoneNumber: "" });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    function onSubmit(e) {
        e.preventDefault();
        console.log(form);
        setInfo([...info, form])
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputfullname" className="form-label">Full Name</label>
                    <input
                        name="fullName"
                        className="form-control"
                        id="exampleInputfullname"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputphonenumber" className="form-label">Phone Number</label>
                    <input
                        name="phoneNumber"
                        className="form-control"
                        id="exampleInputphonenumber"
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit" id="btn-submit">
                    Submit
                </button>
            </form>

        </>
    )
}

export default Form;