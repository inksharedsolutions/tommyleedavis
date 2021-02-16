import React from "react"
import style from  './style.module.css'
import Header from '../components/header'
import MainBody from '../components/Main/Main'
import Newsletter from '../containers/Forms/Newsletter/Newsletter'
import Bottom from '../components/Bottom/Bottom'
import Footer from '../components/Footer/Footer'
import {Helmet} from 'react-helmet';


const Main = (props) =>{
	return(
		<div className={style.ContentWrapper}>
			<Helmet title="Home | Tommy Lee Davis"/>
			<Header currLocation={props.location}/>
			<MainBody />
			{/* <Bottom /> */}
			<Newsletter />
			<Footer location={props.location} />
		</div>
	)
}
		
export default Main;