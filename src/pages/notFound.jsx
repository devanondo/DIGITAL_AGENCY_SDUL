import { asset } from '../assets/assets'
import Footer from '../components/shared/footer'

const NotFound = () => {
    return (
        <>
            {/* // <!-- Start Bread Crumb Area Home 1 --> */}
            <section
                className="bread-crumb-area"
                style={{ backgroundImage: `url(${asset.breadcrumb_bg})` }}
            >
                <div className="container">
                    <div className="bread-crumb-title">
                        <h2 className="split-collab">404</h2>
                    </div>
                    <div className="bread-crumb-wrapper">
                        <a href="#">Home</a>
                        <span>
                            <svg
                                width="10"
                                height="14"
                                viewBox="0 0 10 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.90625 7.53125L2.84375 13.625C2.53125 13.9062 2.0625 13.9062 1.78125 13.625L1.0625 12.9062C0.78125 12.625 0.78125 12.1562 1.0625 11.8438L5.875 7L1.0625 2.1875C0.78125 1.875 0.78125 1.40625 1.0625 1.125L1.78125 0.40625C2.0625 0.125 2.53125 0.125 2.84375 0.40625L8.90625 6.5C9.1875 6.78125 9.1875 7.25 8.90625 7.53125Z"
                                    fill="white"
                                />
                            </svg>
                        </span>
                        <a href="#" className="current-page">
                            404
                        </a>
                    </div>
                </div>
            </section>
            {/* // <!-- End Bread Crumb Area Home 1 --> */}

            <section className="error-area">
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="error-area-shep-1 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="error-area-shep-2 blur-1"
                />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="error-pic vre-reveal-one">
                                <img
                                    src={asset.notFound_png}
                                    alt="VRE"
                                    className="vre-reveal-image-one"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="error-wrapper">
                        <h4 className="font-size-1-48 split-collab">
                            Oops! Nothing Was Found
                        </h4>
                        <p className="font-size-1-16">
                            Sed ut perspiciatis unde omnis iste natus voluptatem
                            accusantium doloremque
                            <br />
                            laudantium totam aperiame eaque abillo inventore
                            veritatis
                        </p>

                        <div className="error-input">
                            <form action="#">
                                <input type="text" placeholder="Keywords" />
                                <input type="submit" value="Search" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer />
        </>
    )
}
export default NotFound
