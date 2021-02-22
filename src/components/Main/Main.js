import React from "react"
import { Link } from "gatsby"
import Aux from "../../hoc/Auxiliary"
import style from "./Main.module.scss"
import BookImage from '../../asset/Books/book1_front.png'
import AuthorImage from '../../asset/author/author.png'

const Main = () => {

	const col ='col l6 m12 s12';
	const sectionWrapper = [ col , style.authorBio];
	const bookCont = [ col , style.bookContMobile];

	return(
		<Aux>
			<main className={style.mainSection}>
				<div className="container" id={style.mobileContainers}>
					<div className="row">
						<section className={col}>
							<div className={style.boxstylusContainer}>
								<section className={style.sectioncontentColumn}>
								
									<p className={style.tagline}>
										about the book <span className={style.taglineLinear}></span>
									</p>

									<h1 className={style.headingFrontline}>ASIM'S EXTRAORDINARY JOURNEYS</h1>
									<span className={style.spanTagLeters}><p><span className={style.spanFlex}>BOOK 1: ALL FOR THE CHILDREN</span></p></span>

									<p className={style.subcontent}>
									In a magical time where monsters, warlocks, and wicked kings rule the lands, a quiet night in a small village life is shattered. A king's army, riding in on horseback, snatch up all the male children, shackling them to a raggedy cart. They disappear back into the darkness where they came from, leaving most villagers dead and their houses burning.
									</p>

									<div className={style.buttonLayouts}>
										<Link to="/books">Read More</Link>
									</div>
								</section>
							</div>
						</section>

						<section className={bookCont.join(' ')}>
							<div className={style.bookimageContainer} id={style.bookImageContOff}>
								<img alt="books" src={BookImage} />
							</div>
						</section>
						
					</div>
				</div>
			</main>

			<main className={style.lowerMain}>
				<div className="container" id={style.mobileContainers}>
				  	<div className='row'>
				  		<section className={col}>
				  			 <div className={style.authorImagecontainer}>
				  			 	<img src={AuthorImage} />
				  			 </div>
				  		</section>		

				  		<section className={sectionWrapper.join(' ')}>

				  			<div className={style.sectioncontentColumn}>
									<p className={style.tagline}>
										about the author<span className={style.taglineLinear}></span>
									</p>
									<h1 className={style.headingFrontline}>
										Tommy Lee<span className={style.spanTagLetters}>Davis</span>
									</h1>

									<p className={style.subcontent}>
									I was born in Welwyn Garden City, in Hertfordshire, England. My mother was English and my father was American, who met in England during WW2. On October 1st 1949, spent early years there from 3 to 7, moved with parents and older brother to the USA, as my grandfather almost died.
									</p>

									<div className={style.buttonLayouts}>
										<Link to="/about-the-author">Read Full Bio</Link>
									</div>
								</div>
				  		</section>
				  	</div>
				</div>
			</main>
		</Aux>
	)
}

export default Main;
