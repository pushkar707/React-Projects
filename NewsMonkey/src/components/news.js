import React, {useState, useEffect} from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => { 

  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  const [loading, setloading] = useState(false)

  useEffect(async () => {
    setloading(true);
    props.setProgress(33)
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bd3adacf6cf841a8a190c4ad1f1882c5&page=${page}&pageSize=${props.pageSize}`
    );
    props.setProgress(66)
    let parsedData = await data.json();
    // console.log(parsedData);
    props.setProgress(100)
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
  }, [])

  const fetchMoreData = async () => {
    setloading(true)    
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bd3adacf6cf841a8a190c4ad1f1882c5&page=${page+1}&pageSize=${props.pageSize}`
    );
    let parsedData = await data.json();
    setpage(page+1)
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setloading(false)
  };

  // const previousBtn= async ()=>{
  //   setloading(true)
  //   let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bd3adacf6cf841a8a190c4ad1f1882c5&page=${page-1}&pageSize=${props.pageSize}`)
  //   let parsedData = await data.json();
  //   setarticles(parsedData.articles)
  //   setpage(page-1)
  //   setloading(false)
  //   document.getElementById('next').removeAttribute('disabled')
  // }

  // const nextBtn= async ()=>{
  //   if(page+1 <= Math.ceil(totalResults/props.pageSize)){
  //     setloading(true)
  //     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bd3adacf6cf841a8a190c4ad1f1882c5&page=${page+1}&pageSize=${props.pageSize}`)
  //     let parsedData = await data.json();
  //     setarticles(parsedData.articles)
  //     setpage(page+1)
  //     setloading(false)
  //   }
  //   else{
  //     document.getElementById('next').setAttribute('disabled' , true)
  //   }
  // }
    return (
      <>
        <h1 className='' style={{textAlign:'center' , marginTop:'70px'}}> OUR TOP HEADLINES</h1>
        {/* {loading && <Loading />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading />}
        >
          <div className="container">            
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={
                        element.title.length > 70
                          ? element.title.slice(0, 70).concat("....")
                          : element.title === null
                          ? ""
                          : element.title
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 185)
                          : ""
                      }
                      imageURL={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://ouikar.com/pub/media/catalog/product/placeholder/default/image_not_available_1.png"
                      }
                      newsURL={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* {!loading && <div className="container d-flex justify-content-between mx-1">
          <button disabled={page===1} className='btn btn-primary' onClick={previousBtn}>Previous</button>
          <button className='btn btn-primary' id='next' onClick={nextBtn}>Next</button>
        </div>} */}
      </>
    );
  }


News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 6,
};

export default News;
