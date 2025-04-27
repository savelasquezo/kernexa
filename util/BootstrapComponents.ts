"use client"
import { Collapse, Tab } from "bootstrap"
import type { FC } from "react"
import { useEffect } from "react"

interface BootstrapComponentsProps { }


const BootstrapComponents: FC<BootstrapComponentsProps> = () => {
	useEffect(() => {
		if (typeof window !== "undefined" && typeof document !== "undefined") {
			document.body.style.removeProperty("overflow")
			document.body.style.removeProperty("padding-right")

			const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
			tooltipTriggerList.forEach((tooltipTriggerEl) => new Tab(tooltipTriggerEl))

			const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
			popoverTriggerList.forEach((popoverTriggerEl) => new Tab(popoverTriggerEl))

			const tabTriggerList = document.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]')
			tabTriggerList.forEach((tabTriggerEl) => new Tab(tabTriggerEl))

			const accordionHeaders = document.querySelectorAll<HTMLElement>('[data-bs-toggle="collapse"]')
			accordionHeaders.forEach((header) => {
				const handleClick = () => {
					const target = header.getAttribute("data-bs-target")
					if (target) {
						const collapseElement = document.querySelector(target)
						if (collapseElement) {
							const collapseInstance = Collapse.getOrCreateInstance(collapseElement)
							collapseInstance.toggle()
						}
					}
				}

				header.addEventListener("click", handleClick)
				header.dataset.handleClick = handleClick.toString()
			})

			return () => {
				accordionHeaders.forEach((header) => {
					const handleClick = new Function("return " + header.dataset.handleClick)()
					header.removeEventListener("click", handleClick)
					delete header.dataset.handleClick
				})
			}
		}
	}, [])

	return null
}

export default BootstrapComponents