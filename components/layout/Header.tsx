'use client';

import Link from 'next/link';
import I18nextUI from '@/util/i18nextUI';
import { useLanguage } from '@/util/i18next';

export default function Header({ scroll, isMobileMenu, handleMobileMenu }: any) {
	const { t, language, setLanguage } = useLanguage();

	return (
		<header>
			<div className="transparent-header">
				<div className="tg-header__top">
					<div className="container">
						<div className="row">
							<div className="col-xl-6 col-md-8">
								<ul className="tg-header__top-info left-side list-wrap">
									<li><i className="far fa-envelope" /><Link href="#">info@valom.com</Link></li>
									<li><i className="far fa-clock" />{t('header.workingHours')}: 6:00am - 9:00pm</li>
								</ul>
							</div>
							<div className="col-xl-6 col-md-4">
								<ul className="tg-header__top-right list-wrap">
									<li>
										<I18nextUI selectedLanguage={language} onLanguageChange={setLanguage} mobileStyle={false}/>
									</li>
									<li className="tg-header__top-social">
										<ul className="list-wrap">
											<li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
											<li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
											<li><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></Link></li>
											<li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div id="sticky-header" className="tg-header__area tg-header__area-four">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="tgmenu__wrap">
									<nav className="tgmenu__nav">
										<div className="logo">
											<Link href="/"><img src="/assets/img/logo/logo-white.svg" alt="Logo" /></Link>
										</div>
										<div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
											<ul className="navigation">
												<li><Link href="/">{t('header.navbar.home')}</Link></li>
												<li><Link href="/about">{t('header.navbar.about')}</Link></li>
												<li><Link href="/service">{t('header.navbar.services')}</Link></li>
												<li><Link href="/blog">{t('header.navbar.blog')}</Link></li>
											</ul>
										</div>
										<div className="tgmenu__action d-none d-md-block">
											<ul className="list-wrap">
												<li>
													<Link href="/appointment" className="btn btn-three menu-tigger">
														<span className="btn-text">{t('header.navbar.cta')}</span>
													</Link>
												</li>
											</ul>
										</div>
										<div className="mobile-nav-toggler d-lg-none d-inline-flex"
											style={{minWidth: 'auto', width: 'auto', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
											<I18nextUI selectedLanguage={language} onLanguageChange={setLanguage} mobileStyle={true}/>
											<Link href="#" className="sidebar-btn" onClick={handleMobileMenu}>
												<span className="line" />
												<span className="line" />
												<span className="line" />
											</Link>
										</div>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Mobile Menu */}
			{isMobileMenu && (
				<div className="tgmobile__menu">
					<nav className="tgmobile__menu-box">
						<div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times" /></div>
						<div className="nav-logo">
							<Link href="/"><img src="/assets/img/logo/logo.svg" alt="Logo" /></Link>
						</div>
						<div className="tgmobile__menu-outer">
							<ul className="navigation">
								<li><Link href="/">{t('header.navbar.home')}</Link></li>
								<li><Link href="/about">{t('header.navbar.about')}</Link></li>
								<li><Link href="/service">{t('header.navbar.services')}</Link></li>
								<li><Link href="/blog">{t('header.navbar.blog')}</Link></li>
								<li><Link href="/appointment">{t('header.navbar.cta')}</Link></li>
							</ul>
						</div>
						<div className="tgmobile__menu-bottom">
							<div className="contact-info">
								<ul className="list-wrap">
									<li>{t('header.email')}: <Link href="mailto:info@valom.com">info@valom.com</Link></li>
									<li>{t('header.phone')}: <Link href="tel:0123456789">+123 888 9999</Link></li>
								</ul>
							</div>
							<div className="social-links">
								<ul className="list-wrap">
									<li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
									<li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
									<li><Link href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp" /></Link></li>
									<li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
									<li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></Link></li>
								</ul>
							</div>
						</div>
					</nav>
					<div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
				</div>
			)}
		</header>
	);
}
