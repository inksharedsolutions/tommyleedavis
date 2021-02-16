import React from 'react'
import style from '../../styles/pages.module.scss';


const Links = () =>{
	return(
		<>
			<nav className={style.booklinkBlocks}>
			    <span>Ebooks :</span>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Asims-Extraordinary-Journeys-Rogue-Elephants-ebook/dp/B08SYF8KBS/ref=sr_1_1?dchild=1&keywords=9781648953095&qid=1610655850&sr=8-1">Amazon</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/asims-extraordinary-journeys-tommy-lee-davis/1138618503?ean=9781648953095">Barnes & Noble</a></li>
				{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/god-answered-me-in-tough-times-my-first-deaf-missionary-trip-to-kenya-africa-in-2006/">Stratton Press</a></li> */}
			</nav>

			<nav className={style.booklinkBlocks}>
				<span>Purchase Paperback :</span>
				{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Asims-Extraordinary-Journeys-Book-Children/dp/1648951236/ref=sr_1_1?dchild=1&keywords=9781648951237&qid=1613496220&sr=8-1">Amazon</a></li> */}
				{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/asims-extraordinary-journeys-tommy-lee-davis/1138618503?ean=9781648953088">Barnes & Noble</a></li> */}
				{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Asims-Extraordinary-Journeys/Tommy-Lee-Davis/9781648951237?id=8049069540563&_ga=2.30633085.372123677.1613496109-2145380449.1604906972">Books A Million</a></li> */}
			</nav>	
		</>	
	)
}

export default Links;