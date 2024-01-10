import { useState } from "react";
import Header from "../components/Footer";
import Footer from "../components/Footer";

const HomePage = () => {
  const [isRotated, setIsRotated]: any = useState(false);

  const handleRotateClick = () => {
    setIsRotated(!isRotated);
  };
  return (
    <>
      <div className="text-[#FFFFFF]">
        <div className="flex justify-end ">
          <button
            onMouseEnter={handleRotateClick}
            className={`rotate-container ${
              isRotated ? "rotate" : ""
            } cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className=" flex justify-center ">
          <div className="flex flex-col gap-10">
            <div className="flex justify-center  font-roboto text-[45px] font-light leading-48 tracking-wider text-center">
              <div className="w-full md:w-[80%]">
                Epic Games : An American video game and software developer And
                publisher based in Cary, North Carolina.
              </div>
            </div>

            <div className="flex justify-center">
              <img src="/assets/images/image1.png" />
            </div>
            <div className="flex justify-center w-full font-poppins text-[19px] font-normal leading-7 tracking-normal text-center">
              <div className="w-full md:w-[65%]">
                Create, play, and battle with friends for free in Fortnite. Be
                the last player standing in Battle Royale and Zero Build,
                experience a concert or live event, or discover over a million
                creator made games, including racing, parkour, zombie survival,
                and more. Each Fortnite island has an individual age rating so
                you can find the one that's right for you and your friends. Find
                it all in Fortnite ... Drop In.
              </div>
            </div>

            <div className=" flex justify-center mt-4">
              <div className="flex w-full md:w-[20%] bg-white h-[60px] justify-center">
                <button className="font-poppins text-[19px] font-normal leading-7 tracking-tight text-center  text-black text-center ">
                  Visit website
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* first card */}
        <div className="flex justify-center mt-[105px]">
          <div className="flex flex-col md:flex-row gap-10 md:gap-4  w-full md:w-[55%] ">
            <div className="flex flex-col items-center w-full ">
              <div className="flex justify-center ">
                <img src="/assets/images/image2.png" />
              </div>
              <div className="font-roboto text-[19px] font-light leading-5 tracking-tighter text-center w-[75%] mt-4">
                Explore large, destructible environments where no two games are
                ever the same.
              </div>
            </div>
            <div className="flex flex-col items-center w-full ">
              <div className="flex justify-center ">
                <img src="/assets/images/image3.png" />
              </div>
              <div className="font-roboto text-[19px] font-light leading-5 tracking-tighter text-center w-[80%] mt-4">
                Team up with friends by sprinting, climbing and smashing your
                way to earn your Victory Royale
              </div>
            </div>
            <div className="flex flex-col items-center w-full ">
              <div className="flex justify-center ">
                <img src="/assets/images/image4.png" />
              </div>
              <div className="font-roboto text-[19px] font-light leading-5 tracking-tighter text-center w-[80%] mt-4">
                Discover even more ways to play across thousands of creator-made
                game genres
              </div>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className="flex justify-center mt-[105px]">
          <div className=" w-full md:w-[55%]">
            <div className="flex flex-col items-center w-full ">
              <div className="">
                <div className="flex justify-center">
                  <div className="font-roboto text-[42px] font-light leading-12 tracking-normal text-left">
                    Our Contribution
                  </div>
                </div>
              </div>
              <div className=" w-[95%] mt-3">
                <div className="flex justify-center">
                  <div className="font-poppins text-[18px] font-normal leading-7 tracking-normal text-center">
                    Our core offering extends beyond mere profit generation; we
                    emphasize the growth and active involvement of our user
                    community. Collaborating with us represents an investment,
                    rather than a mere expenditure. Our dedication to providing
                    distinctive digital interactions guarantees unparalleled
                    benefits for our clientele.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd */}

        <div className="flex justify-center mt-[115px]">
          <div className="flex flex-col justify-center md:flex-row gap-10 md:gap-4   w-full md:w-[55%] ">
            <div className="flex flex-col items-center w-full ">
              <div className="flex justify-center font-roboto text-[80px] font-light leading-4 tracking-normal text-left ">
                5M
              </div>
              <div className="Font-roboto text-[25px] font-light leading-7 tracking-normal text-center w-[75%] mt-10">
                Daily User Engagements
              </div>
            </div>
            <div className="flex flex-col items-center w-full ">
              <div className="flex justify-center font-roboto text-[80px] font-light leading-4 tracking-normal text-left ">
                $500K
              </div>
              <div className="Font-roboto text-[25px] font-light leading-7 tracking-normal text-center w-[75%] mt-10">
                Revenue Surge for an Platform
              </div>
            </div>
            <div className="flex flex-col items-center w-full ">
              <div className="flex justify-center font-roboto text-[80px] font-light leading-4 tracking-normal text-left ">
                10X
              </div>
              <div className="Font-roboto text-[25px] font-light leading-7 tracking-normal text-center w-[75%] mt-10">
                ROAS on all our marketing campaigns
              </div>
            </div>
          </div>
        </div>
        {/* /4th */}

        <div className="flex justify-center mt-[105px]">
          <div className="flex justify-center w-full md:w-[55%]">
            <div className="flex flex-col items-center w-full ">
              <div className="">
                <div className="flex justify-center">
                  <div className="font-roboto text-[45px] font-light leading-12 tracking-wide text-left">
                    Interested in delving deeper into the project?
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-[95%] mt-3">
                <div className="flex justify-center">
                  <div className="font-roboto text-[28px] font-light leading-8 tracking-normal text-center">
                    If you'd like to explore further details about our
                    initiatives or any of our affiliated brands, don't hesitate
                    to connect. You can reach out to us via email at
                    hello@abc.com or give us a call at +91 480 20802730..
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-4  w-full md:w-[85%] mt-20">
                <div className="w-full border border-white p-4">
                  <div className="font-poppins text-[18px] font-medium leading-7 tracking-wide text-center cursor-pointer">
                    Ring us on Skype
                  </div>
                </div>
                <div className="w-full bg-white p-6 md:p-4">
                  <div className="font-poppins text-[18px] text-[#000000]  font-medium leading-7 tracking-wide text-center cursor-pointer">
                  Contact Us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*5th card  */}
<Footer/>
        {/* footer */}
      </div>
    </>
  );
};

export default HomePage;
