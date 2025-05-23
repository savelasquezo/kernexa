
'use client';
import Breadcrumb from '@/components/layout/Breadcrumb'
import Layout from "@/components/layout/Layout"
import { useLanguage } from '@/util/i18next';

export default function Index() {
  const { t } = useLanguage();
  return (
    <Layout>
      <Breadcrumb breadcrumbTitle={t('pages.appointment.breadcrumbTitle')} />
      <section className="appointment-area pt-120 pb-120">
        <div className="container">
          <div className="appointment-wrap2">
            <div className="appointment-thumb2 d-lg-block d-none">
              <img src="/assets/img/others/appointment2-1.png" alt="img" />
            </div>
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="appointment-form-wrap">
                  <div className="section__title mb-30">
                    <h4 className="title">{t('pages.appointment.formTitle')}</h4>
                  </div>
                  <form action="mail.php" method="POST" className="appointment__form ajax-contact">
                    <div className="row gy-20">
                      <div className="col-xl-6">
                        <div className="form-group">
                          <input type="text" className="form-control style-border3" name="name" id="name" placeholder={t('pages.appointment.placeholderName')} />
                          <label className="form-icon-right2">
                            <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 8C4.78125 8 3 6.21875 3 4C3 1.8125 4.78125 0 7 0C9.1875 0 11 1.8125 11 4C11 6.21875 9.1875 8 7 8ZM7 1C5.34375 1 4 2.375 4 4C4 5.65625 5.34375 7 7 7C8.625 7 10 5.65625 10 4C10 2.375 8.625 1 7 1ZM8.5625 9.5C11.5625 9.5 14 11.9375 14 14.9375C14 15.5312 13.5 16 12.9062 16H1.0625C0.46875 16 0 15.5312 0 14.9375C0 11.9375 2.40625 9.5 5.40625 9.5H8.5625ZM12.9062 15C12.9375 15 13 14.9688 13 14.9375C13 12.5 11 10.5 8.5625 10.5H5.40625C2.96875 10.5 1 12.5 1 14.9375C1 14.9688 1.03125 15 1.0625 15H12.9062Z" fill="currentColor" />
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <input type="text" className="form-control style-border3" name="email" id="email" placeholder={t('pages.appointment.placeholderEmail')} />
                          <label className="form-icon-right2">
                            <svg width={16} height={12} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 2C0 0.90625 0.875 0 2 0H14C15.0938 0 16 0.90625 16 2V10C16 11.125 15.0938 12 14 12H2C0.875 12 0 11.125 0 10V2ZM1 2V3.25L7.09375 7.75C7.625 8.125 8.34375 8.125 8.875 7.75L15 3.25V2C15 1.46875 14.5312 1 14 1H1.96875C1.4375 1 0.96875 1.46875 0.96875 2H1ZM1 4.5V10C1 10.5625 1.4375 11 2 11H14C14.5312 11 15 10.5625 15 10V4.5L9.46875 8.5625C8.59375 9.1875 7.375 9.1875 6.5 8.5625L1 4.5Z" fill="currentColor" />
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <select name="subject" id="subject" className="form-select style-border3">
                            <option selected hidden>{t('pages.appointment.selectService')}</option>
                            <option value="Business">{t('pages.appointment.serviceBusiness')}</option>
                            <option value="Managment">{t('pages.appointment.serviceManagement')}</option>
                            <option value="Analysis">{t('pages.appointment.serviceAnalysis')}</option>
                          </select>
                          <label className="form-icon-right2">
                            <svg width={16} height={8} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.125 0.6875C1.21875 0.5625 1.34375 0.5 1.5 0.5C1.59375 0.5 1.71875 0.53125 1.8125 0.625L7.96875 6.28125L14.1562 0.625C14.3438 0.4375 14.6562 0.4375 14.8438 0.65625C15.0312 0.84375 15.0312 1.15625 14.8125 1.34375L8.3125 7.34375C8.125 7.53125 7.84375 7.53125 7.65625 7.34375L1.15625 1.34375C0.9375 1.1875 0.9375 0.875 1.125 0.6875Z" fill="currentColor" />
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <input type="text" className="date-pick form-control style-border3" name="date" id="date-pick" placeholder={t('pages.appointment.placeholderDate')} />
                          <label className="form-icon-right2">
                            <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2H10.75V0.75C10.75 0.34375 10.4062 0 10 0C9.625 0 9.25 0.34375 9.25 0.75V2H4.75V0.75C4.75 0.34375 4.40625 0 4 0C3.5625 0 3.25 0.34375 3.25 0.75V2H2C0.875 2 0 2.90625 0 4V14C0 15.125 0.875 16 2 16H12C13.0938 16 14 15.125 14 14V4C14 2.90625 13.0938 2 12 2ZM12 14.5H2C1.71875 14.5 1.5 14.2812 1.5 14V6H12.5V14C12.5 14.2812 12.25 14.5 12 14.5Z" fill="currentColor" />
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <input type="text" className="time-pick form-control style-border3" name="time" id="time-pick" placeholder={t('pages.appointment.placeholderTime')} />
                          <label className="form-icon-right2">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.25 3.75C7.25 3.34375 7.5625 3 8 3C8.40625 3 8.75 3.34375 8.75 3.75V7.625L11.4062 9.375C11.75 9.625 11.8438 10.0938 11.5938 10.4375C11.375 10.7812 10.9062 10.875 10.5625 10.625L7.5625 8.625C7.375 8.5 7.25 8.25 7.25 8V3.75ZM8 0C12.4062 0 16 3.59375 16 8C16 12.4375 12.4062 16 8 16C3.5625 16 0 12.4375 0 8C0 3.59375 3.5625 0 8 0ZM1.5 8C1.5 11.5938 4.40625 14.5 8 14.5C11.5625 14.5 14.5 11.5938 14.5 8C14.5 4.4375 11.5625 1.5 8 1.5C4.40625 1.5 1.5 4.4375 1.5 8Z" fill="currentColor" />
                            </svg>
                          </label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn mt-30">
                      <span className="btn-text" data-text={t('pages.appointment.submitText')}></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}