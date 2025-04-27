'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from 'next/link'
import { useLanguage } from '@/util/i18next';

export default function Index() {
	const { t } = useLanguage();
	const [isOpen, setOpen] = useState(false)
	return (
		<section>
			<div className="video-area-1 pb-120 overflow-hidden position-relative">
				<div className="video-bg-shape1 spin"><img src="/assets/img/bg/video-bg-shape1-1.png" alt="img" /></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7">
							<div className="section__title text-center mb-50">
								<span className="sub-title text-anim">{t('home.section5.subtitle')}</span>
								<h2 className="title text-anim2">{t('home.section5.title')}</h2>
								<p className="mt-4">{t('home.section5.description')}</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="video-wrap1">
								<div className="video-thumb-box1">
									<img src="/assets/img/others/video1-1.png" alt="img" />
									<a onClick={() => setOpen(true)} className="video-link popup-video">
										{t('home.section5.videoButton')} <span className="video-btn"><i className="far fa-play-circle" /></span>
									</a>
									<h4 className="video-text">{t('home.section5.videoText')}</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</section>
	)
}
