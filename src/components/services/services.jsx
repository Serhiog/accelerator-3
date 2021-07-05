import DepositsTab from "../deposits-tab/deposits-tab"
import ServicesList from "../services-list/services-list"

const Services = () => {
    return (
        <section className="services">
            <ServicesList />
            <DepositsTab/>
        </section>
    )
}

export default Services