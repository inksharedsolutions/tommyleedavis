import React, { Component, Route } from 'react';
import Aux from '../hoc/Auxiliary';
import style from '../styles/pages.module.scss';
import Header from '../components/header';
import Footer from '../components/Footer/Footer';
import authorImage from '../asset/author/author.png';
import {Helmet} from 'react-helmet';

const abouttheAuthor = (props) => {
	return (
		<Aux>
		<Helmet title="About the Author | Tommy Lee Davis"/>
			<div className={style.flexWrapper}>
				<Header currLocation={props.location} />
				<main className={style.wrapperMain}>
					<div className="container">
						<div className="row" id={style.flexWrapper}>
							<div className="col l6 m12 s12">
								<div className={style.authorContainerImage}>
									<img src={authorImage} />
								</div>
							</div>

							<div className="col l6 m12 s12">
								<section className={style.contentSectionBiography}>
									<p className={style.paramsBio}>
									I was born in Welwyn Garden City City, in Hertfordshire, England. My mother was English and my father was American, who met in England, during WW2.  On October 1st 1949. Spent early years there, from 3 to 7, moved with parents and older brother to the USA, as my grandfather almost died. Returning to England when 7 as parents divorced. missed 2 years of early school, due to age, went on to primary school , and secondary modern school in Welwyn, Hertfordshire, where I enjoyed English and Art, I wrote several notable essay's, and my art was hung inside on school wall. had Various jobs from Salesman, to trainee driver on British railroad. played semi- professional football. Enjoyed writing short story's and poetry, did nothing with them. moved in 1976 to the USA, had job as Retail store manager, worked various retail. played soccer, and eventually became a referee, in many many games from high school on up. retired in 2016, where I started to write again. Asims extraordinary journeys, book 1 All for the children, is my first published book.
									</p>

									<p className={style.paramsBio}>
										{/* <span>Born: December 24, 1958 (age 60 years) Joiner Arkansas</span>

											<span>Children: Robert (June 20, 1978) </span>

											<span>Education: Arkansas Northeastern College (1998-2001)</span> */}
									</p>

									<div className={style.authorContainerName}>
										<h2 className={style.authorName}>Tommy L. Davis</h2>
										<p className="sub-cats-ff-paragraph">
											<span className={style.spanFx}>Author</span> |{' '}
											<span className={style.spanFx}>Writer</span>
										</p>
									</div>
								</section>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</Aux>
	);
};

export default abouttheAuthor;
