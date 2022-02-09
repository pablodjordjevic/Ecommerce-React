import * as React from "react";
import './ImgHome.css'
import { Fragment } from 'react';


const  ImgHome = (heroImgProps) => {
  return (
    <Fragment>
      <div className="heroImage" style={{backgroundImage:`url(${heroImgProps.imageback})`}}>
        <p className="heroText">{heroImgProps.text}</p>
      </div>
    </Fragment>
    )
    }
export default ImgHome;


