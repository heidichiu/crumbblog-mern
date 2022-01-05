import { useContext, useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { AuthContext } from "../../context/authContext/authContext";
import axios, { hostUrl } from "../../api";
import "./settings.css";
import { UpdateStart, UpdateSuccess } from "../../context/authContext/authActions";

export const Settings = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { user, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(UpdateStart());
    setSuccess(false);
    setError(false);

    if (username === "" || email === "" || password === "") {
      setError(true);
      setErrorMsg("Please complete all fields");
      return;
    }
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch(UpdateSuccess(res.data));
    } catch (err) {
      setError(true);
      setErrorMsg("An error occured");
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="setting-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update Your Account</span>
          <span className="settings-delete-title">Delete Your Account</span>
        </div>
        <form action="" className="settings-form" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settings-profile-pic">
            <img src={file ? URL.createObjectURL(file) : `${hostUrl}images/${user.profilePic}`} alt="" />
            <label htmlFor="file-input">
              <i className="settings-profile-pic-icon far fa-user-circle"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
          </div>

          <label htmlFor="username-input">Username:</label>
          <input type="text" value={username} id="username-input" onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="email-input">Email:</label>
          <input type="email" value={email} id="email-input" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password-input">Password:</label>
          <input type="password" id="password-input" onChange={(e) => setPassword(e.target.value)} />
          <button className="settings-submit" type="submit">
            Update
          </button>
          {success && <span style={{ color: "green", textAlign: "center", margin: "20px" }}>Profile has been updated</span>}
          {error && <span style={{ color: "red", textAlign: "center", margin: "20px" }}>{errorMsg}</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
