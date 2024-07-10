import { asset } from '../../assets/assets'

const Faq_Area_Two = () => {
    return (
        <div className="faq-area-home-2 faq-area-2">
            <img
                src={asset.bg_blur_shep_1}
                alt="VRE"
                className="faq-area-2-shep-1 blur-1"
            />
            <img
                src={asset.bg_blur_shep_1}
                alt="VRE"
                className="faq-area-2-shep-2 blur-1"
            />
            <div className="container">
                <div className="title">
                    <div className="sub-title">
                        <p>People Also Ask</p>
                    </div>
                    <div className="main-title">
                        <h3 className="split-collab">
                            Frequently Asked Questions About <br />
                            The Patient For The Public{' '}
                            <span>
                                <img src={asset.text_shep_1} alt="" />
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="faq-wrapper">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-banner vre-reveal-one">
                                <img
                                    src={asset.faq_banner_home_2}
                                    alt="VRE"
                                    className="vre-reveal-image-one"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-inner">
                                <div className="accordion-container">
                                    <div className="accordion-item vre-slide-up-gsap">
                                        <button className="accordion-header font-size-1-20">
                                            Why should I choose Springboard SEO?{' '}
                                            <span className="icon">+</span>
                                        </button>
                                        <div className="accordion-content">
                                            <p className="font-size-1-16">
                                                There are many variations of
                                                passages of available but the Ut
                                                elit tellus <br /> luctus nec
                                                ullamcorper at mattis
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion-item vre-slide-up-gsap">
                                        <button className="accordion-header font-size-1-20">
                                            How long do search engine results
                                            last?{' '}
                                            <span className="icon">+</span>
                                        </button>
                                        <div className="accordion-content">
                                            <p className="font-size-1-16">
                                                There are many variations of
                                                passages of available but the Ut
                                                elit tellus <br /> luctus nec
                                                ullamcorper at mattis
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion-item vre-slide-up-gsap">
                                        <button className="accordion-header font-size-1-20">
                                            Are first place rankings for
                                            competitive
                                            <span className="icon">+</span>
                                        </button>
                                        <div className="accordion-content">
                                            <p className="font-size-1-16">
                                                There are many variations of
                                                passages of available but the Ut
                                                elit tellus <br /> luctus nec
                                                ullamcorper at mattis
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion-item vre-slide-up-gsap">
                                        <button className="accordion-header font-size-1-20">
                                            How much does search engine
                                            <span className="icon">+</span>
                                        </button>
                                        <div className="accordion-content">
                                            <p className="font-size-1-16">
                                                There are many variations of
                                                passages of available but the Ut
                                                elit tellus <br /> luctus nec
                                                ullamcorper at mattis
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion-item vre-slide-up-gsap">
                                        <button className="accordion-header font-size-1-20">
                                            How Can I Take Your Service ?
                                            <span className="icon">+</span>
                                        </button>
                                        <div className="accordion-content">
                                            <p className="font-size-1-16">
                                                There are many variations of
                                                passages of available but the Ut
                                                elit tellus <br /> luctus nec
                                                ullamcorper at mattis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq_Area_Two
