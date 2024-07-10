import Plan_Area_Price from '../components/prices/plan-area-price'
import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'
import PPCAgencyOne from '../components/shared/ppc-agency'
const Price = () => {
    return (
        <>
            <Breadcrumb pageName="Pricing Plan" />
            <Plan_Area_Price />
            <PPCAgencyOne />
            <Footer />
        </>
    )
}
export default Price
