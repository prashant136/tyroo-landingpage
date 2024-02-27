import React, { useState } from 'react'
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";


// components
import CardOne from './Cards/CardOne';
import CardTwo from './Cards/CardTwo';
import ImageSlider from './ImageSlider';
import ImageSlider2 from './ImageSlider2';


// images
import mainImg from '../../../public/assets/mainImg.svg';
import cardOne_1 from "../../../public/assets/cardOne/cardOne-1.svg";
import cardOne_2 from "../../../public/assets/cardOne/cardOne-2.svg";
import cardOne_3 from "../../../public/assets/cardOne/cardOne-3.svg";
import cardOne_4 from "../../../public/assets/cardOne/cardOne-4.svg";

import img1 from "../../../public/assets/cardTwo/img1.webp";
import img2 from "../../../public/assets/cardTwo/img2.webp";
import img3 from "../../../public/assets/cardTwo/img3.webp";
import tyroo from '../../../public/assets/tyroo-logo.png';
import onboardingSm from '../../../public/assets/onboarding-sm.svg';
import onboardingLg from '../../../public/assets/onboarding-lg.svg';

// ----- brands -----
import brandcj_1 from "../../../public/assets/brands/brandcj-1.webp";
import brandcj_2 from "../../../public/assets/brands/brandcj-2.webp";
import brandcj_3 from "../../../public/assets/brands/brandcj-3.webp";
import brandcj_4 from "../../../public/assets/brands/brandcj-4.webp";
import brandcj_5 from "../../../public/assets/brands/brandcj-5.webp";
import CJ from "../../../public/assets/brands/CJ.png";

// shapes for small medium device
import ellips1 from '../../../public/assets/shapes/sm-screen/Ellipse-1.svg';
import ellips2 from '../../../public/assets/shapes/sm-screen/Ellipse-2.png';
import greenLine from '../../../public/assets/shapes/sm-screen/green-sm.svg';
import quaterLine from '../../../public/assets/shapes/sm-screen/quarter-line.svg';
import joinus from '../../../public/assets/shapes/sm-screen/join-us.svg';
import contact from '../../../public/assets/shapes/sm-screen/contact.svg';
import bigCircle from '../../../public/assets/shapes/sm-screen/big-circle.svg';
import onboardLine from '../../../public/assets/shapes/sm-screen/onboard.svg';

// shape for large deveices
import halfCircle from '../../../public/assets/shapes/lg-screen/half-circle.svg';
import joinusLG from '../../../public/assets/shapes/lg-screen/joinus-lg.svg';
import Modal from './Modal';
import Modal2 from './Modal2';

const cardOneArr = [
  {
    imgSrc: cardOne_1,
    heading: 'Quality Partnerships',
    text: 'A premium curated and transparent network of advertisers & partners for ease of relationship discovery',
  },
  {
    imgSrc: cardOne_3,
    heading: 'Cutting-Edge Tech',
    text: 'Best-in-class tools and technology to easily create flexible compensation models and monitor program performance',
  },
  {
    imgSrc: cardOne_2,
    heading: 'Actionable Insights',
    text: 'Vast consumer, channel and category data uncovers hidden value to enable intelligent growth & competitive advantage',
  },
  {
    imgSrc: cardOne_4,
    heading: 'Unparalleled Expertise',
    text: 'Our passionate people bring experience, quality insights, strategy and best practices to all clients in everything they do',
  },
]

const cardTwoArr = [
  {
    imgSrc: img1,
    heading: "CJ",
    date: "Jan 30, 2024",
    text: "Shoplazza Merchants Can Now Easily Integrate with CJ via Plugin",
    link: 'https://junction.cj.com/article/shoplazza-merchants-can-now-easily-integrate-with-cj-via-plugin',
  },
  {
    imgSrc: img2,
    heading: "CJ",
    date: "Jan 24, 2024",
    text: "CJ Is Wagering Big on the Sports Betting Vertical…Want In?",
    link: 'https://junction.cj.com/article/cj-is-wagering-big-on-the-sports-betting-vertical-want-in',
  },
  {
    imgSrc: img3,
    heading: "CJ",
    date: "Jan 15, 2024",
    text: "CJ Demystifies Shopping Browser Extensions with New Study",
    link: 'https://junction.cj.com/article/cj-demystifies-shopping-browser-extensions-with-new-study',
  }
]

