import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News= (props) => {
 const [articles,setArticles] = useState([])
 const [loading,setloading] = useState(true)
 const [page,setPage] = useState(1)
 const [totalResults,setTotalResults] = useState(0)
 const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
 


  //UseEffect replaces ComponentDidMount
useEffect(()=>{
  document.title=`${capitalizeFirstLetter(props.category)} - NewsIndia`;
 update();

},[])



  const update = async ()=>{
    // props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=d179284b8f3b46f3be00610f6966ea62&page=${page}&pageSize=${props.pageSize}`;
setloading(true);
  let data = await fetch(url); 
  // props.setProgress(30);
let parsedData = await data.json(); 
// props.setProgress(70);
setArticles(parsedData.articles)
  setTotalResults(parsedData.totalResults)
  setloading(false)
  // props.setProgress(100);
}

const fetchMoreData = async() => {
const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}
&apikey=d179284b8f3b46f3be00610f6966ea62&page=${page+1}&pageSize=${props.pageSize}`;
setPage(page+1)
setloading(true)
  let data = await fetch(url); 
let parsedData = await data.json(); 
setArticles(articles.concat(parsedData.articles))
setTotalResults(parsedData.totalResults)
setloading(false)

};

    return (
      <>
      <div className = "container my-3">
     
   <h2 className="text-center" style={{margin:'35px 0px', marginTop: '90px'}}>Top {capitalizeFirstLetter(props.category)} Headlines</h2>
   {loading && <Spinner/>}
<InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
          >
   
<div className="row">
{articles.map((element)=>{
return <div className="col-md-4" key={element.url}>
    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} //This is used to limit length of description
     imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
    </div>

})}
</div>

</InfiniteScroll>


</div>
</>
    )
  }

News.defaultProps = {
  country:'in',
  pageSize: 5,
  category:'science'
}
News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
export default News
