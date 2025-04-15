
import Link from "next/link"
export default function Error() {
	return (
		<main>
			{/*==============================
			Error Area
			==============================*/}
			<section className="error-area pt-20">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="error-wrap text-center">
								<div className="ertor-thumb mb-40">
									<img src="/assets/img/others/error.svg" alt="img" />
								</div>
								<div className="section__title">
									<h2 className="title">Oops! Nothing Was Found</h2>
									<div className="tg-button-wrap justify-content-center mt-40">
										<Link href="/" className="btn">
											<span className="btn-text" data-text="Back To Homepage" />
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