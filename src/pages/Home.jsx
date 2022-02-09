import { Fragment } from 'react';
import * as React from 'react';
import ImgHome from '../Components/ImgHome/ImgHome';
import imgHeroHome from '../image/hero.png';


function Home() {
  return(
    <Fragment>
        <ImgHome imageback={imgHeroHome} />
    </Fragment>
  )
}


export default Home;