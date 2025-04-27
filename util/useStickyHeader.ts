"use client"
import { useEffect, useState } from "react"

export default function useStickyHeader() {
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		if (typeof window === "undefined") return
		const handleScroll = () => {
			const scroll = window.scrollY
			setIsSticky(scroll >= 245)
		}

		window.addEventListener("scroll", handleScroll)
		handleScroll()
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	useEffect(() => {
		const stickyHeader = document.getElementById("sticky-header")
		const scrollToTarget = document.querySelector(".scroll-to-target")
		const headerFixedHeight = document.getElementById("header-fixed-height")

		if (stickyHeader) {
			stickyHeader.classList.toggle("sticky-menu", isSticky)
		}
		if (scrollToTarget) {
			scrollToTarget.classList.toggle("open", isSticky)
		}
		if (headerFixedHeight) {
			headerFixedHeight.classList.toggle("active-height", isSticky)
		}
	}, [isSticky])

	return { isSticky }
}
