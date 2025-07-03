'use client';
import Link from 'next/link';
import { useLanguage } from '@/util/i18next';

export default function Footer() {
	const { t } = useLanguage();

	return (
		<footer>
			<div className="footer__area footer__area-one black1-bg">
				<div className="footer__bg-shape1-1">
					<img src="/assets/img/bg/footer_bg.png" alt="img" />
				</div>
				<div className="container">
					<div className="footer__top fix">
						<div className="row gy-40 justify-content-between align-items-center">
							<div className="col-xl-5 col-lg-6">
								<h3 className="footer__top-title">
									{t('footer.joinTitle')}
								</h3>
							</div>
							<div className="col-auto">
								<Link href="/contact" className="btn btn-three">
									<span className="btn-text" data-text={t('footer.writeExperience')}>

									</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="footer__middle">
						<div className="row justify-content-between">
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="footer__widget footer__about">
									<div className="footer__logo">
										<Link href="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
									</div>
									<p className="footer__content mb-35">
										{t('footer.aboutText')}
									</p>
									<div className="social-links">
										<ul className="list-wrap">
											<li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
											<li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
											<li><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></Link></li>
											<li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
											<li><Link href="https://www.skype.com/" target="_blank"><i className="fab fa-skype" /></Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-auto col-md-6">
								<div className="footer__widget footer__links">
									<h4 className="footer__widget-title">{t('footer.quickLinks')}</h4>
									<ul className="list-wrap">
										{['about', 'services', 'appointment', 'blog'].map((key) => (
											<li key={key}>
												<Link href={`/${key}`}>
													<svg width={17} height={14} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M9 1L15 7M15 7L9 13M15 7H0" stroke="currentColor" strokeWidth="1.5" />
													</svg>
													{t(`footer.${key}`)}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="col-xl-auto col-md-6">
								<div className="footer__widget footer__contact">
									<h4 className="footer__widget-title">{t('footer.officeInfo')}</h4>
									<div className="footer__info-item">
										<div className="footer__info-icon"><i className="fas fa-phone-alt" /></div>
										<div className="footer__info-content">
											<h4 className="title">{t('footer.callUs')}</h4>
											<Link href="tel:25621452156">(+256) 2145.2156</Link>
										</div>
									</div>
									<div className="footer__info-item">
										<div className="footer__info-icon"><i className="fas fa-envelope" /></div>
										<div className="footer__info-content">
											<h4 className="title">{t('footer.workWithUs')}</h4>
											<Link href="mailto:info@valom.com">info@valom.com</Link>
										</div>
									</div>
									<div className="footer__info-item">
										<div className="footer__info-icon"><i className="fas fa-map-marker-alt" /></div>
										<div className="footer__info-content">
											<h4 className="title">{t('footer.location')}</h4>
											<p>XYZ Hilton Street, 125</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-auto col-md-6">
								<div className="footer__widget footer__insta-feed-list">
									<h4 className="footer__widget-title">{t('footer.instagram')}</h4>
									<ul className="list-wrap">
										{[1, 2, 3, 4, 5, 6].map(num => (
											<li key={num}>
												<div className="insta-thumb">
													<img src={`/assets/img/widget/ins_post0${num}.jpg`} alt="Image" />
													<Link href="https://instagram.com" className="icon-btn"><i className="fab fa-instagram" /></Link>
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__bottom text-center">
					<div className="container">
						<div className="footer__copyright">
							<Link href="#">Kernexa</Link> - {t('footer.rights')}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
