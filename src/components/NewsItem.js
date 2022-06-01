import React from 'react'

// export class NewsItem extends Component 
const NewsItem = (props) => {
  let { title, description, author, imageUrl, newsUrl, date, source } = props;

  return (
    <div>
      <div className="card">
        <img style={{ height: "10rem" }} src={imageUrl} className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 style={{
            height: "4.5rem", textOverflow: "ellipsis",
            overflow: "hidden"
          }} className="card-title">
            {title}
            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger" style={{ marginTop: '-10px', fontSize: '0.8rem' }}>
              {source}
            </span>
          </h5>
          <p className="card-text" style={{
            height: "4.5rem", textOverflow: "ellipsis",
            overflow: "hidden"
          }}>{description}</p>
          <p className="card-text"><small>{(author) ? `By ${author}` : ''}{<br />}{(date) ? `Published on ${new Date().toDateString()}` : ''}</small></p>
          <a rel='noopener noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
