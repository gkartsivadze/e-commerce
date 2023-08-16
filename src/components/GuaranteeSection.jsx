import cardLogo from "../../public/card.svg"
import deliveryLogo from "../../public/delivery.svg"
import shieldLogo from "../../public/shield.svg"
import protectionLogo from "../../public/protection.svg"
import discountLogo from "../../public/discount.svg"

import GuaranteeComponent from "./subcomponents/GuaranteeComponent";

export default function GuaranteeSection() {
    return (
        <section className="guarantee_section">
            <GuaranteeComponent icon={shieldLogo} head={"Guarantee"} body="24 Months" />
            <GuaranteeComponent icon={cardLogo} head={"Rate Paying"} body="4 - 12 Months" />
            <GuaranteeComponent icon={protectionLogo} head={"Payments"} body="Secured" />
            <GuaranteeComponent icon={deliveryLogo} head={"Free Delivery"} body="From $100" />
            <GuaranteeComponent icon={discountLogo} head={"Free Delivery"} body="From $100" />
        </section>
    )
};