import React from 'react'
import { asset } from '../assets/assets'
import RevelImageTextAnimation from './shared/gsap/reveal-image-text'

const VideoPopupHomeTwo = () => {
    return (
        <section className="video-popup-home-2">
            <RevelImageTextAnimation
                image={asset.home_2_video_banner_1}
                className="video-popup-wrapper vre-reveal-one"
            >
                <div className="video-button vre-slide-down-gsap">
                    <a
                        href="https://www.youtube.com/watch?v=XbZDL435xw0&t=97s"
                        className="popup-video"
                    >
                        <span>
                            <svg
                                width="24"
                                height="28"
                                viewBox="0 0 24 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.1952 10.6868L5.78395 0.570611C4.59663 -0.160354 3.16113 -0.190745 1.9439 0.489315C0.726677 1.16927 0 2.40777 0 3.80202V23.9423C0 26.0505 1.69866 27.7748 3.78643 27.7862C3.79213 27.7862 3.79782 27.7863 3.80341 27.7863C4.45585 27.7862 5.13575 27.5818 5.77076 27.1943C6.28161 26.8826 6.44306 26.2158 6.13139 25.705C5.81971 25.1941 5.15284 25.0327 4.64216 25.3444C4.34514 25.5256 4.05506 25.6193 3.7981 25.6192C3.01036 25.6149 2.16695 24.9402 2.16695 23.9424V3.80208C2.16695 3.20396 2.47868 2.67282 3.00076 2.38112C3.52289 2.08942 4.13859 2.10244 4.64726 2.41564L21.0586 12.5319C21.5519 12.8356 21.8341 13.342 21.8329 13.9212C21.8317 14.5005 21.5474 15.0057 21.0514 15.3084L9.18598 22.5734C8.67562 22.8859 8.5152 23.5529 8.82769 24.0633C9.14012 24.5736 9.80716 24.734 10.3175 24.4215L22.1816 17.1574C23.3175 16.4644 23.9973 15.2563 24 13.9256C24.0027 12.595 23.3278 11.3841 22.1952 10.6868Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                        <span className="video-button-text font-size-1-18">
                            Watch video
                        </span>
                    </a>
                </div>
                <div className="video-banner-text vre-slide-up-gsap">
                    <h5 className="font-size-1-24">
                        Creative SEO & Digital <br /> Marketing Solutions for{' '}
                        <br /> your Business
                    </h5>
                </div>
            </RevelImageTextAnimation>
        </section>
    )
}

export default VideoPopupHomeTwo
