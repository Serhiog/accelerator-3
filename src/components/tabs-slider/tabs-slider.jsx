import CreditTab from "../credit-tab/credit-tab"
import DepositsTab from "../deposits-tab/deposits-tab"
import InsuranceTab from "../insurance-tab/insurance-tab"
import OnlineTab from "../online-tab/online-tab"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCarousel from "react-slick";

const TabsSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "slider__dots",
        arrows: false,
        autoplay: false
    };


    return (
        <SliderCarousel {...settings}
            style={{ position: "relative", width: "772px", margin: "0 auto", marginBottom: "0" }}
        >
            <div>
                <DepositsTab />
            </div>
            <div>
                <CreditTab />

            </div>
            <div>
                <InsuranceTab />
            </div>
            <div>
                <OnlineTab />
            </div>
        </SliderCarousel>
    )
}

export default TabsSlider