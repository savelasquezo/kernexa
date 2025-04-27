'use client';
import Link from 'next/link'
import { useLanguage } from '@/util/i18next';

export default function Index() {
	const { t } = useLanguage();
	return (
		<section className="hero-wrapper hero-3 overflow-hidden bg-cover" data-background="assets/img/hero/hero-bg3-1.png">
			<div className="container">
				<div className="row gy-5 align-items-center">
					<div className="col-lg-6">
						<div className="hero-style3">
							<h1 className="hero-title">
								<span>{t('home.section1.title.span')}</span> {t('home.section1.title.rest')}
							</h1>
							<div className="hero-text text-white">
								{t('home.section1.subtitle')}
							</div>
							<div className="tg-button-wrap mt-40">
								<Link href="/appointment" className="btn btn-three">
									<span className="btn-text" data-text={t('home.section1.cta')} />
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="hero-thumb3">
							<div className="img1">
								<img src="/assets/img/hero/hero-3-1.png" alt="img" />
							</div>
							<div className="img2">
								<img src="/assets/img/hero/hero-3-2.png" alt="img" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
