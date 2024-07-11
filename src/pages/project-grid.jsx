import { asset } from '../assets/assets'
import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'

const Project_Grid = () => {
    return (
        <>
            <Breadcrumb pageName="Project Grid" />
            <section className="offer-area-home-3 project-grid-area">
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="project-grid-area-1-shep-1 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="project-grid-area-1-shep-2 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="project-grid-area-1-shep-3 blur-1"
                />
                <div className="container">
                    <div className="project-grid-btn">
                        <ul>
                            <li data-filter="*">Show All</li>
                            <li data-filter=".cat-1">Business</li>
                            <li data-filter=".cat-2">Cyber Security</li>
                            <li data-filter=".cat-3">Development</li>
                            <li data-filter=".cat-4">Branding</li>
                        </ul>
                    </div>
                    <div className="offer-wrapper">
                        <div className="row justify-content-center project-grid-active">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="offer-inner vre-reveal-one three four">
                                    <img
                                        src={asset.offer_1_home_3}
                                        alt="VRE"
                                        className="vre-reveal-image-one"
                                    />
                                    <div className="offer-name">
                                        <h5 className="font-size-1-24">
                                            <a href="project-details.html">
                                                Creative Agency
                                            </a>
                                        </h5>
                                        <span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 cat-2 cat-3">
                                <div className="offer-inner vre-reveal-one">
                                    <img
                                        src={asset.offer_2_home_3}
                                        alt="VRE"
                                        className="vre-reveal-image-one"
                                    />
                                    <div className="offer-name">
                                        <h5 className="font-size-1-24">
                                            <a href="project-details.html">
                                                Creative Agency
                                            </a>
                                        </h5>
                                        <span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 cat-1 cat4 cat-2">
                                <div className="offer-inner vre-reveal-one">
                                    <img
                                        src={asset.offer_3_home_3}
                                        alt="VRE"
                                        className="vre-reveal-image-one"
                                    />
                                    <div className="offer-name">
                                        <h5 className="font-size-1-24">
                                            <a href="project-details.html">
                                                Professional Team
                                            </a>
                                        </h5>
                                        <span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 cat-3">
                                <div className="offer-inner vre-reveal-one">
                                    <img
                                        src={asset.item_1}
                                        alt="VRE"
                                        className="vre-reveal-image-one"
                                    />
                                    <div className="offer-name">
                                        <h5 className="font-size-1-24">
                                            <a href="project-details.html">
                                                Creative Agency
                                            </a>
                                        </h5>
                                        <span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 cat-1 cat-2 cat-4">
                                <div className="offer-inner vre-reveal-one">
                                    <img
                                        src={asset.item_2}
                                        alt="VRE"
                                        className="vre-reveal-image-one"
                                    />
                                    <div className="offer-name">
                                        <h5 className="font-size-1-24">
                                            <a href="project-details.html">
                                                Quality Work
                                            </a>
                                        </h5>
                                        <span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 cat-4 cat-2">
                                <div className="offer-inner vre-reveal-one">
                                    <img
                                        src={asset.item_3}
                                        alt="VRE"
                                        className="vre-reveal-image-one"
                                    />
                                    <div className="offer-name">
                                        <h5 className="font-size-1-24">
                                            <a href="project-details.html">
                                                Professional Team
                                            </a>
                                        </h5>
                                        <span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Project_Grid
