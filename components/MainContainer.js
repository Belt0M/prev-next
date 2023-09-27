import Head from 'next/head'
import React from 'react'
import A from './A'

const MainContainer = ({ children, keywords }) => {
	return (
		<>
			<Head>
				<meta keywords={'website, beltom, ' + keywords}></meta>
				<title>Next App</title>
			</Head>
			<div className='navbar'>
				<A href='/' text='Home' />
				<A href='/users' text='Users' />
			</div>
			<div>{children}</div>
			<style jsx>{`
				.navbar {
					background: #000000cc;
					color: #fff;
					height: 3.5rem;
					display: flex;
					align-items: center;
				}
			`}</style>
		</>
	)
}

export default MainContainer
