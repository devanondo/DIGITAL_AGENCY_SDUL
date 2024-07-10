import { asset } from '../assets/assets'
import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'

const Contact = () => {
    return (
        <>
            <Breadcrumb pageName="Contact" />
            {/* contact area start */}
            <section className="contact-area-home-3 contact-area">
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="contact-area-bg-shep-1-home-3 blur-1"
                />
                <img
                    src={asset.bg_blur_shep_1}
                    alt="VRE"
                    className="contact-area-bg-shep-2-home-3 blur-1"
                />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5">
                            <div className="contact-info-wrapper vre-slide-up-gsap">
                                <div className="contact-info-inner">
                                    <div className="contact-icon">
                                        <span>
                                            <svg
                                                width="45"
                                                height="45"
                                                viewBox="0 0 45 45"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1_18689)">
                                                    <path
                                                        d="M35.5627 27.8755C34.6414 26.9163 33.5302 26.4034 32.3525 26.4034C31.1843 26.4034 30.0636 26.9068 29.1044 27.866L26.1031 30.8578C25.8562 30.7248 25.6093 30.6013 25.3718 30.4779C25.0299 30.3069 24.707 30.1455 24.4316 29.9745C21.6203 28.189 19.0654 25.8621 16.6151 22.8513C15.4279 21.3507 14.6301 20.0875 14.0507 18.8054C14.8295 18.0931 15.5514 17.3522 16.2542 16.6399C16.5201 16.374 16.786 16.0986 17.052 15.8326C19.0465 13.8381 19.0465 11.2548 17.052 9.26033L14.4591 6.66749C14.1647 6.37307 13.8608 6.06915 13.5759 5.76523C13.006 5.17638 12.4077 4.56853 11.7903 3.99868C10.8691 3.08691 9.76734 2.60254 8.60864 2.60254C7.44993 2.60254 6.32922 3.08691 5.37947 3.99868C5.36997 4.00818 5.36997 4.00818 5.36047 4.01768L2.1313 7.27534C0.915614 8.49103 0.222292 9.97264 0.070331 11.6917C-0.15761 14.465 0.65918 17.0483 1.28602 18.7389C2.82462 22.8893 5.12303 26.7358 8.55165 30.8578C12.7116 35.825 17.7168 39.7475 23.4343 42.5113C25.6188 43.5465 28.5345 44.7717 31.7922 44.9806C31.9916 44.9901 32.2006 44.9996 32.3905 44.9996C34.5845 44.9996 36.427 44.2113 37.8706 42.6442C37.8801 42.6253 37.8991 42.6158 37.9086 42.5968C38.4025 41.9984 38.9723 41.4571 39.5707 40.8777C39.9791 40.4883 40.397 40.0799 40.8054 39.6525C41.7456 38.6743 42.2395 37.5346 42.2395 36.3664C42.2395 35.1887 41.7361 34.0585 40.7769 33.1087L35.5627 27.8755ZM38.9628 37.8765C38.9533 37.8765 38.9533 37.886 38.9628 37.8765C38.5924 38.2754 38.2125 38.6363 37.8041 39.0352C37.1868 39.624 36.56 40.2414 35.9711 40.9347C35.0118 41.9604 33.8816 42.4448 32.4 42.4448C32.2576 42.4448 32.1056 42.4448 31.9631 42.4353C29.1424 42.2548 26.521 41.1531 24.555 40.2129C19.1794 37.6105 14.4591 33.916 10.5366 29.2337C7.29797 25.3302 5.13253 21.7211 3.6984 17.8461C2.81513 15.4812 2.49221 13.6387 2.63467 11.9006C2.72965 10.7894 3.15704 9.86817 3.94533 9.07987L7.184 5.84121C7.64938 5.40432 8.14326 5.16688 8.62763 5.16688C9.22598 5.16688 9.71035 5.52779 10.0143 5.83171C10.0238 5.84121 10.0333 5.8507 10.0428 5.8602C10.6221 6.40156 11.173 6.96192 11.7523 7.56027C12.0468 7.86419 12.3507 8.16811 12.6546 8.48153L15.2474 11.0744C16.2542 12.0811 16.2542 13.0119 15.2474 14.0186C14.972 14.294 14.7061 14.5695 14.4306 14.8354C13.6328 15.6522 12.873 16.412 12.0468 17.1528C12.0278 17.1718 12.0088 17.1813 11.9993 17.2003C11.1825 18.0171 11.3344 18.8149 11.5054 19.3562C11.5149 19.3847 11.5244 19.4132 11.5339 19.4417C12.2082 21.0753 13.158 22.6139 14.6016 24.4469L14.6111 24.4564C17.2324 27.6856 19.9962 30.2024 23.0449 32.1304C23.4343 32.3774 23.8332 32.5768 24.2131 32.7668C24.555 32.9377 24.878 33.0992 25.1534 33.2702C25.1914 33.2892 25.2294 33.3176 25.2674 33.3366C25.5903 33.4981 25.8942 33.5741 26.2076 33.5741C26.9959 33.5741 27.4898 33.0802 27.6512 32.9187L30.8994 29.6706C31.2223 29.3477 31.7352 28.9583 32.3335 28.9583C32.9224 28.9583 33.4068 29.3287 33.7012 29.6516C33.7107 29.6611 33.7107 29.6611 33.7202 29.6706L38.9533 34.9037C39.9316 35.8725 39.9316 36.8697 38.9628 37.8765Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M24.3171 10.7046C26.8055 11.1225 29.0659 12.3002 30.8704 14.1048C32.675 15.9093 33.8432 18.1697 34.2705 20.6581C34.375 21.2849 34.9164 21.7218 35.5337 21.7218C35.6097 21.7218 35.6762 21.7123 35.7522 21.7028C36.455 21.5888 36.9204 20.924 36.8064 20.2212C36.2935 17.2105 34.8689 14.4657 32.694 12.2907C30.519 10.1158 27.7742 8.69117 24.7635 8.1783C24.0607 8.06433 23.4053 8.52971 23.2819 9.22303C23.1584 9.91635 23.6143 10.5907 24.3171 10.7046Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M44.9452 19.8504C44.0999 14.8927 41.7635 10.3814 38.1734 6.79131C34.5833 3.20123 30.072 0.86483 25.1143 0.0195474C24.421 -0.103921 23.7656 0.370957 23.6422 1.06428C23.5282 1.7671 23.9936 2.42243 24.6964 2.5459C29.1222 3.2962 33.1587 5.39516 36.3689 8.59584C39.5791 11.806 41.6685 15.8425 42.4188 20.2683C42.5233 20.8952 43.0647 21.3321 43.682 21.3321C43.758 21.3321 43.8245 21.3226 43.9004 21.3131C44.5938 21.2086 45.0686 20.5438 44.9452 19.8504Z"
                                                        fill="#CCDEFF"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_18689">
                                                        <rect
                                                            width="45"
                                                            height="45"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="contact-text">
                                        <p className="font-size-1-16">
                                            Any Questions? Call us
                                        </p>
                                        <h5 className="font-size-1-26">
                                            +1 (246) 333 0079
                                        </h5>
                                    </div>
                                </div>
                                <div className="contact-info-inner">
                                    <div className="contact-icon">
                                        <span>
                                            <svg
                                                width="45"
                                                height="45"
                                                viewBox="0 0 45 45"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1_18698)">
                                                    <path
                                                        d="M23.4294 25.4925C21.7483 25.4847 20.078 25.2213 18.4761 24.7114C15.9164 23.855 14.0153 21.6881 13.4992 19.0388C12.9345 16.319 13.9636 13.4431 16.322 11.1488C16.575 10.9024 16.838 10.6663 17.1108 10.4406C19.5256 8.41901 22.7811 7.71646 25.8146 8.5623C28.7514 9.49966 30.7807 12.1836 30.8822 15.2647C30.9921 17.0382 30.4141 18.7859 29.2683 20.1441C28.3845 21.2573 26.9527 21.7831 25.5585 21.5064C24.9884 21.3881 24.4909 21.0428 24.1807 20.55C23.9024 20.0713 23.831 19.4999 23.983 18.9675C24.6389 16.4883 25.3057 12.7207 25.3123 12.6825C25.3589 12.4186 25.5427 12.1995 25.7946 12.1079C26.0465 12.0163 26.3281 12.066 26.5334 12.2383C26.7386 12.4106 26.8364 12.6793 26.7898 12.9433C26.762 13.1 26.1054 16.8112 25.4334 19.3509C25.3854 19.4916 25.3974 19.6459 25.4667 19.7775C25.5704 19.921 25.7268 20.0174 25.9017 20.0456C26.7551 20.188 27.6172 19.8456 28.1403 19.1564C29.0301 18.0919 29.476 16.7257 29.3853 15.3413C29.312 12.8887 27.7037 10.7476 25.3688 9.99375C22.8201 9.29273 20.0896 9.89161 18.0682 11.595C17.8272 11.795 17.5929 12.0044 17.368 12.2234C16.2021 13.3576 14.3402 15.7109 14.9676 18.7334C15.3891 20.845 16.8972 22.5756 18.9314 23.2818C22.4489 24.4039 27.5033 24.539 30.1664 21.2277C30.428 20.9126 30.8941 20.8657 31.2133 21.1223C31.5325 21.3789 31.5868 21.8441 31.3353 22.1674C29.3661 24.6164 26.3694 25.4925 23.4294 25.4925Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M20.8605 21.6045C20.0678 21.6181 19.2945 21.3581 18.671 20.8684C17.2314 19.7163 17.1918 17.7149 17.5954 16.3519C17.7313 15.898 17.9138 15.4594 18.14 15.043C18.7027 13.9076 19.6025 12.9738 20.7163 12.3694C22.1033 11.6497 23.798 11.9226 24.8889 13.0414C25.4301 13.6345 25.8378 14.3368 26.0844 15.1009C26.215 15.4887 26.0107 15.9096 25.6252 16.0469C25.2398 16.1841 24.8154 15.9871 24.6715 15.6041C24.4937 15.0396 24.1981 14.5192 23.8044 14.0773C23.1683 13.4269 22.1773 13.2789 21.379 13.7152C20.5437 14.1862 19.8725 14.9014 19.4553 15.7648C19.2799 16.0883 19.1383 16.429 19.0326 16.7815C18.7412 17.7673 18.8052 19.054 19.6095 19.698C20.4887 20.404 21.972 20.1055 22.8065 19.3856C23.4284 18.8257 23.9628 18.1756 24.3918 17.4571C24.5307 17.2244 24.7844 17.0847 25.0554 17.0917C25.3263 17.0988 25.5724 17.2516 25.699 17.4913C25.8256 17.731 25.813 18.0203 25.666 18.2481C25.1579 19.0947 24.5253 19.8601 23.7895 20.5186C22.9694 21.2105 21.9335 21.5946 20.8605 21.6045Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M42.75 45.0005H2.25C1.00792 44.9991 0.00136403 43.9926 0 42.7505V15.0005C1.179e-05 14.7096 0.168163 14.445 0.431462 14.3215C0.694762 14.198 1.00574 14.2378 1.2294 14.4237L19.6322 29.7181C21.2974 31.0933 23.7043 31.0928 25.3689 29.7171L43.77 14.4237C43.9936 14.2374 44.3049 14.1974 44.5684 14.321C44.8319 14.4445 45.0002 14.7094 45 15.0005V42.7505C44.9986 43.9926 43.9921 44.9991 42.75 45.0005ZM1.5 16.599V42.7505C1.50054 43.1645 1.83601 43.4999 2.25 43.5005H42.75C43.1641 43.5001 43.4996 43.1645 43.5 42.7505V16.599L26.3266 30.8715C24.1061 32.7065 20.8956 32.707 18.6746 30.8726L1.5 16.599Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M0.750734 15.7503C0.424057 15.7506 0.134763 15.5394 0.0355086 15.2282C-0.0637457 14.9169 0.0498726 14.5772 0.316409 14.3884L7.06641 9.60337C7.40436 9.36914 7.86788 9.45069 8.1056 9.78619C8.34331 10.1217 8.26657 10.586 7.93356 10.8272L1.18356 15.6122C1.05717 15.7022 0.905862 15.7504 0.750734 15.7503Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M44.2508 15.7503C44.0956 15.7504 43.9443 15.7022 43.8179 15.6122L37.0679 10.8272C36.7349 10.586 36.6582 10.1217 36.8959 9.78619C37.1336 9.45069 37.5971 9.36914 37.9351 9.60337L44.6851 14.3884C44.9516 14.5772 45.0652 14.9169 44.966 15.2282C44.8667 15.5394 44.5774 15.7506 44.2508 15.7503Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M29.4297 5.25024C29.2744 5.25032 29.123 5.20207 28.9964 5.11217L25.4114 2.56967C23.7472 1.16341 21.3154 1.14876 19.6344 2.53487L16.0044 5.11224C15.7858 5.26728 15.5011 5.2939 15.2575 5.18209C15.014 5.07028 14.8485 4.83701 14.8236 4.57017C14.7986 4.30332 14.9179 4.04343 15.1365 3.88839L18.7215 1.34589C20.9368 -0.465384 24.1254 -0.450977 26.3241 1.38024L29.8641 3.88809C30.1309 4.07693 30.2447 4.41677 30.1454 4.72815C30.046 5.03953 29.7565 5.25074 29.4297 5.25024Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M1.23897 44.5956C0.9229 44.5959 0.640577 44.398 0.533052 44.1007C0.425527 43.8035 0.515881 43.4708 0.758974 43.2688L17.874 29.0488C18.0796 28.8739 18.3634 28.823 18.617 28.9156C18.8706 29.0082 19.0549 29.2299 19.0995 29.4961C19.1441 29.7624 19.0422 30.0321 18.8327 30.2023L1.7177 44.4223C1.58332 44.5343 1.41392 44.5956 1.23897 44.5956Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M43.761 44.5955C43.5862 44.5956 43.4169 44.5343 43.2828 44.4223L26.1678 30.2023C25.9582 30.0321 25.8563 29.7624 25.901 29.4961C25.9456 29.2299 26.1299 29.0082 26.3835 28.9156C26.6371 28.823 26.9208 28.8739 27.1265 29.0488L44.241 43.2688C44.4841 43.4708 44.5745 43.8035 44.467 44.1007C44.3594 44.398 44.0771 44.5958 43.761 44.5955Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M37.5 21.3605C37.0858 21.3605 36.75 21.0247 36.75 20.6105V5.25635C36.7478 5.2721 36.7178 5.25087 36.6675 5.2505H8.3325C8.29935 5.24846 8.26681 5.26012 8.2425 5.28275L8.25 20.6105C8.25 21.0247 7.91421 21.3605 7.5 21.3605C7.08579 21.3605 6.75 21.0247 6.75 20.6105V5.2505C6.7742 4.39992 7.48185 3.72916 8.3325 3.7505H36.6675C37.5181 3.72924 38.2257 4.39995 38.25 5.2505V20.6105C38.25 21.0247 37.9142 21.3605 37.5 21.3605Z"
                                                        fill="#CCDEFF"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_18698">
                                                        <rect
                                                            width="45"
                                                            height="45"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="contact-text">
                                        <p className="font-size-1-16">
                                            Any Questions? Email us
                                        </p>
                                        <h5 className="font-size-1-26">
                                            example@gmail.com
                                        </h5>
                                    </div>
                                </div>
                                <div className="contact-info-inner">
                                    <div className="contact-icon">
                                        <span>
                                            <svg
                                                width="45"
                                                height="45"
                                                viewBox="0 0 45 45"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1_18714)">
                                                    <path
                                                        d="M44.957 44.1067L38.3652 26.7422C38.3105 26.5979 38.2068 26.4775 38.0725 26.4019L31.0513 22.4463L33.1012 19.1961C34.3592 17.1997 35.0243 14.8927 35.0243 12.5244C35.0243 5.6184 29.4059 0 22.4999 0C15.5939 0 9.97554 5.6184 9.97554 12.5244C9.97554 14.8933 10.6409 17.2004 11.8996 19.1962C11.9333 19.2498 13.949 22.4464 13.949 22.4464L6.9275 26.4019C6.79312 26.4775 6.68949 26.5979 6.63474 26.7422L0.042953 44.1067C-0.0555722 44.3661 0.0190468 44.6595 0.229369 44.8405C0.439954 45.0215 0.740979 45.0513 0.982766 44.915L11.5795 38.945L22.1763 44.915C22.3771 45.0281 22.6226 45.0281 22.8235 44.915L33.4202 38.945L44.017 44.915C44.1181 44.972 44.2296 44.9999 44.3405 44.9999C44.4949 44.9999 44.648 44.9459 44.7705 44.8406C44.981 44.6595 45.0555 44.3661 44.957 44.1067ZM23.1592 34.164C23.5716 34.0184 23.9291 33.7381 24.1718 33.3539C24.2053 33.3012 29.8169 24.4037 29.8169 24.4037L32.675 37.8516L23.1592 43.2126V34.164ZM13.0148 18.4929C11.889 16.7078 11.294 14.644 11.294 12.5243C11.294 6.34525 16.321 1.31827 22.5 1.31827C28.6791 1.31827 33.7061 6.34525 33.7061 12.5243C33.7061 14.6435 33.1112 16.7075 31.9861 18.4929C31.8981 18.6323 23.2126 32.4058 23.0611 32.6437C23.0597 32.6458 23.0585 32.6479 23.0572 32.6499C22.9349 32.8433 22.7267 32.9588 22.5 32.9588C22.2732 32.9588 22.064 32.8427 21.9416 32.6502C21.8535 32.5106 13.1507 18.7099 13.0178 18.4977C13.0168 18.4961 13.0158 18.4945 13.0148 18.4929ZM7.7825 27.4332L13.9274 23.9715L12.8569 29.008C12.7813 29.3641 13.0086 29.7141 13.3646 29.7899C13.4108 29.7997 13.457 29.8044 13.5023 29.8044C13.8069 29.8044 14.0806 29.592 14.1464 29.2822L15.1832 24.4041L20.8276 33.3557C21.0712 33.7388 21.429 34.0185 21.8407 34.1639V43.2127L12.325 37.8517L13.5983 31.8612C13.674 31.505 13.4467 31.1551 13.0906 31.0793C12.7342 31.0032 12.3844 31.231 12.3088 31.5869L10.9967 37.76L1.92144 42.873L7.7825 27.4332ZM34.0033 37.7601L31.0728 23.9714L37.2174 27.4332L43.0786 42.873L34.0033 37.7601Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M29.752 12.5244C29.752 8.52627 26.4991 5.27344 22.501 5.27344C18.5028 5.27344 15.25 8.52627 15.25 12.5244C15.25 16.5226 18.5028 19.7754 22.501 19.7754C26.4991 19.7754 29.752 16.5226 29.752 12.5244ZM16.5684 12.5244C16.5684 9.25312 19.2297 6.5918 22.501 6.5918C25.7723 6.5918 28.4336 9.25312 28.4336 12.5244C28.4336 15.7957 25.7723 18.457 22.501 18.457C19.2297 18.457 16.5684 15.7957 16.5684 12.5244Z"
                                                        fill="#CCDEFF"
                                                    />
                                                    <path
                                                        d="M27.1152 12.5244C27.1152 9.98016 25.0452 7.91016 22.501 7.91016C19.9567 7.91016 17.8867 9.98016 17.8867 12.5244C17.8867 15.0687 19.9567 17.1387 22.501 17.1387C25.0452 17.1387 27.1152 15.0687 27.1152 12.5244ZM19.2051 12.5244C19.2051 10.707 20.6836 9.22852 22.501 9.22852C24.3184 9.22852 25.7969 10.707 25.7969 12.5244C25.7969 14.3418 24.3184 15.8203 22.501 15.8203C20.6836 15.8203 19.2051 14.3418 19.2051 12.5244Z"
                                                        fill="#CCDEFF"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_18714">
                                                        <rect
                                                            width="45"
                                                            height="45"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="contact-text">
                                        <p className="font-size-1-16">
                                            51 Somestreet Cambridge
                                        </p>
                                        <h5 className="font-size-1-26">
                                            CB4 3AA, United Kingdom
                                        </h5>
                                    </div>
                                </div>
                                <h4 className="font-size-1-30">
                                    Customer Ratings
                                </h4>
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                </ul>
                                <h2 className="font-size-1-48">4.8 / 5.0</h2>
                                <span className="font-size-1-20">
                                    By 700+ logistics Customers
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 offset-lg-1 offset-xl-1">
                            <div className="form-wrapper">
                                <div className="title">
                                    <div className="sub-title">
                                        <p>Need Any Help?</p>
                                    </div>
                                    <div className="main-title">
                                        <h3 className="split-collab">
                                            Get in Touch With Us
                                        </h3>
                                    </div>
                                </div>
                                <form
                                    action="#"
                                    className="vre-slide-down-gsap"
                                >
                                    <div className="input-item">
                                        <input
                                            type="text"
                                            placeholder="Frist Name"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="input-item">
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="input-item">
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Website"
                                        />
                                    </div>
                                    <textarea placeholder="Message"></textarea>
                                    <input
                                        type="submit"
                                        value="Send Message"
                                        className="btn-primary-style btn-2 hero-info-btn btn-3 btn-4 btn-4-home-3"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact area end */}

            {/* map area start */}
            <div className="map-area">
                <div className="map">
                    <img src={asset.map} alt="VRE" />
                </div>
            </div>
            {/* map area end */}
            <Footer />
        </>
    )
}
export default Contact