export default function Body() {

  const [modalState, setModalState] = useState({
    open: false,
    firstname: undefined,
    lastname: undefined,
    company: undefined,
    email: undefined,
    phone: undefined,
  });

  const [demoState, setDemoState] = useState({
    open: false,
    firstname: undefined,
    lastname: undefined,
    company: undefined,
    email: undefined,
    phone: undefined,
  });

  return (
    <>
      <main className="relative mx-auto w-full flex flex-col justify-between items-center">
        {/* part 1 */}
        <section className='max-w-[1920px] mx-auto flex justify-between w-full mt-6'>
          <div className='flex flex-col gap-y-4 lg:p-4 lg:w-[600px] ml-[8%]'>
            <div className='flex flex-col text-[#214295] font-semibold leading-tight
            text-[22px]
            md:text-[32px]
            lg:text-[40px]
            xl:text-[45px]
            2xl:text-[60px]'>
              <div>Transparent</div>
              <div className='text-[#F37E25]'>Performance <span className='font-[400] text-[#214295]'>with</span></div>
              <div>Exponential</div>
              <div>Growth</div>
            </div>

            <div className='font-normal text-left text-[12px] md:text-[16px] lg:[16px] 2xl:text-[22px]'>
              Tyroo | CJ is APAC’s transformative performance
              marketing platform trusted to deliver growth for
              brands, publishers, and creators.
            </div>

            <button
              className='mb-3 flex justify-center items-center gap-x-2 w-[145px] h-[32px] py-2 text-[12px] font-normal text-white bg-[#F37E25] rounded-full
           xl:w-[254px] xl:h-[56px] xl:text-[20px]
           xl:mt-10
           2xl:text-[24px]
          '
              onClick={() => {
                setModalState({
                  open: true,
                })
              }}>
              Sign up now
              <FaArrowRight />
            </button>
          </div>
          <Image
            src={mainImg}
            className='
            mr-[8%]
          h-[200px] w-[190px]
          xs:h-[250px] xs:w-[250px]
          sm:h-[320px] sm:w-[320px] 
          md:h-[500px] md:w-[500px]
          lg:h-[600px] lg:w-[600px]
          xl:h-[700px] xl:w-[700px]
          2xl:h-[800px] 2xl:w-[800px]'
            alt="pic" />
        </section>

        {/* part 2 small screen */}
        <section className='lg:hidden bg-[#214295] w-full py-8'>
          <div className='relative max-w-[1920px] mx-auto flex flex-col text-white w-full lg:flex-row lg:space-x-4 lg:my-16'>

            {/* for sm screen */}
            <div className='absolute top-[-30px]'>
              <Image src={ellips1} alt="" width={100} height={100} />
            </div>

            <div className='flex flex-col gap-y-4 lg:w-4/12 px-10'>
              <p className='text-[24px] font-semibold text-center'>What set Tyroo | CJ apart?</p>
              <p className='text-center text-[14px] font-normal px-10'>Tyroo | CJ is transforming performance in APAC with its global capabilities and market focus and expertise.</p>
            </div>
            <div className='flex flex-col items-center gap-y-8 p-6'>
              {cardOneArr.map((obj, index) => {
                return (
                  <CardOne
                    key={index}
                    imgSrc={obj.imgSrc}
                    heading={obj.heading}
                    text={obj.text} />
                )
              })}
            </div>
            <div className='w-full flex justify-center'>
              <button onClick={() => {
                setDemoState({
                  open: true,
                })
              }}
                className='lg:hidden text-center w-[140px] h-[36px] py-2 text-[12px] font-normal text-white bg-[#F37E25] rounded-full'>Get a Demo</button>
            </div>

            {/* for sm screen */}
            <div className='absolute bottom-[-30px] right-0'>
              <Image src={ellips2} alt="" width={130} height={130} />
            </div>
          </div>
        </section>

        {/* part 2 large screen */}
        <section className='relative hidden lg:block bg-[#214295] w-full py-8'>
          <div className='absolute top-[50%] left-0'>
            <Image src={halfCircle} alt="" className='w-[220px] h-[220px] 
            xl:w-[350px] xl:h-[350px]
            2xl:w-[500px] 2xl:h-[500px]' />
          </div>
          <div className='relative max-w-[1920px] mx-auto flex text-white w-full my-16'>
            <div className='flex flex-col gap-y-6 w-4/12 ml-[8%]'>
              <p className='text-[30px] xl:text-[36px] 2xl:text-[42px] font-semibold text-left'>What set Tyroo | CJ  <br></br>apart?</p>
              <p className='text-[16px] xl:text-[18px] 2xl:text-[20px] font-normal text-left'>Tyroo | CJ is transforming performance in <br></br> APAC with its global capabilities and <br></br> market focus and expertise.</p>
              <button
                onClick={() => {
                  setDemoState({
                    open: true,
                  })
                }}
                className='w-[180px] h-[40px] xl:w-[220px] xl:h-[56px] xl:text-[26px] font-normal text-white bg-[#F37E25] rounded-full'>Get a Demo </button>
            </div>
            <div className='w-8/12 grid grid-cols-2 gap-4'>
              {cardOneArr.map((obj, index) => {
                return (
                  <CardOne
                    key={index}
                    imgSrc={obj.imgSrc}
                    heading={obj.heading}
                    text={obj.text} />
                )
              })}
            </div>

          </div>
        </section>

        {/* part 3 for small devices */}
        <section className='w-full py-8 lg:hidden'>
          <div className='relative max-w-[1920px] mx-auto flex flex-col gap-y-8 w-full my-8'>
            <p className='text-[24px] font-semibold text-center px-12'>Tyroo | CJ’s  end-to-end seamless tech platform built to
              offer transparency and trusted growth</p>

            <div className='absolute top-[-60px] right-0'>
              <Image src={onboardLine} alt="" width={120} height={120} />
            </div>

            <div className='flex flex-col w-full'>
              {/* div 1 */}
              <div className='flex w-full justify-around'>
                <div className='shadow-lg rounded-xl w-[190px] h-[190px] md:w-[230px] md:h-[230px] p-4 flex flex-col justify-around hover:bg-[#6E1B35] hover:text-white'>
                  <span className='text-[16px] md:text-[22px] font-bold'>Onboard</span>
                  <p className='text-[12px] md:text-[16px] font-normal'>Get up and running quickly with the right integration that sets you up for success today, and well into the future.</p>
                </div>
                <div className='shadow-lg rounded-xl w-[190px] h-[190px] md:w-[230px] md:h-[230px] p-4 flex flex-col justify-around hover:bg-[#6E1B35] hover:text-white'>
                  <span className='text-[16px] md:text-[22px] font-bold'>Engage</span>
                  <p className='text-[12px] md:text-[16px] font-normal'>Implement omni-channel program strategies and commission structures to bring out the best in your partnerships.</p>
                </div>
              </div>

              {/* div 2 */}
              <div className='w-full flex items-center justify-center py-4'>
                <Image src={onboardingSm} alt="onbording-sm" className='h-[250px] w-[330px] md:h-[300px] md:w-[400px]' />
              </div>

              {/* div 3 */}
              <div className='flex w-full justify-around'>
                <div className='shadow-lg rounded-xl w-[190px] h-[190px] md:w-[230px] md:h-[230px] p-4 flex flex-col justify-around hover:bg-[#6E1B35] hover:text-white'>
                  <span className='text-[16px] md:text-[22px] font-bold'>Discover</span>
                  <p className='text-[12px] md:text-[16px] font-normal'>Find and activate new partnerships that help amplify your brand message and reach consumers at scale.</p>
                </div>
                <div className='shadow-lg rounded-xl w-[190px] h-[190px] md:w-[230px] md:h-[230px] p-4 flex flex-col justify-around hover:bg-[#6E1B35] hover:text-white'>
                  <span className='text-[16px] md:text-[22px] font-bold'>Optimize</span>
                  <p className='text-[12px] md:text-[16px] font-normal'>Insights on demand, made easy. Understand your customer’s value, journey touchpoints and how you stack up against your competitors.</p>
                </div>
              </div>
            </div>

            <div className='flex justify-center w-full'>
              <button
                onClick={() => {
                  setDemoState({
                    open: true,
                  })
                }}
                className='flex justify-center items-center w-[140px] h-[40px] text-[14px] text-white bg-[#F37E25] rounded-full'>Get a Demo </button>
            </div>
          </div>
        </section>

        {/* part 3 for large devices */}
        <section className='hidden lg:block lg:w-full'>
          <div className='relative max-w-[1920px] mx-auto flex flex-col gap-y-8 w-full my-16'>
            <p className='text-center text-[36px] xl:text-[42px] font-semibold px-16'>Tyroo | CJ’s  end-to-end seamless tech platform built to
              offer transparency and trusted growth</p>

            <div className='absolute top-[-60px] right-0'>
              <Image src={onboardLine} alt="" width={200} height={200} />
            </div>

            <div className='flex justify-around w-full'>
              {/* div 1 */}
              <div className='flex flex-col gap-y-4 justify-around'>
                <div className='shadow-lg rounded-xl w-[350px] h-[230px] xl:w-[400px] xl:h-[260px] p-4 flex flex-col justify-evenly hover:bg-[#6E1B35] hover:text-white'>
                  <span className='text-[24px] xl:text-[34px] font-bold'>Onboard</span>
                  <p className='text-[16px] xl:text-[18px] text-normal'>Get up and running quickly with the right integration that sets you up for success today, and well into the future.</p>
                </div>
                <div className='shadow-lg rounded-xl w-[350px] h-[230px] xl:w-[400px] xl:h-[260px] p-4 flex flex-col justify-evenly hover:bg-[#6E1B35] hover:text-white'>
                  <span className='text-[24px] xl:text-[34px] font-bold'>Engage</span>
                  <p className='text-[16px] xl:text-[18px] text-normal'>Implement omni-channel program strategies and commission structures to bring out the best in your partnerships.</p>
                </div>
              </div>

              {/* div 2 */}
              <div className='flex items-center justify-center py-4'>
                <Image src={onboardingLg} alt="onbording-lg" className='h-[340px] xl:h-[450px]' />
              </div>

              {/* div 3 */}
              <div className='flex flex-col gap-y-4 justify-around'>
                <div className='shadow-lg rounded-xl w-[350px] h-[230px] xl:w-[400px] xl:h-[260px] p-4 flex flex-col justify-evenly hover:bg-[#6E1B35] hover:text-white'>
                  <span className='text-[24px] xl:text-[34px] font-bold'>Discover</span>
                  <p className='text-[16px] xl:text-[18px] text-normal'>Find and activate new partnerships that help amplify your brand message and reach consumers at scale.</p>
                </div>
                <div className='shadow-lg rounded-xl w-[350px] h-[230px] xl:w-[400px] xl:h-[260px] p-4 flex flex-col justify-evenly hover:bg-[#6E1B35] hover:text-white'>
                  <span className='text-[24px] xl:text-[34px] font-bold'>Optimize</span>
                  <p className='text-[16px] xl:text-[18px] text-normal'>Insights on demand, made easy. Understand your customer’s value, journey touchpoints and how you stack up against your competitors.</p>
                </div>
              </div>

            </div>
            <div className='flex justify-center w-full'>
              <button
                onClick={() => {
                  setDemoState({
                    open: true,
                  })
                }}
                className='flex justify-center items-center w-[160px] h-[40px] text-[20px] xl:w-[220px] xl:h-[56px] xl:text-[26px] text-white bg-[#F37E25] rounded-full'>Get a Demo </button>
            </div>

          </div>
        </section>

        {/* part 4 */}
        <section className='relative bg-[#025450] w-full'>
          {/* for sm screen */}
          <div className='absolute top-0 right-0'>
            <Image src={greenLine} alt="grrenline" className='w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]' />
          </div>
          <div className='max-w-[1920px] mx-auto flex flex-col gap-y-8 text-white w-full my-16 lg:flex lg:flex-col lg:justify-around'>
            <div className='flex flex-col gap-y-6 ml-[5%] lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-[6%]'>
              <div className='text-[26px] xl:text-[42px] font-semibold text-left'>
                <span>The combined power of Tyroo | CJ <br></br>in numbers</span>
              </div>
              <div className='flex items-center gap-x-2 text-[#44FFF6] mr-[4%]'>
                <span className='text-[70px] font-semibold xl:text-[120px]'>25</span>
                <span className='text-[18px] font-normal xl:text-[22px]'>Years in <br></br> Business</span>
              </div>
            </div>
            <div className='flex flex-col items-center gap-y-10 lg:flex lg:flex-row lg:mx-[4%]'>
              <div className='flex justify-around w-full'>
                <div className='flex flex-col'>
                  <span className='text-[40px] font-bold xl:text-[70px]'>1B+</span>
                  <span className='flex flex-col font-normal text-[12px] xl:text-[18px]'>
                    <span>Global Consumers</span>
                    <span>Reached Monthly</span>
                  </span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-[40px] font-bold xl:text-[70px]'>700+</span>
                  <span className='flex flex-col font-normal text-[12px] xl:text-[18px]'>
                    <span>Full program</span>
                    <span>launches annually</span>
                  </span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-[40px] font-bold xl:text-[70px]'>25M</span>
                  <span className='flex flex-col font-normal text-[12px] xl:text-[18px]'>
                    <span>Content Creators</span>
                  </span>
                </div>
              </div>
              <div className='flex justify-around w-full'>
                <div className='flex flex-col'>
                  <span className='text-[40px] font-bold xl:text-[70px]'>31B+</span>
                  <span className='flex flex-col font-normal text-[12px] xl:text-[18px]'>
                    <span>Reach of Monthly Visits</span>
                    <span>Network Wide</span>
                  </span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-[40px] font-bold xl:text-[70px]'>30%+</span>
                  <span className='flex flex-col font-normal text-[12px] xl:text-[18px]'>
                    <span>Average year-over-year</span>
                    <span>client growth post affiliate</span>
                    <span>migration</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* for sm screen */}
          <div className='absolute bottom-0 left-0'>
            <Image src={quaterLine} alt="q1" className='w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]' />
          </div>
        </section>

        {/* part 5 for small devices */}
        <section className='lg:hidden w-full py-8'>
          <div className='max-w-[1920px] mx-auto flex flex-col gap-y-8 w-full'>
            <p className='text-[24px] font-semibold text-center'>Creating impact with our clients</p>
            <div className='flex justify-center items-center'>
              <ImageSlider2 />
            </div>
            <div className='flex justify-center w-full'>
              <a href='https://tyroo.com/case-studies/' target='_blank' className='no-underline flex justify-center items-center gap-x-2 w-[190px] h-[36px] text-[12px] text-white bg-[#F37E25] rounded-full mt-4'>See All Case Studies <FaArrowRight /> </a>
            </div>
          </div>
        </section>

        {/* part 5 for large devices */}
        <section className='hidden lg:block w-full py-8'>
          <div className='max-w-[1920px] mx-auto flex flex-col gap-y-8 w-full'>
            <div className='flex justify-between item-center mx-[5%]'>
              <p className='lg:text-[30px] xl:text-[42px] font-semibold text-center'>Creating impact with our clients</p>
              <a href='https://tyroo.com/case-studies/' target='_blank' className='no-underline flex justify-center items-center gap-x-2 w-[280px] text-[22px] text-white bg-[#F37E25] rounded-full'>See All Case Studies <FaArrowRight /> </a>
            </div>

            <div className='flex flex-col gap-y-8'>
              <div className='flex items-center justify-evenly'>
                {/* card 1 */}
                <a href='https://www.cj.com/case-study/expedia-group-flipgive-shatter-revenue-social-impact-goals-with-cj' target='_blank'
                  style={{
                    backgroundImage: `linear-gradient(6deg, rgba(2,0,36,1) 0%, rgba(18,144,180,0.02006740196078427) 100%, rgba(0,212,255,1) 100%), url(${brandcj_1.src})`,
                    width: '45%',
                    height: 600,
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 30,
                    borderRadius: 14,
                    textDecoration: 'none'
                  }}
                >
                  <span className='bg-white w-[110px] text-md py-1 flex justify-center item-center rounded-full text-green-500 font-semibold'>
                    FEATURED
                  </span>
                  <div className='flex flex-col text-white'>
                    <h1 className='font-[600] text-2xl'>
                      Expedia Group & FlipGive Shatter Revenue & Social Impact Goals with Unique Partnership Enabled by CJ
                    </h1>
                    <div className='flex items-center space-x-6'>
                      <Image src={CJ} width={65} height={65} alt='cj' className='rounded-full border-2' />
                      <span className='text-[12px] font-bold bg-[#43bfb6] py-1 px-2 rounded-sm'>CASE STUDY</span>
                    </div>
                  </div>
                </a>
                {/* card 2 */}
                <a href='https://www.cj.com/case-study/consumer-electronics-brand-sees-growth-from-recruitment-activation' target='_blank'
                  style={{
                    backgroundImage: `linear-gradient(6deg, rgba(2,0,36,1) 0%, rgba(18,144,180,0.02006740196078427) 100%, rgba(0,212,255,1) 100%), url(${brandcj_2.src})`,
                    width: '45%',
                    height: 600,
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 30,
                    borderRadius: 14,
                    textDecoration: 'none',
                  }}
                >
                  <span className='bg-white w-[110px] text-md py-1 flex justify-center item-center rounded-full text-green-500 font-semibold'>
                    FEATURED
                  </span>

                  <div className='flex flex-col text-white'>
                    <h1 className='font-[600] text-2xl'>
                      Consumer Electronics Brand Sees Big Growth from Recruitment & Activation
                    </h1>
                    <div className='flex items-center space-x-6'>
                      <Image src={CJ} width={65} height={65} alt='cj' className='rounded-full border-2' />
                      <span className='text-[12px] font-bold bg-[#43bfb6] py-1 px-2 rounded-sm'>CASE STUDY</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className='flex items-center justify-evenly'>
                {/* card 3 */}
                <a href='https://www.cj.com/case-study/autodesk-leverages-cj-affiliate-for-successful-apac-expansion' target='_blank'
                  style={{
                    backgroundImage: `linear-gradient(6deg, rgba(2,0,36,1) 0%, rgba(18,144,180,0.02006740196078427) 100%, rgba(0,212,255,1) 100%), url(${brandcj_3.src})`,
                    width: '28%',
                    height: 450,
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 30,
                    borderRadius: 14,
                    textDecoration: 'none',
                  }}
                >
                  <div className='flex flex-col text-white'>
                    <h1 className='font-[600] text-xl'>
                      Autodesk Leverages CJ Affiliate for Successful APAC Expansion
                    </h1>
                    <div className='flex items-center space-x-6'>
                      <Image src={CJ} width={50} height={50} alt='cj' className='rounded-full border-2' />
                      <span className='text-[10px] font-bold bg-[#43bfb6] py-1 px-2 rounded-sm'>CASE STUDY</span>
                    </div>
                  </div>
                </a>
                {/* card 4 */}
                <a href='https://www.cj.com/case-study/fortune-500-retailer-drives-incremental-revenue-using-cj-customer-level-omni-channel' target='_blank'
                  style={{
                    backgroundImage: `linear-gradient(6deg, rgba(2,0,36,1) 0%, rgba(18,144,180,0.02006740196078427) 100%, rgba(0,212,255,1) 100%), url(${brandcj_4.src})`,
                    width: '28%',
                    height: 450,
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 30,
                    borderRadius: 14,
                    textDecoration: 'none',
                  }}
                >
                  <div className='flex flex-col text-white'>
                    <h1 className='font-[600] text-xl'>
                      Fortune 500 Retailer Drives Incremental Revenue using CJ Customer-Level Omni-Channel Insights
                    </h1>
                    <div className='flex items-center space-x-6'>
                      <Image src={CJ} width={50} height={50} alt='cj' className='rounded-full border-2' />
                      <span className='text-[10px] font-bold bg-[#43bfb6] py-1 px-2 rounded-sm'>CASE STUDY</span>
                    </div>
                  </div>
                </a>
                {/* card 5 */}
                <a href='https://www.cj.com/case-study/lifestyle-blogger-sees-revenue-growth-through-audience-expansion' target='_blank'
                  style={{
                    backgroundImage: `linear-gradient(6deg, rgba(2,0,36,1) 0%, rgba(18,144,180,0.02006740196078427) 100%, rgba(0,212,255,1) 100%), url(${brandcj_5.src})`,
                    width: '28%',
                    height: 450,
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 30,
                    borderRadius: 14,
                    textDecoration: 'none',
                  }}
                >
                  <div className='flex flex-col text-white'>
                    <h1 className='font-[600] text-xl'>
                      Lifestyle Blogger Sees Revenue Growth through Audience Expansion
                    </h1>
                    <div className='flex items-center space-x-6'>
                      <Image src={CJ} width={50} height={50} alt='cj' className='rounded-full border-2' />
                      <span className='text-[10px] font-bold bg-[#43bfb6] py-1 px-2 rounded-sm'>CASE STUDY</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* part 6 */}
        <section className='w-full bg-[#214295]'>
          <div className='max-w-[1920px] mx-auto flex flex-col items-center gap-y-8 w-full my-16'>
            <div className='lg:flex lg:gap-x-36 lg:items-center'>
              <p className='text-center text-[24px] font-semibold text-white xl:text-[42px]'>Decoding trends, strategies, and innovations</p>
              <div className='hidden lg:block'>
                <a href='https://tyroo.com/blogs/' target='_blank' className='no-underline flex justify-center items-center gap-x-2 w-[240px] h-[50px] text-[16px] text-white bg-[#F37E25] rounded-full'>Read All Blogs <FaArrowRight /> </a>
              </div>
            </div>
            <div className='flex flex-col items-center gap-y-10 lg:hidden'>
              {cardTwoArr.map((obj, index) => {
                return (
                  <CardTwo
                    key={index}
                    imgSrc={obj.imgSrc}
                    heading={obj.heading}
                    date={obj.date}
                    text={obj.text}
                    link={obj.link} />
                )
              })}
            </div>
            <div className='hidden lg:block lg:w-[80%]'>
              <ImageSlider />
            </div>

            <a href='https://tyroo.com/blogs/' target='_blank' className='no-underline lg:hidden flex justify-center items-center gap-x-2 w-[160px] h-[36px] text-[12px] text-white bg-[#F37E25] rounded-full'>Read All Blogs <FaArrowRight /> </a>
          </div>
        </section>

        {/* part 7 for small screen */}
        <section className='lg:hidden w-full py-8'>
          <div className='relative max-w-[1920px] mx-auto flex flex-col justify-center items-center gap-y-8 px-10'>
            <div className='flex flex-col items-center'>
              <p className='text-center text-[26px] font-semibold'>Join us</p>
              <p className='text-center text-[16px] px-14'>Unlock growth and power the digital ecosystem with us</p>
            </div>
            <Image src={joinus} className='w-[80%] h-[80%]' alt="join-us" />
            <a href="https://career.tyroocj.com/" target='_blank' className='no-underline absolute bottom-[10px] w-[160px] h-[32px] md:w-[190px] md:h-[40px] flex justify-center items-center gap-x-2 text-[12px] md:text-[16px] text-white bg-[#F37E25] rounded-full'>See All Opening <FaArrowRight /> </a>
          </div>
        </section>

        {/* part 7 for large screen */}
        <section className='hidden lg:block w-full py-8'>
          <div className='max-w-[1920px] mx-auto'>
            <div className='flex justify-center items-center gap-x-10'>
              <div className='flex flex-col items-center gap-y-8'>
                <Image src={joinusLG} className='' alt="join-us" />
                <a href="https://career.tyroocj.com/" target='_blank' className='no-underline w-[200px] h-[42px] flex justify-center items-center gap-x-2 text-[20px] text-white bg-[#F37E25] rounded-full'>Join us <FaArrowRight /> </a>
              </div>
              <div className='flex flex-col items-center justify-center gap-y-4'>
                <div className='flex flex-col w-full gap-y-12'>
                  {/* input fields */}
                  <div className='text-[32px] font-semibold text-center mt-12'> Contact Us</div>
                  <div className='flex flex-col items-center gap-y-12'>
                    <div class="w-[350px]">
                      <label class="block text-gray-700 text-sm" for="firstName">
                        First Name
                      </label>
                      <input type="text" class="bg-white w-full border-b-gray-500 border-2 border-t-white border-l-white border-r-white focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none" />
                    </div>
                    <div class="w-[350px]">
                      <label class="block text-gray-700 text-sm" for="firstName">
                        Last Name
                      </label>
                      <input type="text" class="bg-white w-full border-b-gray-500 border-2 border-t-white border-l-white border-r-white focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none" />
                    </div>
                    <div class="w-[350px]">
                      <label class="block text-gray-700 text-sm" for="firstName">
                        Company Name
                      </label>
                      <input type="text" class="bg-white w-full border-b-gray-500 border-2 border-t-white border-l-white border-r-white focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none" />
                    </div>
                    <div class="w-[350px]">
                      <label class="block text-gray-700 text-sm" for="firstName">
                        Email
                      </label>
                      <input type="email" class="bg-white w-full border-b-gray-500 border-2 border-t-white border-l-white border-r-white focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none" />
                    </div>
                    <button className='mt-16 flex w-[200px] justify-center items-center gap-x-2 py-2 text-[18px] text-white bg-[#F37E25] rounded-full'>Sign up now<FaArrowRight /> </button>
                  </div>

                  {/* <div className='absolute bottom-[-80px] right-0 z-0'>
                    <Image src={bigCircle} alt="contact" width={140} height={140} />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* part 8 for small */}
        <section className='lg:hidden w-full py-8 bg-[#F7F7F7]'>
          <div className='relative max-w-[1920px] mx-auto flex flex-col justify-center items-center gap-y-8'>

            <div className='absolute top-[-100px] left-0'>
              <Image src={contact} alt="contact" width={70} height={70} />
            </div>

            <div className='flex flex-col items-center gap-y-4'>
              <p className='text-center text-[24px] font-semibold'>Contact Us</p>
              <p className='text-center text-[14px] px-12'>Any question or remarks? Just write us a message!</p>
            </div>

            {/* input fields and black bg section */}
            <div className='flex flex-col w-full'>
              {/* input fields */}
              <div className='flex flex-col items-center gap-y-12'>
                <div class="w-[350px]">
                  <label class="block text-gray-700 text-sm" for="firstName">
                    First Name
                  </label>
                  <input type="text" class="bg-[#F7F7F7] w-full border-b-gray-500 border-2 border-t-[#F7F7F7] border-l-[#F7F7F7] border-r-[#F7F7F7] focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none" />
                </div>
                <div class="w-[350px]">
                  <label class="block text-gray-700 text-sm" for="firstName">
                    Last Name
                  </label>
                  <input type="text" class="bg-[#F7F7F7] w-full border-b-gray-500 border-2 border-t-[#F7F7F7] border-l-[#F7F7F7] border-r-[#F7F7F7] focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none" />
                </div>
                <div class="w-[350px]">
                  <label class="block text-gray-700 text-sm" for="firstName">
                    Company Name
                  </label>
                  <input type="text" class="bg-[#F7F7F7] w-full border-b-gray-500 border-2 border-t-[#F7F7F7] border-l-[#F7F7F7] border-r-[#F7F7F7] focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none" />
                </div>
                <div class="w-[350px]">
                  <label class="block text-gray-700 text-sm" for="firstName">
                    Email
                  </label>
                  <input type="email" class="bg-[#F7F7F7] w-full border-b-gray-500 border-2 border-t-[#F7F7F7] border-l-[#F7F7F7] border-r-[#F7F7F7] focus:border-transparent focus:ring-0 focus:border-b-black focus:outline-none" />
                </div>
                <button className='flex w-[160px] justify-center items-center gap-x-2 py-2 text-[16px] text-white bg-[#F37E25] rounded-full'>Sign up now<FaArrowRight /> </button>
              </div>

              <div className='absolute bottom-[-80px] right-0 z-0'>
                <Image src={bigCircle} alt="contact" width={140} height={140} />
              </div>
            </div>
          </div>
        </section>

        {/* part 9 footer */}
        <section className='w-full py-8 bg-[#214295] text-white'>
          <div className='max-w-[1920px] mx-auto flex flex-col justify-center items-center lg:flex lg:flex-row'>
            <div className='lg:hidden w-full p-10'>
              <Image src={tyroo} alt="tyroo" className='h-[50px] w-[150px]' />
            </div>

            <div className='hidden lg:flex lg:flex-col lg:items-start lg:text-[16px] lg:gap-y-6 lg:w-full lg:p-10'>
              <Image src={tyroo} alt="tyroo" className='h-[50px] w-[150px]' />
              <span>Copyright © 2023 tyroo ltd.</span>
              <span>All rights reserved</span>
              <div className='flex gap-x-6'>
                <a href='https://www.facebook.com/tyroomedia/' target='_blank' className='no-underline text-white'> <FaFacebookF className='h-[40px] w-[40px] border-2 border-[#4B66A9] bg-[#4B66A9] rounded-full p-2' /> </a>
                <a href='https://twitter.com/tyrootech' target='_blank' className='no-underline text-white'>  <FaTwitter className='h-[40px] w-[40px] border-2 border-[#4B66A9] bg-[#4B66A9] rounded-full p-2' /> </a>
                <a href='https://www.linkedin.com/company/200255/admin/feed/posts/' target='_blank' className='no-underline text-white'>  <RiLinkedinFill className='h-[40px] w-[40px] border-2 border-[#4B66A9] bg-[#4B66A9] rounded-full p-2' /> </a>
                <a href='https://www.instagram.com/tyrootech/' target='_blank' className='no-underline text-white'>  <FaInstagram className='h-[40px] w-[40px] border-2 border-[#4B66A9] bg-[#4B66A9] rounded-full p-2' /> </a>
              </div>
            </div>

            <div className='flex justify-around w-full'>
              <div className='flex flex-col gap-y-4 text-[14px]'>
                <span className='text-[18px] font-semibold'>Company</span>
                <span>About Us</span>
                <span>Contact Us</span>
                <span>Blog</span>
                <span>Pricing</span>
                <span>Testimonials</span>
              </div>
              <div className='flex flex-col text-[14px] gap-y-4'>
                <span className='text-[18px] font-semibold'>Support</span>
                <span>Help Center</span>
                <span>Term of service</span>
                <span>Legal</span>
                <span>Privacy policy</span>
                <span>Status</span>
              </div>
            </div>

            <div className='lg:hidden flex flex-col items-start text-[14px] gap-y-6 w-full p-10'>
              <span>Copyright © 2023 tyroo ltd.</span>
              <span>All rights reserved</span>
              <div className='flex gap-x-6'>
                <a href='https://www.facebook.com/tyroomedia/' target='_blank' className='no-underline text-white'> <FaFacebookF className='h-[40px] w-[40px] border-2 border-[#4B66A9] bg-[#4B66A9] rounded-full p-2' /> </a>
                <a href='https://twitter.com/tyrootech' target='_blank' className='no-underline text-white'>  <FaTwitter className='h-[40px] w-[40px] border-2 border-[#4B66A9] bg-[#4B66A9] rounded-full p-2' /> </a>
                <a href='https://www.linkedin.com/company/200255/admin/feed/posts/' target='_blank' className='no-underline text-white'>  <RiLinkedinFill className='h-[40px] w-[40px] border-2 border-[#4B66A9] bg-[#4B66A9] rounded-full p-2' /> </a>
                <a href='https://www.instagram.com/tyrootech/' target='_blank' className='no-underline text-white'>  <FaInstagram className='h-[40px] w-[40px] border-2 border-[#4B66A9] bg-[#4B66A9] rounded-full p-2' /> </a>
              </div>
            </div>

            <div className='hidden lg:flex lg:flex-col lg:pr-20'>
              <span className='text-[18px] font-semibold'>Stay up to date</span>
              <div class="mb-4 w-[250px] xl:w-[350px]">
                <input
                  class="bg-[#4D68AA] border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline placeholder:text-white"
                  id="firstName" type="text" placeholder="Your email address" />
              </div>
            </div>
          </div>
        </section>
      </main >
      {modalState.open && <Modal modalState={modalState} setModalState={setModalState} />}
      {demoState.open && <Modal2 demoState={demoState} setDemoState={setDemoState} />}
    </>
  )
}