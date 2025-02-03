import React, { useState } from "react";

const UserProfile = () => {
    const [formData, setFormData] = useState({
        name: "Md. Sajjad Mojumder Anik",
        email: "anik15-5640@fiu.edu.bd",
        phone: "+8801609006758",
        bio: "Web Developer | Tech Enthusiast",
        image: "public/pf.jpg" // Default profile image
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile Updated Successfully!");
        console.log(formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 ">
            <div className=" card w-98 bg-base-100 shadow-xl p-24 my-16">
                <div className="flex flex-col items-center ">
                    {/* Profile Image */}
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={formData.image} alt="Profile" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-center mt-2">{formData.name}</h2>
                    <p className="text-sm text-gray-500">{formData.bio}</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-4">
                    {/* Image Upload */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile Image</span>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="file-input file-input-bordered w-full"
                        />
                    </div>

                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                       
                            </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Bio */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Bio</span>
                        </label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>

                    {/* Save Button */}
                    <button type="submit" className="btn btn-primary mt-4 w-full">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
