'use client';
import Link from 'next/link';
import { useLanguage } from '@/util/i18next';

export default function Section7() {
	const { t } = useLanguage();

	return (
		<section className="blog-area-1 pt-120 pb-120">
			<div className="container">
				<div className="section__title mb-50 text-center">
					<span className="sub-title text-anim">{t('home.section7.subtitle')}</span>
					<h2 className="title text-anim2">{t('home.section7.title')}</h2>
				</div>
				<div className="row gy-40 justify-content-center">
					<div className="col-xl-4 col-md-6">
						<div className="blog__post-item blog__post-item-two blog__post-item-three">
							<div className="blog__post-thumb image-anim">
								<Link href="/blog-details"><img src="/assets/img/blog/1-1.jpg" alt="img" /></Link>
								<div className="blog__post-date">15 <span>Jan</span></div>
							</div>
							<div className="blog__post-content">
								<h3 className="title">
									<Link href="/blog-details">{t('home.section7.posts.0.title')}</Link>
								</h3>
								<p className="text">{t('home.section7.posts.0.description')}</p>
								<div className="blog__post-bottom">
									<Link href="/blog-details" className="link-btn">{t('home.section7.readMore')}<i className="fas fa-arrow-right" /></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="blog__post-item blog__post-item-two blog__post-item-three">
							<div className="blog__post-thumb image-anim">
								<Link href="/blog-details"><img src="/assets/img/blog/1-2.jpg" alt="img" /></Link>
								<div className="blog__post-date">20 <span>FEB</span></div>
							</div>
							<div className="blog__post-content">
								<h3 className="title"><Link href="/blog-details">{t('home.section7.posts.1.title')}</Link></h3>
								<p className="text">{t('home.section7.posts.1.description')}</p>
								<div className="blog__post-bottom">
									<Link href="/blog-details" className="link-btn">{t('home.section7.readMore')}<i className="fas fa-arrow-right" /></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="blog__post-item blog__post-item-two blog__post-item-three">
							<div className="blog__post-thumb image-anim">
								<Link href="/blog-details"><img src="/assets/img/blog/1-3.jpg" alt="img" /></Link>
								<div className="blog__post-date">05 <span>JUN</span></div>
							</div>
							<div className="blog__post-content">
								<h3 className="title">
									<Link href="/blog-details">{t('home.section7.posts.2.title')}</Link>
								</h3>
								<p className="text">{t('home.section7.posts.2.description')}</p>
								<div className="blog__post-bottom">
									<Link href="/blog-details" className="link-btn">{t('home.section7.readMore')}<i className="fas fa-arrow-right" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
