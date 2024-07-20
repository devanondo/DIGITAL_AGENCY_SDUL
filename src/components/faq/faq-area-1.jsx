import { asset } from '../../assets/assets'
import AnimateTitle from '../shared/gsap/split-collab'

const Faq_Area_One = () => {
    return (
        <section className="faq-area-1">
            <img
                src={asset.bg_blur_shep_1}
                alt="VRE"
                className="faq-area-1-area-shep-1 blur-1"
            />
            <div className="container">
                <div className="faq-area-wrapper-1">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-4 col-lg-5">
                            <div className="faq-area-1-left">
                                <div className="title">
                                    <div className="sub-title">
                                        <p>FAQ</p>
                                    </div>
                                    <div className="main-title">
                                        <AnimateTitle className="split-collab">
                                            Frequently Asked <br />
                                            Questions
                                            <span className="absolute">
                                                <img
                                                    src={asset.text_shep_1}
                                                    alt=""
                                                />
                                            </span>
                                        </AnimateTitle>
                                    </div>
                                </div>
                                <p className="font-size-1-16">
                                    Sed ut perspiciatis unde omniste natus
                                    voluptatem accusantiume rem aperia eaque
                                    quae abillo inventore veritatis quasi
                                    architecto beatae vitae
                                </p>
                                <div className="faq-area-1-btn">
                                    <a
                                        href="#"
                                        className="btn-primary-style btn-2 hero-info-btn btn-3"
                                    >
                                        Read More
                                        <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 offset-xl-1 col-lg-7">
                            <div className="faq-inner">
                                <div className="accordion-container">
                                    <div className="accordion-item vre-slide-up-gsap">
                                        <button className="accordion-header font-size-1-20">
                                            Why should I choose Springboard SEO?{' '}
                                            <span className="icon icon-1">
                                                <i className="fa-solid fa-angle-right"></i>
                                            </span>
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
                                            <span className="icon icon-1">
                                                <i className="fa-solid fa-angle-right"></i>
                                            </span>
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
                                            <span className="icon icon-1">
                                                <i className="fa-solid fa-angle-right"></i>
                                            </span>
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
                                            <span className="icon icon-1">
                                                <i className="fa-solid fa-angle-right"></i>
                                            </span>
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
                                            <span className="icon icon-1">
                                                <i className="fa-solid fa-angle-right"></i>
                                            </span>
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
        </section>
    )
}
export default Faq_Area_One
