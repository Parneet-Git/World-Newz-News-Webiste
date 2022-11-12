import React, { useState, useEffect } from 'react';
import LoadingIcon from './LoadingIcon';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

// export default class News extends Component 
const News = (props) => {

  const capitalizeFirstLetter = (name) => {
    return (name)[0].toUpperCase() + (name).slice(1);
  }

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = "World News - " + this.capitalizeFirstLetter(props.category);

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    props.setProgress(30);
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    /*this.setState({ // this.setState() to change the state of existing var(s)
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })*/
    props.setProgress(100);
    window.scrollTo(0, 0);
  }

  const searchQuery = async (query) => {
    props.setProgress(10);
    await setPage(1);
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    props.setProgress(30);
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    /*this.setState({ // this.setState() to change the state of existing var(s)
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })*/

    props.setProgress(100);
  }

  // this function runs after the render function
  useEffect(() => {
    updateNews();
    let searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () => {
      let query = document.getElementById('search-box').value;
      searchQuery(query);
    });
  }, [])

  /*async componentDidMount() {
    this.updateNews();
    let searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', (event) => {
      let query = document.getElementById('search-box').value;
      this.searchQuery(query);
    });
  }*/

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    /*this.setState({ // this.setState() to change the state of existing var(s)
      articles: articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });*/

  };

  return (
    <div className='container' style={{ marginTop: "5rem" }}>
      <h2 className='text-center text-light mb-4'>World Newz - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      {loading && <LoadingIcon />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<LoadingIcon />}
      >
        <div className="container">
          <div className="row align-middle">
            {articles.map((elem) => {
              return <div className="col-md-4 my-3 flex-wrap" key={elem.url}>
                <NewsItem title={elem.title ? elem.title : ""} description={elem.description ? elem.description : ""} author={elem.author} imageUrl={elem.urlToImage ? elem.urlToImage : "https://via.placeholder.com/480x480.png?text=No+Image"} newsUrl={elem.url ? elem.url : ""} date={elem.publishedAt} source={elem.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
