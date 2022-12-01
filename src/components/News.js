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
  const axios = require('axios').default;

  const updateNews = async () => {
    props.setProgress(10);
    console.log(props.apiKey);
    let options = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/sources',
      params: { topic: props.category, lang: 'en', sort_by: 'relevancy', page: props.pageSize },
      headers: {
        'x-api-key': props.apiKey
      }
    };
    props.setProgress(30);
    setLoading(true);
    let parsedData;
    await axios.request(options).then(function (response) {
      parsedData = response.data;
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalhits);
    setLoading(false);
    props.setProgress(100);
    window.scrollTo(0, 0);
  }

  const searchQuery = async (query) => {
    props.setProgress(10);
    await setPage(1);
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    props.setProgress(30);
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  }

  // this function runs after the render function

  useEffect(() => {
    updateNews();
    let searchBtn = document.querySelector('.search-icon');
    searchBtn.addEventListener('click', () => {
      let query = document.querySelector('.search-box').value;
      if (query.length == 0) {
        return;
      }
      searchQuery(query);
      window.scrollTo(0,0);
    });
    let query_box = document.querySelector('.search-box');
    query_box.addEventListener('keydown', (event) => {
      if(event.key === 'Enter'){
        if(query_box.value.length == 0){
          return;
        }
        searchQuery(query_box.value);
        window.scrollTo(0, 0);
      }
    })
  }, [])


  /* const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }; */

  return (
    <div className='main-container'>
      {loading && <LoadingIcon />}
      {/* <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<LoadingIcon />}
      > */}
        <div className="container">
          <div className="news-cards-container">
            {articles.map((elem) => {
              return <div key={elem.summary}>
                <NewsItem title={elem.title ? elem.title : ""} description={elem.summary ? elem.summary : ""} author={elem.author} imageUrl={elem.media ? elem.media : "../images/no_news_img.jpg"} newsUrl={elem.link ? elem.link : ""} source={elem.rights} />
              </div>
            })}
          </div>
        </div>
      {/* </InfiniteScroll> */}
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
