import React, { Route } from 'react';
import Aux from '../hoc/Auxiliary';
import style from '../styles/pages.module.scss';
import Header from '../components/header';
import BookLinks from '../components/Links/links';
import Book2Links from '../components/Links/book2Links';
import Book3Links from '../components/Links/book3Links';
import Book4Links from '../components/Links/book4Links';
import Footer from '../components/Footer/Footer';
import mainBook from '../asset/Books/book1_front.png';
import book2 from '../asset/Books/book2_front.png';
import book3 from '../asset/Books/book3_front.png';
import book4 from '../asset/Books/book4_front.png';
import { DiscussionEmbed } from 'disqus-react';
import {Helmet} from 'react-helmet';

class aboutTheBook extends React.Component {
	render() {
		const row = [ 'row', style.rowMarginBottom ];
		const slug = this.props.location.href;

		const disqusConfig = {
			shortname: 'tommy-lee-davis',
			config: { identifier: 12, slug }
		};

		return (
			<Aux>
				<Helmet title="Books | Tommy Lee Davis"/>
				<div className={style.flexWrapper}>
					<Header currLocation={this.props.location} />
					<main className={style.wrapperMain}>
						<div className="container">
							<div className={row.join(' ')}>
								<div className="col l6 m12 s12">
									<div className={style.bookImgContainer}>
										<img src={mainBook} />
									</div>
								</div>

								<div className="col l6 m12 s12">
									<section className={style.contentBook}>
										<h2 className={style.headingBookIntro}>ASIM'S EXTRAORDINARY JOURNEYS</h2>
										<p className={style.subCatsParagph}>
											Book 1: All for the Children
										</p>
										<p>
											In a magical time where monsters, warlocks, and wicked kings rule the lands, a quiet night in a small village life is shattered. A king's army, riding in on horseback, snatch up all the male children, shackling them to a raggedy cart. They disappear back into the darkness where they came from, leaving most villagers dead and their houses burning.
										</p>

										<p>
											A small group of surviving villagers set out in search of Asim, a warrior known to help the oppressed. After he agrees to help, they all embark on an extraordinary journey crossing through thick forests, expansive rivers, and great mountains and encountering dragons, monsters, goblins, dwarfs, and witches who continually put their lives in jeopardy. They recruit an assortment of female warriors, dwarfs, and robbers along the way to the king's castle, where they have to fight an army and a warlock to rescue the children.
										</p>
									</section>

									<BookLinks />
								</div>
							{/* </div>

							<div className={row.join(' ')}> */}
								<div className="col l6 m12 s12">
									<div className={style.bookImgContainer}>
										<img src={book2} />
									</div>
								</div>

								<div className="col l6 m12 s12">
									<section className={style.contentBook}>
										<h2 className={style.headingBookIntro}>ASIM'S EXTRAORDINARY JOURNEYS</h2>
										<p className={style.subCatsParagph}>
											Book 2: The Rogue Elephants of Ghant
										</p>
										<p>
											It was a magical time of wicked kings and monsters. This second book takes Asim and his brave warriors on an epic journey, as they cross the lands to help those less fortunate, those not able to help themselves. This time, they are on a journey to Ghant to help two tribes; plagued by robbers; who kill not only elephants to steal their ivory tusks; but the tribesmen guarding them too.
										</p>

										<p>
											The author takes you on an extraordinary journey, where you will encounter strange people, places, wizards, witches, and dragons along the way. Go with Asim and his friends on this fun packed but perilous journey through the mountains, forests, and villages as they put their lives on the line to try and end this ever-growing plight.
										</p>
									</section>

									<Book2Links />
								</div>
							{/* </div>

							<div className={row.join(' ')}> */}
								<div className="col l6 m12 s12">
									<div className={style.bookImgContainer}>
										<img src={book3} />
									</div>
								</div>

								<div className="col l6 m12 s12">
									<section className={style.contentBook}>
										<h2 className={style.headingBookIntro}>ASIM'S EXTRAORDINARY JOURNEYS</h2>
										<p className={style.subCatsParagph}>
											Book 3: The Hunt for the Crystal Chalice of Myru
										</p>
										<p>
											In the magical times, of wicked kings and monsters. This third book, takes you on an epic journey spanning several mystical regions, Asim and his warriors are on an actions packet adventure, through immerse battles, as they put their lives in peril, from warlocks, and one eyed giants, plus more strange and dangerous creatures along the way. As they hunt for the magical, crystal chalice of Myru.
										</p>
									</section>

									<Book3Links />
								</div>

								<div className="col l6 m12 s12">
									<div className={style.bookImgContainer}>
										<img src={book4} />
									</div>
								</div>

								<div className="col l6 m12 s12">
									<section className={style.contentBook}>
										<h2 className={style.headingBookIntro}>ASIM'S EXTRAORDINARY JOURNEYS</h2>
										<p className={style.subCatsParagph}>
											Book 4: Pardo the Frog King
										</p>
										<p>
											It was a magical time of wicked kings and monsters. In this fourth book,
											it finds Asim and his warriors, joining forces with Prince Kala of Skorn,
											on his hunt for Pardo the Frog King, as he tries desperately to save
											Princess Laalu, his younger sisters life. The head to the Old Lands,
											where this epic journey takes them through swamps, hills, and high mountain,
											encountering a vast number of obstacles, from warlocks, to elves, Mangwa's,
											and the five headed Hurtyg, plus many many more, strange things, putting
											their lives in peril, all along the way through the swamp filled lands,
											to find, and battle, the frog people, in Pardo's fortified village. A
											must read for fantasy lovers, to follow Asim and his warriors.
										</p>
									</section>

									<Book4Links />
								</div>
							</div>

							<div className={style.commentSection}>
								<DiscussionEmbed {...disqusConfig} />
							</div>
						</div>
					</main>
					<Footer />
				</div>
			</Aux>
		);
	}
}

export default aboutTheBook;
