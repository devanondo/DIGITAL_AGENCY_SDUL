import Plan_Area_Price from '../components/prices/plan-area-price'
import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'
import Navbar from '../components/shared/navbar'
import PPCAgencyOne from '../components/shared/ppc-agency'
const Price = () => {
    return (
        <>
            <Navbar />
            <Breadcrumb pageName="Pricing Plan" />
            <Plan_Area_Price />
            <PPCAgencyOne />
            <Footer />
        </>
    )
}
export default Price
