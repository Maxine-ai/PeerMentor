import React, { useState } from "react";
import "./EditProfile.css";
import imageholder from "./imageholder.png";

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("Felix Macintosh");
  const [role, setRole] = useState("Creative Director @ Acne");
  const [bio, setBio] = useState("I’ve been designing for 7 years with clients worldwide and recently moved to Berlin.");
  const [email, setEmail] = useState("felix@acne.com");
  const [twitter, setTwitter] = useState("@felix");
  const [phone, setPhone] = useState("303-909-1900");
  const [website, setWebsite] = useState("felixmacintosh.com");

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>

      <form className="edit-form">
        <div className="image-section">
          <label htmlFor="upload-image" className="avatar-upload">
            <img
              src={selectedImage || imageholder}
              alt="Avatar"
              className="avatar"
            />
            <input
              type="file"
              id="upload-image"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </label>
        </div>

        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Role</label>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />

        <label>Bio</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} maxLength={400} />

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Twitter</label>
        <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} />

        <label>Phone</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label>Website</label>
        <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />

        <div className="button-row">
          <button type="button" className="cancel">Cancel</button>
          <button type="submit" className="save">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
