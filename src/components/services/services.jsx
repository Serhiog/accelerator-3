import { useState } from "react"
import CreditTab from "../credit-tab/credit-tab"
import DepositsTab from "../deposits-tab/deposits-tab"
import InsuranceTab from "../insurance-tab/insurance-tab"
import OnlineTab from "../online-tab/online-tab"
import ServicesList from "../services-list/services-list"

const Services = () => {

    const [activeTab, setActiveTab] = useState("deposits")


    return (
        <section className="services">
            <ServicesList setActiveTab={setActiveTab} activeTab={activeTab} />
            {activeTab === "deposits" && <DepositsTab />}
            {activeTab === "credits" && <CreditTab />}
            {activeTab === "insurance" && <InsuranceTab />}
            {activeTab === "online" && <OnlineTab />}

        </section>
    )
}

export default Services