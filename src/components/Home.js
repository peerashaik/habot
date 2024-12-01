import React from "react";
import { NavLink } from "react-router-dom";
import './../assets/css/home.css';
import videoBuyer from './../assets/images/video-buyer.png';
import icon1Howitwork from './../assets/images/icon1-howitwork.png';
import icon2Howitwork from './../assets/images/icon2-howitwork.png';
import icon3Howitwork from './../assets/images/icon3-howitwork.png';
import icon4Howitwork from './../assets/images/icon4-howitwork.png';
import icon5Howitwork from './../assets/images/icon5-howitwork.png';
import icon6Howitwork from './../assets/images/icon6-howitwork.png';

import Button from './Button';
import CountryList from './CountryList';
import Tabs from "./Tabs";
import styled from 'styled-components';

const CountryItems = styled.ul`
    li {
        a {
          border: 1px solid var(--secondary);
        }
    } 
`;

const Home = () => {
  return (
    <>
    <div className="hero-banner home mb-5">
        <div className="text-white text-center flex justify-center items-center flex-col absolute z-30 w-full h-full">
            <h3>Are You a Supplier?</h3>
            <h4 className="mt-2">Explore Matching Opportunities.</h4>
            <form className="flex flex-wrap justify-center md:justify-normal my-3 md:my-0 px-10 md:px-0">
                <div className="col-12 col-md-5 my-2 p-0 relative">
                    <i className="bi bi-briefcase-fill text-secondary absolute z-50 left-3 top-4"></i>
                    <input type="text" name="user_name" id="fullname" className="rounded-md w-full form-input text-gray-800 p-2 px-5" placeholder="Search your required service here" required />
                </div>
                <div className="col-12 col-md-5 my-2 px-0 md:mx-2 relative">
                    <i className="bi bi-geo-alt-fill text-secondary absolute z-50 left-3 top-4"></i>
                    <input type="text" name="user_email" id="email" className="rounded-md w-full form-input text-gray-800 p-2 px-5" placeholder="Search your desired location here" required />
                </div>
                <div className="col-12 col-md-1 my-2 p-0 md:w-3/12 text-center md:text-left">
                    <Button btnlink='/search-result' btnstyle='btn-primary' label='Search' />
                </div>
            </form>
            <p className="px-5">
                <strong>Are you a buyer?</strong>  
                <NavLink to="/" className="px-2 underline">Click here if you are looking to post a requirements</NavLink>
            </p>
        </div>
        <div className="overlay z-20"></div>
        <div className="pic z-10"></div>
        <input type="text" name="user_name" id="fullname" className="rounded-md w-full form-input text-gray-800 p-2" placeholder="Search your required service here" required />
    </div>

    <div className="container my-24">
        <div className="grid md:grid-cols-2 gap-y-10">
            <div>
                <h3 className="text-black font-bold text-4xl">Ready to dive into HABOT?</h3>
                <p className="text-black my-5">
                    Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
                </p>
                <p>
                    <Button btnlink='/login' btnstyle='w-full md:w-auto btn-primary font-bold bi arrow' label='Sign up Today !' />
                </p>
            </div>
            <div className="lg:pl-4 xl:pl-20">
                <CountryItems className="grid md:grid-cols-2">
                    <CountryList />
                </CountryItems>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="grid md:grid-cols-2 gap-y-12 color-bg blue rounded-md py-14 md:py-24 px-5 md:px-14 my-20">
            <div>
                <img className="rounded-md" src={videoBuyer} alt="Video Buyer" />
            </div>
            <div className="md:pl-10 text-white">
                <Tabs />
            </div>
        </div>
    </div>

    <div className="color-bg creamy py-14 md:py-24 px-5 md:px-14 my-28">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-y-8 text-center">
                <div className="flex justify-center items-center align-middle">
                    <h1 className="text-4xl md:text-5xl font-bold">Let Suppliers <span className="inline-block bottom-line relative">Find You</span></h1>
                </div>
                <div className="mt-4 md:m-0">
                    <Button btnlink='/get-verify' btnstyle='btn-secondary font-bold md:w-56 w-full' label='Get Verified' />
                </div>
            </div>
        </div>
    </div>

    <div className="my-32">
        <div className="container text-center">
            <div className="px-10 md:px-40 lg:px-60">
                <h1 className="text-4xl md:text-5xl mb-8 font-bold">How it works?</h1>
                <p>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            </div>
        </div>
    </div>

    <div className="container mb-36">
        <div className="grid md:grid-cols-3 howitworksList">
            <div className="p-10 flex flex-wrap flex-col justify-center items-center">
                <img src={icon1Howitwork} alt="Sing Up" />
                <p className="block mt-3 text-center">Select Your Role and Sign Up</p>
            </div>
            <div className="p-10 flex flex-wrap flex-col justify-center items-center">
                <img src={icon2Howitwork} alt="Sing Up" />
                <p className="block mt-3 text-center">Buyers Post Your Requirements</p>
            </div>
            <div className="p-10 flex flex-wrap flex-col justify-center items-center">
                <img src={icon3Howitwork} alt="Sing Up" />
                <p className="block mt-3 text-center">Review, Select, and Contact the Best Suppliers</p>
            </div>
            <div className="p-10 flex flex-wrap flex-col justify-center items-center">
                <img src={icon4Howitwork} alt="Sing Up" />
                <p className="block mt-3 text-center">Suppliers Complete your profile and get notified for opportunities</p>
            </div>
            <div className="p-10 flex flex-wrap flex-col justify-center items-center">
                <img src={icon5Howitwork} alt="Sing Up" />
                <p className="block mt-3 text-center">Contact to Buyers and Share your Quote for the service</p>
            </div>
            <div className="p-10 flex flex-wrap flex-col justify-center items-center">
                <img src={icon6Howitwork} alt="Sing Up" />
                <p className="block mt-3 text-center">Both the Parties can Connect and Make Business Leave a Feedback</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Home;