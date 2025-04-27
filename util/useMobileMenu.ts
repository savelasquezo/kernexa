"use client"

import { useEffect } from "react"

export default function useMobileMenu() {
	useEffect(() => {
		if (typeof window === "undefined") return

		document.querySelectorAll(".tgmenu__wrap li.menu-item-has-children ul").forEach((ul) => {
			const parentLi = ul.closest(".menu-item-has-children")
			if (parentLi && !parentLi.querySelector(".dropdown-btn")) {
				const dropdownBtn = document.createElement("div")
				dropdownBtn.classList.add("dropdown-btn")
				dropdownBtn.innerHTML = '<span class="plus-line"></span>'
				parentLi.appendChild(dropdownBtn)
			}
		})

		const mobileMenu = document.querySelector(".tgmobile__menu")
		if (mobileMenu) {
			const mainMenu = document.querySelector(".tgmenu__wrap .tgmenu__main-menu")
			const mobileMenuOuter = document.querySelector(".tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer")

			if (mainMenu && mobileMenuOuter) {
				mobileMenuOuter.innerHTML = mainMenu.innerHTML
			}
		}

		const dropdownButtons = document.querySelectorAll(".tgmobile__menu li.menu-item-has-children .dropdown-btn")
		const mobileNavToggler = document.querySelector(".mobile-nav-toggler")
		const closeTriggers = document.querySelectorAll(".tgmobile__menu-backdrop, .tgmobile__menu .close-btn")
		const toggleDropdown = function (this: HTMLElement) {
			this.classList.toggle("open")
			const prevUl = this.previousElementSibling as HTMLElement | null
			if (prevUl) {
				prevUl.style.display = prevUl.style.display === "block" ? "none" : "block"
			}
		}

		dropdownButtons.forEach((btn) => btn.addEventListener("click", toggleDropdown))
		const openMobileMenu = () => document.body.classList.add("mobile-menu-visible")
		mobileNavToggler?.addEventListener("click", openMobileMenu)

		const closeMobileMenu = () => document.body.classList.remove("mobile-menu-visible")
		closeTriggers.forEach((trigger) => trigger.addEventListener("click", closeMobileMenu))
		return () => {
			dropdownButtons.forEach((btn) => btn.removeEventListener("click", toggleDropdown))
			mobileNavToggler?.removeEventListener("click", openMobileMenu)
			closeTriggers.forEach((trigger) => trigger.removeEventListener("click", closeMobileMenu))
		}
	}, [])
}
