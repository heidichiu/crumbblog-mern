import "./createPost.css";

export const CreatePost = () => {
  return (
    <div className="create">
      <img className="create-image" src="https://cdn.pixabay.com/photo/2021/02/04/13/28/bird-5981360_960_720.jpg" alt="" />
      <form className="create-form" action="">
        <div className="create-form-group">
          <label htmlFor="fileInput">
            <i class="create-icon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input type="text" placeholder="Title" className="create-input" autoFocus={true} />
        </div>
        <div className="create-form-group">
          <textarea placeholder="Write your content..." type="text" className="create-input create-text"></textarea>
        </div>
        <button className="create-submit">Publish</button>
      </form>
    </div>
  );
};
