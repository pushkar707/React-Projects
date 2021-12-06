import React from "react";


//For Class Based
// export class NewsItem extends Component {
//   render() {}
// }


//For Function Based
const NewsItem = (props) => {
  let { title, description, imageURL, newsURL } = props;
  return (
    <>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ display: "inline" }} id="title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <a
              href={newsURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
