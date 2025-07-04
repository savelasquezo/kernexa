'use client';
import CounterUp from '@/components/elements/CounterUp';
import { useLanguage } from '@/util/i18next';

export default function Index() {
	const { t } = useLanguage();
	return (
		<section className="feature-area-2 pt-120 pb-120 overflow-hidden">
			<div className="container">
				<div className="feature-wrap2">
					<div className="row gx-60 gy-5 align-items-center flex-row-reverse">
						<div className="col-xl-6 text-xl-end">
							<div className="feature-thumb2-1">
								<div className="img1 image-anim">
									<img src="/assets/img/others/feature2-1.jpg" alt="img" />
								</div>
								<div className="img2 jump image-anim">
									<div className="thumb">
										<img src="/assets/img/others/feature2-2.jpg" alt="img" />
									</div>
								</div>
								<div className="feature-counter-wrap">
									<div className="box-icon">
										<img src="/assets/img/icon/feature-counter-icon2-1.svg" alt="img" />
									</div>
									<h3 className="box-counter"><CounterUp>100</CounterUp>%</h3>
									<p className="box-text">{t('home.section4.successLabel')}</p>
								</div>
							</div>
						</div>
						<div className="col-xl-6">

							<div className="about-grid-wrap style3">
								<div className="about-grid-card style3">
									<div className="box-icon">
										<img src="/assets/img/icon/feature-icon2-1.svg" alt="img" />
									</div>
									<div className="card-details">
										<h4 className="box-title">{t('home.section4.features.0.title')}</h4>
										<p className="box-text">{t('home.section4.features.0.text')}</p>
									</div>
								</div>
								<div className="about-grid-card style3">
									<div className="box-icon">
										<img src="/assets/img/icon/feature-icon2-1.svg" alt="img" />
									</div>
									<div className="card-details">
										<h4 className="box-title">{t('home.section4.features.1.title')}</h4>
										<p className="box-text">{t('home.section4.features.1.text')}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
