
'use client';
import Breadcrumb from '@/components/layout/Breadcrumb'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useLanguage } from '@/util/i18next';

export default function Index() {
	const { t } = useLanguage();
	return (
		<Layout>
			<Breadcrumb breadcrumbTitle={t('pages.blog.breadcrumb')} />
			<section className="blog-area-4 pt-120 pb-120">
				<div className="container">
					<div className="row gy-30 justify-content-center">
						{[...Array(6)].map((_, index) => (
							<div className="col-xl-4 col-md-6">
								<div className="blog__post-item blog__post-item-two">
									<div className="blog__post-thumb">
										<Link href="/blog-details">
											<img src="/assets/img/blog/blog-g-1-1.jpg" alt="img" />
										</Link>
										<div className="blog__post-date">{t('pages.blog.postDate.day')} <span>{t('pages.blog.postDate.month')}</span></div>
									</div>
									<div className="blog__post-meta">
										<ul className="list-wrap">
											<li>
												<Link href="/blog-details">
													<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M8 0C3.5625 0 0 3.59375 0 8C0 12.4375 3.5625 16 8 16C12.4062 16 16 12.4375 16 8C16 3.59375 12.4062 0 8 0ZM8 15C6.5 15 5.125 14.5625 4 13.7812C4.125 12.2188 5.40625 11 7 11H9C10.5625 11 11.8438 12.2188 11.9688 13.7812C10.8438 14.5625 9.46875 15 8 15ZM12.8438 13.0312C12.4062 11.3125 10.8438 10 9 10H7C5.125 10 3.5625 11.3125 3.125 13.0312C1.8125 11.75 1 9.96875 1 8C1 4.15625 4.125 1 8 1C11.8438 1 15 4.15625 15 8C15 9.96875 14.1562 11.75 12.8438 13.0312ZM8 4C6.59375 4 5.5 5.125 5.5 6.5C5.5 7.90625 6.59375 9 8 9C9.375 9 10.5 7.90625 10.5 6.5C10.5 5.125 9.375 4 8 4ZM8 8C7.15625 8 6.5 7.34375 6.5 6.5C6.5 5.6875 7.15625 5 8 5C8.8125 5 9.5 5.6875 9.5 6.5C9.5 7.34375 8.8125 8 8 8Z" fill="currentColor" />
													</svg>
													{t('pages.blog.author')}
												</Link>
											</li>
											<li>
												<Link href="/blog-details">
													<svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.5 4.25C2.5 3.84375 2.8125 3.5 3.25 3.5C3.65625 3.5 4 3.84375 4 4.25C4 4.6875 3.65625 5 3.25 5C2.8125 5 2.5 4.6875 2.5 4.25ZM6.375 1C6.75 1 7.15625 1.1875 7.4375 1.46875L12.8125 6.84375C13.5938 7.625 13.5938 8.90625 12.8125 9.6875L8.65625 13.8438C7.875 14.625 6.59375 14.625 5.8125 13.8438L0.4375 8.46875C0.15625 8.1875 0 7.78125 0 7.40625V2.5C0 1.6875 0.65625 1 1.5 1H6.375ZM1.125 7.75L6.53125 13.1562C6.90625 13.5312 7.5625 13.5312 7.9375 13.1562L12.125 8.96875C12.5 8.59375 12.5 7.9375 12.125 7.5625L6.71875 2.15625C6.625 2.0625 6.5 2 6.375 2H1.5C1.21875 2 1 2.25 1 2.5V7.40625C1 7.53125 1.03125 7.65625 1.125 7.75ZM9.625 1.15625C9.8125 0.96875 10.125 0.96875 10.3438 1.15625L14.75 5.375C16.4062 6.9375 16.4062 9.59375 14.75 11.1562L10.8438 14.875C10.6562 15.0625 10.3438 15.0625 10.1562 14.875C9.96875 14.6562 9.96875 14.3438 10.1562 14.1562L14.0625 10.4375C15.2812 9.25 15.2812 7.28125 14.0625 6.09375L9.625 1.875C9.4375 1.6875 9.4375 1.375 9.625 1.15625Z" fill="currentColor" />
													</svg>
													{t('pages.blog.category')}
												</Link>
											</li>
										</ul>
									</div>
									<div className="blog__post-content">
										<h4 className="title">
											<Link href="/blog-details">
												{t('pages.blog.postTitle')}
											</Link>
										</h4>
										<p className="text">
											{t('pages.blog.postDescription')}
										</p>
										<div className="blog__post-bottom">
											<Link href="/blog-details" className="link-btn">
												{t('pages.blog.readDetails')}
												<i className="fas fa-arrow-right ms-1" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="pagination__wrap mt-60">
						<ul className="list-wrap d-flex flex-wrap justify-content-center">
							<li><span className="page-numbers current">1</span></li>
							<li><Link href="#" className="page-numbers">2</Link></li>
							<li><Link href="#" className="page-numbers">3</Link></li>
							<li><Link href="#" className="page-numbers">4</Link></li>
							<li><Link href="#" className="page-numbers">
								<svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.6875 6.3125C8.09375 6.6875 8.09375 7.34375 7.6875 7.71875L2.6875 12.7188C2.5 12.9062 2.25 13 2 13C1.71875 13 1.46875 12.9062 1.28125 12.7188C0.875 12.3438 0.875 11.6875 1.28125 11.3125L5.5625 7L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L7.6875 6.3125ZM13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L11.5625 7L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125Z" fill="currentColor" />
								</svg>
							</Link></li>
						</ul>
					</div>
				</div>
			</section>
		</Layout>
	)
}