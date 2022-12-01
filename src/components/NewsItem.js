import React from 'react'

// export class NewsItem extends Component 
const NewsItem = (props) => {
  let { title, description, author, imageUrl, newsUrl, source } = props;
  title = title.substring(0, 80) + "...";
  description = description.substring(0, 100) + "...";

  return (
    <div>
      <div className="card">
        <img src={imageUrl} className="card-img" alt="News" />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="position-absolute badge rounded-pill bg-danger">
              {source}
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small>{(author) ? `By ${author}` : ''}{<br />}</small></p>
          <a rel='noopener noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
