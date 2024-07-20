import { asset } from '../assets/assets'
import AnimateTitle from './shared/gsap/split-collab'

const Plan_Area_Home_3 = () => {
    return (
        <section className="plan-area-home-3">
            <img
                src={asset.bg_blur_shep_3}
                alt="VRE"
                className="price-area-bg-shep-1-home-3 blur-1"
            />
            <img
                src={asset.bg_blur_shep_3}
                alt="VRE"
                className="price-area-bg-shep-2-home-3 blur-1"
            />
            <div className="container">
                <div className="title">
                    <div className="sub-title sub-title-home-3">
                        <p>our pricing plans</p>
                    </div>
                    <div className="main-title">
                        <AnimateTitle className="split-collab">
                            Choose Best Plan For <br />
                            Your Business
                            <span className="absolute">
                                <img
                                    src={asset.text_shep_2}
                                    alt="text-shep-2"
                                />
                            </span>
                        </AnimateTitle>
                    </div>
                </div>
                <div className="plan-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-4">
                            <div className="price-inner wow bounceInUp">
                                <h6 className="font-size-1-25">Basic Plan</h6>
                                <div className="price">
                                    <h5 className="font-size-1-50">$29</h5>
                                    <span className="font-size-1-18">
                                        /Per Month
                                    </span>
                                </div>
                                <div className="plan-item">
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Email MarketingContent
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Marketing Voice
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Optimize SEO
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Consulting Video
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Marketing Advertising
                                        </span>
                                    </div>
                                </div>
                                <div className="price-btn">
                                    <a href="#" className="btn-4 btn-5">
                                        Purchase Plan
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="price-inner wow bounceInUp">
                                <span className="price-popular-bach">
                                    Popular
                                </span>
                                <h6 className="font-size-1-25">Premium Plan</h6>
                                <div className="price">
                                    <h5 className="font-size-1-50">$49</h5>
                                    <span className="font-size-1-18">
                                        /Per Month
                                    </span>
                                </div>
                                <div className="plan-item">
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Email MarketingContent
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Marketing Voice
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Optimize SEO
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Consulting Video
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Marketing Advertising
                                        </span>
                                    </div>
                                </div>
                                <div className="price-btn">
                                    <a href="#" className="btn-4 btn-5">
                                        Purchase Plan
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="price-inner wow bounceInUp">
                                <h6 className="font-size-1-25">
                                    Standard Plan
                                </h6>
                                <div className="price">
                                    <h5 className="font-size-1-50">$99</h5>
                                    <span className="font-size-1-18">
                                        /Per Month
                                    </span>
                                </div>
                                <div className="plan-item">
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Email MarketingContent
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Marketing Voice
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Optimize SEO
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Consulting Video
                                        </span>
                                    </div>
                                    <div className="plan-item-inner">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9959 5.87952 15.1518 3.84705 13.6524 2.34764C12.153 0.848226 10.1205 0.00406613 8 0ZM11.8077 6.6L7.3 10.9077C7.18347 11.0173 7.02922 11.0779 6.86923 11.0769C6.79103 11.078 6.71338 11.0637 6.64077 11.0346C6.56815 11.0056 6.50201 10.9624 6.44616 10.9077L4.19231 8.75384C4.1298 8.6993 4.07896 8.63269 4.04285 8.558C4.00673 8.48331 3.9861 8.40209 3.98218 8.31922C3.97826 8.23635 3.99113 8.15354 4.02003 8.07578C4.04893 7.99801 4.09325 7.92689 4.15034 7.86669C4.20742 7.8065 4.27609 7.75846 4.35221 7.72548C4.42833 7.69249 4.51034 7.67524 4.5933 7.67476C4.67626 7.67428 4.75846 7.69058 4.83496 7.72267C4.91146 7.75477 4.98068 7.802 5.03846 7.86154L6.86923 9.60769L10.9615 5.70769C11.0812 5.6033 11.2366 5.5492 11.3952 5.5567C11.5538 5.56421 11.7034 5.63273 11.8126 5.74796C11.9219 5.86318 11.9824 6.01618 11.9815 6.17497C11.9806 6.33376 11.9183 6.48605 11.8077 6.6Z"
                                                fill="#FF4A3B"
                                            />
                                        </svg>
                                        <span className="font-size-1-18">
                                            Marketing Advertising
                                        </span>
                                    </div>
                                </div>
                                <div className="price-btn">
                                    <a href="#" className="btn-4 btn-5">
                                        Purchase Plan
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Plan_Area_Home_3
