import {useState} from "react";
import CreditTab from "../credit-tab/credit-tab";
import DepositsTab from "../deposits-tab/deposits-tab";
import InsuranceTab from "../insurance-tab/insurance-tab";
import OnlineTab from "../online-tab/online-tab";
import ServicesList from "../services-list/services-list";
import React from "react";

const OnlyTabs = () => {

  const [activeTab, setActiveTab] = useState(`deposits`);

  return (
    <>
      <ServicesList setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === `deposits` && <DepositsTab />}
      {activeTab === `credits` && <CreditTab />}
      {activeTab === `insurance` && <InsuranceTab />}
      {activeTab === `online` && <OnlineTab />}
    </>
  );
};

export default OnlyTabs;
