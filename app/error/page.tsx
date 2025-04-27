
'use client';
import Link from 'next/link'
import { useLanguage } from '@/util/i18next';

export default function Error() {
  const { t } = useLanguage();
	return (
		<main>
			<section className="error-area pt-20">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="error-wrap text-center">
								<div className="ertor-thumb mb-40">
									<img src="/assets/img/others/error.svg" alt="img" />
								</div>
								<div className="section__title">
									<h2 className="title">{t('error.not-found.description')}</h2>
									<div className="tg-button-wrap justify-content-center mt-40">
										<Link href="/" className="btn">
											<span className="btn-text" data-text={t('error.not-found.button')} />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}