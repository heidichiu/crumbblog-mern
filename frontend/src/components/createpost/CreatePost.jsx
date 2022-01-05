import axios from "../../api";
import { useContext, useState } from "react";
import "./createPost.css";
import { AuthContext } from "../../context/authContext/authContext";
import { useHistory } from "react-router-dom";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      description: desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      history.push("/");
    } catch (err) {}
  };

  return (
    <div className="create">
      {file && <img className="create-image" src={URL.createObjectURL(file)} alt="" />}
      <form className="create-form" action="" onSubmit={handleSubmit}>
        <div className="create-form-group">
          <label htmlFor="fileInput">
            <i className="create-icon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
            accept="image/*"
          />
          <input
            type="text"
            placeholder="Title"
            className="create-input"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="create-form-group">
          <textarea
            placeholder="Write your content..."
            type="text"
            className="create-input create-text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="create-submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};
