import Faq_Area_One from '../components/faq/faq-area-1'
import Faq_Area_Two from '../components/faq/faq-area-2'
import Breadcrumb from '../components/shared/breadcrumb'
import Footer from '../components/shared/footer'

const Faq = () => {
    return (
        <>
            <Breadcrumb pageName="FAQ" />
            <Faq_Area_One />
            <Faq_Area_Two />
            <Footer />
        </>
    )
}
export default Faq
