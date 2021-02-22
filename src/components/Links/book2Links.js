import React from 'react'
import style from '../../styles/pages.module.scss';


const Links = () =>{
	return(
		<>
			<nav className={style.booklinkBlocks}>
			    <span>Ebook :</span>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Asims-Extraordinary-Journeys-Rogue-Elephants-ebook/dp/B08SYF8KBS/ref=sr_1_1?dchild=1&keywords=9781648953095&qid=1610655850&sr=8-1">Amazon</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/asims-extraordinary-journeys-tommy-lee-davis/1138618503?ean=9781648953095">Barnes & Noble</a></li>
				{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/god-answered-me-in-tough-times-my-first-deaf-missionary-trip-to-kenya-africa-in-2006/">Stratton Press</a></li> */}
			</nav>

			<nav className={style.booklinkBlocks}>
				<span>Paperback :</span>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/dp/1648953085?ie=UTF8&n=133140011">Amazon</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/asims-extraordinary-journeys-tommy-lee-davis/1138618503?ean=9781648953088">Barnes & Noble</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Asims-Extraordinary-Journeys/Tommy-Lee-Davis/9781648953088?id=8049069540563&_ga=2.245754509.842392832.1614032450-2145380449.1604906972">Books A Million</a></li>
			</nav>	
		</>	
	)
}

export default Links;