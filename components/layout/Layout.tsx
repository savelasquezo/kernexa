'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import type { FC } from 'react'

import { dataBg } from '@/util/data-bg'
import useMaskImage from '@/util/useMaskImage'
import useMobileMenu from '@/util/useMobileMenu'
import useStickyHeader from '@/util/useStickyHeader'
import AnimatedText from '@/util/useTextAnimation'

import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MobileMenu from './MobileMenu'
import Footer from './Footer'
import Header from './Header'

const BootstrapComponents = dynamic(
	() => import('@/util/BootstrapComponents'),
	{ ssr: false }
) as FC

interface LayoutProps {
	children?: React.ReactNode
	breadcrumbTitle?: string
}

export default function Layout({ breadcrumbTitle, children }: LayoutProps) {
	const [scroll, setScroll] = useState(false)
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

	useEffect(() => {
		const WOW = require('wowjs')
			; (window as any).wow = new WOW.WOW({ live: false })
			; (window as any).wow.init()

		AOS.init()

		const handleScroll = () => {
			const scrollCheck = window.scrollY > 100
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck)
			}
		}

		document.addEventListener('scroll', handleScroll)
		return () => document.removeEventListener('scroll', handleScroll)
	}, [scroll])

	dataBg()
	AnimatedText()
	useMobileMenu()
	useStickyHeader()
	useMaskImage()

	return (
		<>
			<div id="top" />
			<BootstrapComponents />
			<Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
			<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
			<main className="fix">
				{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
				{children}
			</main>
			<Footer />
			<BackToTop target="#top" />
		</>
	)
}
