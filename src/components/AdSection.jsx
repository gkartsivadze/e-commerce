import Ad from "./subcomponents/Ad";
import speakerImg from "../../public/speaker.png"
import controllerImg from "../../public/controller_thumb.png"

export default function AdSection(params) {
    return (
        <section className="ad_section default-padding">
            <Ad header={"PORTABLE SPEAKERS COLLECTION"} highligh={"2023"} img={speakerImg} style={{background: "linear-gradient(#F2FFF7, #C3F4FF)"}} />
            <Ad header={"ALL ACCESSORIES FOR"} highlight={"GAMERS"} img={controllerImg} style={{background: "linear-gradient(#FFF4FD, #CBCDFF)"}} />
        </section>
    )
};
