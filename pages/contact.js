import Link from 'next/Link'
import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Headlink from '../comps/Headlink'
export 	default function contact(){
	return (
		<>
		<Head>
			<Headlink />
		</Head>
		<main>
			{/* <div class="loader_bg">
				<div class="loader"><img src="images/loading.gif" alt="#" /></div>
			</div> */}
			<Navbar />
		</main>

		</>
		)
}