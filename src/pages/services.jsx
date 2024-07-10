import Brand_Logo from '../components/services/brand-logo'
import Marketing_Area from '../components/services/marketing-area'
import Service_Area from '../components/services/service-area'
import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'

const Services = () => {
    return (
        <>
            <Breadcrumb pageName="Services" />
            <Service_Area />
            <Brand_Logo />
            <Marketing_Area/>
            <Footer />
        </>
    )
}
export default Services
