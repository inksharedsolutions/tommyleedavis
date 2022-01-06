import React from 'react'
import style from '../../styles/pages.module.scss';


const Links = () =>{
	return(
		<>
			<nav className={style.booklinkBlocks}>
			    <span>Ebook :</span>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Asims-Extraordinary-Journeys-Book-Pardo-ebook/dp/B09P21QXG6/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1640720634&sr=8-1">Amazon</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/asims-extraordinary-journeys-tommy-lee-davis/1140791267?ean=9781648956805">Barnes & Noble</a></li>
				{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/god-answered-me-in-tough-times-my-first-deaf-missionary-trip-to-kenya-africa-in-2006/">Stratton Press</a></li> */}
			</nav>

			<nav className={style.booklinkBlocks}>
				<span>Paperback :</span>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Asims-Extraordinary-Journeys-Book-Pardo/dp/1648956793/ref=sr_1_1?crid=6DU2EHGNJOVP&keywords=9781648956799&qid=1640720739&sprefix=9781648956799%2Caps%2C556&sr=8-1">Amazon</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/asims-extraordinary-journeys-tommy-lee-davis/1140791267?ean=9781648956799">Barnes & Noble</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Asims-Extraordinary-Journeys/Tommy-Lee-Davis/9781648956799?id=8414376593248">Books A Million</a></li>
			</nav>	
		</>	
	)
}

export default Links;
