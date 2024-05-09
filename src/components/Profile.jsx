import React, { useState, useEffect } from "react";

function ProfileInputs() {
    const [data, setData] = useState({
        firstname: "",
        sirname: "",
        email: "",
        phone: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        github: "",
        address: "",
        country: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    function handleSubmit(e){
        e.preventDefault();
        PostPersonaData();
    }

    function PostPersonaData() {
        fetch('https://resume-builder-db.onrender.com/personal-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            // Handle success
        })
        .catch(error => {
            // Handle error
        });
        console.log(data);
    }
    useEffect(() => {
        PostPersonaData();
    }, []);



    return (
        <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded profile-form">
            <div className="shadow p-3 mb-4 bg-body-tertiary rounded text text-primary text-center fs-2">Personal Details</div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <label className="col-form-label">Firstname</label>
                    <input type="text" className="form-control name" placeholder="firstname" name="firstname" value={data.firstname} onChange={handleChange} />
                </div>
                <div className="col-auto sir">
                    <label className="col-form-label">Sirname</label>
                    <input type="text" className="form-control name" placeholder="sirname" name="sirname" value={data.sirname} onChange={handleChange} />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <label className="col-form-label">Email</label>
                    <input type="text" className="form-control name" placeholder="email" name="email" value={data.email} onChange={handleChange} />
                </div>
                <div className="col-auto sir">
                    <label className="col-form-label">Phone Number</label>
                    <input type="number" className="form-control name" placeholder="phone number" name="phone" value={data.phone} onChange={handleChange} />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <label className="col-form-label">Facebook</label>
                    <input type="text" className="form-control name" placeholder="facebook" name="facebook" value={data.facebook} onChange={handleChange} />
                </div>
                <div className="col-auto sir">
                    <label className="col-form-label">Instagram</label>
                    <input type="text" className="form-control name" placeholder="instagram" name="instagram" value={data.instagram} onChange={handleChange} />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <label className="col-form-label">Linked In</label>
                    <input type="text" className="form-control name" placeholder="linked in" name="linkedin" value={data.linkedin} onChange={handleChange} />
                </div>
                <div className="col-auto sir">
                    <label className="col-form-label">GitHub</label>
                    <input type="text" className="form-control name" placeholder="github" name="github" value={data.github} onChange={handleChange} />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-auto">
                    <label className="col-form-label">Address</label>
                    <input type="text" className="form-control name" placeholder="address" name="address" value={data.address} onChange={handleChange} />
                </div>
                <div className="col-auto sir">
                    <label className="col-form-label">Country</label>
                    <input type="text" className="form-control name" placeholder="country" name="country" value={data.country} onChange={handleChange} />
                </div>
            </div>
            
        
            <div className="row align-items-center">
                <div className="col-auto">
                    <button type="button" className="btn back btn-secondary">Back</button>
                </div>
                <div className="col-auto sir">
                    <button onClick={handleSubmit} type="button" className="btn next btn-danger">Next</button>
                </div>
            </div>
            <div className="page">
                <h6>Page 1</h6>
            </div>
        </div>
    );
}

export default ProfileInputs;
