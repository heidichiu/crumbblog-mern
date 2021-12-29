import "./singlePost.css";

export const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img
          src="https://images.pexels.com/photos/8263404/pexels-photo-8263404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="single-post-image"
        />
        <h1 className="single-post-title">
          Lorem ipsum dolor sit amet consectetur
          <div className="single-post-edit-container">
            <i class="single-post-icon far fa-edit"></i>
            <i class="single-post-icon fas fa-trash"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>Jane</b>
          </span>
          <span className="single-post-date">
            Date: <b>1 hour ago</b>
          </span>
        </div>
        <p className="single-post-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur perferendis aliquid enim officia adipisci
          fugit? Expedita provident eveniet ea! Dolor nisi quasi minima praesentium accusamus mollitia quo sit laborum enim magnam
          odit iusto impedit corporis, nostrum eaque nemo deleniti reiciendis cumque eos a optio. Non facilis aliquam, ipsam,
          quam, dolor nisi possimus adipisci quae ipsa aliquid dolore repellat modi vero fugiat? Praesentium repudiandae veniam
          ducimus eos corporis! Enim molestias pariatur dolorem quo officiis atque. Dolor a molestias voluptatibus atque
          laboriosam deleniti, quae provident odio possimus? Perspiciatis, distinctio tempore eaque fugiat quo repellat, soluta
          similique doloribus asperiores tenetur eos, labore pariatur incidunt assumenda atque illo dignissimos necessitatibus
          impedit. Ullam debitis nemo, labore corrupti quia consectetur ea repudiandae nobis tempora ipsum deleniti magnam,
          voluptas at nam! Iusto aspernatur tempore sit non repudiandae aut, quidem et minus autem sapiente impedit tenetur
          ratione placeat alias obcaecati rem amet vitae ex culpa? Fugit alias minima suscipit officia iure quis repellendus, illo
          explicabo earum perspiciatis veritatis ut tenetur et ratione. Illum quas nostrum, at, possimus aut neque adipisci
          aliquam eos cupiditate quo eaque labore! Iure labore cumque neque porro enim, rerum corrupti, quas provident,
          perferendis sit aut molestias. Corporis, doloribus? Tempora eaque odit eligendi quibusdam.
        </p>
      </div>
    </div>
  );
};
