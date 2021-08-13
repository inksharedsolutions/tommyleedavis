import React from 'react'
import style from '../../styles/pages.module.scss';


const Links = () =>{
	return(
		<>
			<nav className={style.booklinkBlocks}>
			    <span>Ebook :</span>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Asims-Extraordinary-Journeys-Crystal-Chalice-ebook/dp/B09C23KCD5/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1628836484&sr=8-1">Amazon</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/asims-extraordinary-journeys-tommy-lee-davis/1139976651?ean=9781648954795">Barnes & Noble</a></li>
				{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/god-answered-me-in-tough-times-my-first-deaf-missionary-trip-to-kenya-africa-in-2006/">Stratton Press</a></li> */}
			</nav>

			<nav className={style.booklinkBlocks}>
				<span>Paperback :</span>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Asims-Extraordinary-Journeys-Crystal-Chalice/dp/1648954782/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1628836484&sr=8-1">Amazon</a></li>
				<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/asims-extraordinary-journeys-tommy-lee-davis/1139976651?ean=9781648954788">Barnes & Noble</a></li>
				{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/God-Answered-Tough-Times/Carl-Moore/9781643457284?id=8049069540563&_ga=2.136780400.1998066025.1605877581-2145380449.1604906972">Books A Million</a></li> */}
			</nav>	
		</>	
	)
}

export default Links;