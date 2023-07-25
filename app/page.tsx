import Image from "next/image";
import CTALink from "./components/CTALink";
import STRIPES from "../assets/qmind_stripes.svg";
import ContentContainer from "./components/ContentContainer";
import QMIND_LOGO from "../assets/qmind_logo.svg";
import PARTNERS_BANNER from "../assets/partners_banner.svg";
import AI_Banner from "../assets/AI_Banner.png";
import styles from "./styles/home.module.scss";
import TestimonialCard from "./components/TestimonialCard";
import HEADSHOT from "../assets/headshot_test.png";
import COMPANY_LOGO from "../assets/microsoft.svg";
import TESTIMONIAL_IMAGE from "../assets/Testimonial_Card_Test.png";
import CONFERENCE from "../assets/conference_image.png";
import INCUBATOR from "../assets/incubator_image.png";
import ALUMINI_BANNER from "../assets/alumni_banner.png";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main className="min-h-[100vh] py-[5rem] relative">
      {/* Hero Panel */}
      <ContentContainer>
        <div className="flex pt-[75.22px] justify-between">
          {/* Left Content */}
          <div className="w-[55%] flex flex-col gap-[50px] ">
            <img
              className="w-[auto] h-[1000px] absolute left-[0]"
              src={STRIPES.src}
              alt=""
            />
            <h1 className="font-gothic font-bold text-[70px] leading-[76.46px]">
              Empowering <br /> future leaders to <br />
              <span className="text-[#F0B542]">disrupt technology</span>
            </h1>
            <p>
              265 undergraduate students building, researching, and exploring
              artificial intelligence, machine learning, blockchain and quantum
              computing.
            </p>

            <div className="flex gap-[24px]">
              <CTALink className="" text="WORK WITH US" href="#" />
              <CTALink className="" text="OUR PROJECT" href="#" />
            </div>
          </div>
          {/* Right Content */}
          <div>
            <img
              className="h-[557px] w-auto rotate-[11.681deg]"
              src={QMIND_LOGO.src}
              alt="QMIND LOGO"
            />
          </div>
        </div>
        {/* Past Partners & Clients */}
        <div className="mt-[50px]">
          <img src={PARTNERS_BANNER.src} alt="Partners Banner" />
        </div>
      </ContentContainer>

      {/* Design Team Projects */}
      <ContentContainer className="mt-[100px] flex flex-col items-center">
        <h1 className="font-gothic font-bold text-[48px] leading-[76.46px] text-center mb-[20px]">
          Design Team Projects
        </h1>
        <div className={`w-[1200px] ${styles.carousel}`}>
          <div className="w-[100%] flex flex-col items-center">
            <img
              src={AI_Banner.src}
              className={`max-w-[1200px] w-[100%] min-w-[200px] object-cover rounded-t-[10px]`}
              alt="AI Banner"
            />
          </div>
          <div className="flex items-center flex-col mt-[16.5px] mb-[20px]">
            <p>
              This is a description of what their project did. It was in fact, a
              very cool project. It used a stack, definitely one of the stacks.
              Most importantly, some key takeaways were...
            </p>
            <p className="mt-[20px] opacity-[.59]">
              Member 1 | Member 2 | Member 3
            </p>
          </div>
        </div>
      </ContentContainer>

      {/* Testimonials */}
      <ContentContainer>
        <div className="flex flex-col text-center mt-[100px] mb-[50px] font-gothic font-bold leading-[76.46px] text-center">
          <h1 className="text-[48px]">Our Partners Love QMIND</h1>
          <h2 className="text-[32px] mt-[-30px]">
            Read What They Have To Say!
          </h2>
        </div>
        <div className="flex gap-[35px]">
          <TestimonialCard
            message="QMIND gave me the opportunity to make long-lasting friendships while tackling problems through artificial intelligence."
            headShot={HEADSHOT.src}
            name="Coopster Midroni"
            position="Product Manager"
            companyLogo={COMPANY_LOGO.src}
          ></TestimonialCard>
          <TestimonialCard fullImage={TESTIMONIAL_IMAGE.src}></TestimonialCard>
        </div>
        <div className="flex gap-[35px] mt-[42.77px]">
          <TestimonialCard
            message="QMIND gave me the opportunity to make long-lasting friendships while tackling problems through artificial intelligence."
            headShot={HEADSHOT.src}
            name="Coopster Midroni"
            position="Product Manager"
            companyLogo={COMPANY_LOGO.src}
          ></TestimonialCard>
          <TestimonialCard fullImage={TESTIMONIAL_IMAGE.src}></TestimonialCard>
        </div>
      </ContentContainer>

      {/* National Conference */}
      <ContentContainer>
        <div className="flex flex-col text-center mt-[100px] mb-[50px] font-gothic font-bold leading-[76.46px] text-center">
          <h1 className="text-[48px]">
            Our National Conference <br />{" "}
          </h1>
          <h2 className="text-[32px] mt-[-30px]">
            CUCAI 2023 had 320+ attendees...
          </h2>
        </div>
        <img className="h-[437px] w-[auto]" src={CONFERENCE.src} alt="" />
        <div className="flex justify-center w-[100%] mt-[50px]">
          <CTALink className="" text="LEARN MORE" href="#" />
        </div>
      </ContentContainer>

      {/* National Conference */}
      <ContentContainer>
        <div className="flex flex-col text-center mt-[100px] mb-[50px] font-gothic font-bold leading-[76.46px] text-center">
          <h1 className="text-[48px]">
            Our Product Incubator
            <br />{" "}
          </h1>
          <h2 className="text-[32px] mt-[-30px]">
            InQUbate Is Partnered with AWS Activate
          </h2>
        </div>
        <img className="h-[437px] w-[auto]" src={INCUBATOR.src} alt="" />
        <div className="flex justify-center w-[100%] mt-[50px]">
          <CTALink className="" text="LEARN MORE" href="#" />
        </div>
      </ContentContainer>
      <ContentContainer className="mt-[100px]">
        <img src={ALUMINI_BANNER.src} alt="Alumini Placements" />
        <div className="flex justify-center w-[100%] mt-[50px]">
          <CTALink className="" text="WORK WITH US" href="#" />
        </div>
      </ContentContainer>
    </main>
  );
}
