import { Sidebar } from "../../components/sidebar/Sidebar";
import "./settings.css";

export const Settings = () => {
  return (
    <div className="settings">
      <div className="setting-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update Your Account</span>
          <span className="settings-delete-title">Delete Your Account</span>
        </div>
        <form action="" className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-profile-pic">
            <img src="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_960_720.jpg" alt="" />
            <label htmlFor="file-input">
              <i className="settings-profile-pic-icon far fa-user-circle"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }} />
          </div>

          <label htmlFor="username-input">Username:</label>
          <input type="text" placeholder="Jane Doe" id="username-input" />
          <label htmlFor="email-input">Email:</label>
          <input type="email" placeholder="janedoe@gmail.com" id="email-input" />
          <label htmlFor="password-input">Password:</label>
          <input type="password" id="password-input" />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
