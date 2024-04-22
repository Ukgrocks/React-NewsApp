import React from 'react'
import PropTypes from 'prop-types'

const NewsItem  = (props) => {

let {title,description,imageURL,newsURL,author,date,source} = props;
    return (
      <div>
 <div className="card my-3">
 <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
    {source}
  </span>
  <img src={imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}  </h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small class="text-body-secondary">Written by {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
