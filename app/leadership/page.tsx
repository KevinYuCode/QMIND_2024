import Container from "../components/Container";
import Image from "next/image";
import leadership_image from "../../assets/Leadership_image.jpg";
import "./page.scss";
import { sofia_sans } from "../font";
import Members from "@/components/leadership/members";

export default function Leadership() {

  return (
    <>
      <Container className="flex flex-col !gap-12 md:!gap-16 lg:gap-24 pt-[40px] text-center mb-12 md:mb-16">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex flex-col justify-center gap-5 w-full lg:w-[45%] lg:text-left text-center">
            <h1 className="font-gothic font-bold text-[48px] md:text-[72px]">
              Leadership
            </h1>
            <div className="text-xl flex flex-col gap-4">
              <p className={`${sofia_sans.className}`}>
                Our leadership team consists of the brightest minds from Queen's
                University, from all faculties and years.
              </p>
              <p className={`${sofia_sans.className}`}>
                Below you can see our team and click to connect with them.
              </p>
            </div>
          </div>
          <Image
            src={leadership_image}
            alt=""
            width={500}
            className="w-full lg:w-[45%] rounded-[20px]"
          ></Image>
        </div>

        {/* QMIND Members */}
        <Members />
      </Container>
    </>
  );
}
