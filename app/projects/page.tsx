"use client";

import React from 'react';
import ContentContainer from "../components/ContentContainer";
import Image from "next/image";
import Link from 'next/link';
import EXAMPLE from "../../assets/Users/example.png";
import rabab_azeem from "../../assets/Headshots/Rabab_Azeem.png";
import olivia_xu from "../../assets/Headshots/Olivia_Xu.png";
import "./page.scss";
import { kontrapunkt } from "../font";
import { sofia_sans } from "../font";

const images = [EXAMPLE, EXAMPLE, EXAMPLE, EXAMPLE, EXAMPLE]
function Users() {

  const leadership = [
    {
      title: "Managing Directors",
      cards: [
        {
          name: "Marcelo Chaman Mallqui",
          title: "Managing Director, Operations",
          img: "/headshot.png",
          class: "leadershipCardOperations",
          social: "https://www.linkedin.com/in/marc-cham/",
        },
        {
          name: "Marcelo Chaman Mallqui",
          title: "Managing Director, Operations",
          img: "/headshot.png",
          class: "leadershipCardOperations",
          social: "https://www.linkedin.com/in/marc-cham/",
        },
        {
          name: "Marcelo Chaman Mallqui",
          title: "Managing Director, Operations",
          img: "/headshot.png",
          class: "leadershipCardOperations",
          social: "https://www.linkedin.com/in/marc-cham/",
        },
        {
          name: "Marcelo Chaman Mallqui",
          title: "Managing Director, Operations",
          img: "/headshot.png",
          class: "leadershipCardOperations",
          social: "https://www.linkedin.com/in/marc-cham/",
        },
        {
          name: "Marcelo Chaman Mallqui",
          title: "Managing Director, Operations",
          img: "/headshot.png",
          class: "leadershipCardOperations",
          social: "https://www.linkedin.com/in/marc-cham/",
        },
        {
          name: "Marcelo Chaman Mallqui",
          title: "Managing Director, Operations",
          img: "/headshot.png",
          class: "leadershipCardOperations",
          social: "https://www.linkedin.com/in/marc-cham/",
        },
      ],
    },
  ]
  return (
    <ContentContainer>
        
        <div className="users-container">

          {/*Project title*/}
          <div className="users-title">
            <h1 className='!font-kontrapunkt'>Secure Shell Communication using Quantum Key Distribution</h1>
            <p>Disruptive technologies</p>
          </div>

          {/*Technologies used in the project*/}
          <div className="users-tech">
            <div className="users-tech-item">
              PYTHON
            </div>
            <div className="users-tech-item">
              TENSORFLOW
            </div>
            <div className="users-tech-item">
              OPENCV
            </div>
          </div>

           {/*Images of the project*/}
          <div className="users-img-title">
            PHOTO & VIDEO GALLERY
          </div>
          <div className="users-img">
          {images.map((image, index) => (

        <Image
          key={index}
          className="w-[338px] h-[253.5px] rounded-[12px] border-[1.5px] border-[#4E4E4E]"
          src={image}
          alt=""
        />
      ))}
    </div>
        
          <div className="content-flexbox">
           
          {/*Left side desc*/}
          <div className="flexbox-item1 item-desc">

            {/*Project Summary*/}
            <div>
              <h1 className={`${kontrapunkt.className}`}>PROJECT SUMMARY</h1>
             
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores unde delectus est veniam ipsum obcaecati, totam laboriosam commodi facere, enim similique deserunt fugit vel.
              </p>
            </div>

            {/*Real World Impact */}
            <div>
            
            <h1>Real World Impact - What Impact will this project have on the world of AI?</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>

            {/*Full Description */}
            <div>
            <h1>FULL PROJECT DESCRIPTION</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum. Euismod elementum nisi quis eleifend quam. Accumsan lacus vel facilisis volutpat. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Lobortis mattis aliquam faucibus purus in massa. Est lorem ipsum dolor sit amet consectetur. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. At elementum eu facilisis sed odio morbi. Nibh ipsum consequat nisl vel pretium lectus quam id. Eget arcu dictum varius duis at consectetur lorem donec. Eu scelerisque felis imperdiet proin. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Enim facilisis gravida neque convallis a cras. Tempor orci dapibus ultrices in iaculis nunc. Ut consequat semper viverra nam libero. Lectus nulla at volutpat diam. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Vel facilisis volutpat est velit egestas dui id ornare arcu.

            Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Mattis vulputate enim nulla aliquet porttitor. Rhoncus dolor purus non enim. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Suscipit tellus mauris a diam maecenas sed enim ut sem. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Sed odio morbi quis commodo odio aenean. Scelerisque fermentum dui faucibus in ornare quam viverra. Felis eget velit aliquet sagittis id consectetur. Elit duis tristique sollicitudin nibh. In nisl nisi scelerisque eu ultrices. Scelerisque in dictum non consectetur a erat nam at. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Dapibus ultrices in iaculis nunc sed augue lacus. Bibendum neque egestas congue quisque egestas diam. Odio euismod lacinia at quis risus sed. Cursus turpis massa tincidunt dui ut ornare. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Ut aliquam purus sit amet luctus venenatis lectus magna.

            </p>
          
            </div>

          </div>
           
         

            {/*Right side socials*/}
          <div className="flex  item-social">

            {/*Linkedin Icons from leadership */}

            <div>
          <h1>Contributing Team - Click to connect!</h1>

          {leadership.map((section, index) => 
          (   
            <div key={index} className="flex flex-col gap-4 items-center">
              <div className="grid grid-cols-3 flex-wrap justify-center gap-[10px] w-[100%] leading-none">
                {section.cards.map((card, index) => {
                  return (
                    <Link
                      href={card.social}
                      key={index}
                      className={`${card.class}  text-center flex flex-col gap-5 justify-center items-center rounded-[15px] p-[12.1px] bg-[#2E2E2E]`}
                    >
                      <div
                        className={`${card.class}-img rounded-[5px] md:rounded-[10px] relative w-[100%] min-h-[121px]`}
                      >
                        <Image
                          src={card.img}
                          alt="Project Image"
                          fill
                          className={`aspect-square rounded-[5px] object-cover`}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p
                          className={` font-semibold font-gothic tracking-tight text-[12px] md:text-[12px]`}
                        >
                          {card.name}
                        </p>

                        <p
                          className={` font-light font-gothic text-[9px]`}
                        >
                          {card.title}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )
      )}

          </div>
            {/*Link to github and other socials */}
            <div className="item-social2">
              <div className="info">GITHUB REPOSITORY</div>
              <Link href="https://github.com/">https://github.io/ssh-qkd-am-11</Link>
              <div className="info">CONTACT QMIND</div>
              <p>partnerships@qmind.ca</p>
              <div className="info">LEARN MORE ABOUT QMIND</div>
              <Link href="https://github.com/">Instagram</Link>
              <Link href="https://github.com/">Linkedin</Link>

            </div>
          </div>
          <div>    
        </div>
        </div>




        </div>
    </ContentContainer>
  )
}

export default Users



  
