"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  User,
  ShieldCheck,
  Copyright,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Handshake,
  Heart,
  MapPin,
  Mail,
  Clock,
  Map,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import patient from "../public/dentist2.jpg";
import CircularText from "./Component/CircularText";
import aboutUs from "../public/about-us.jpg";
import aboutUs2 from "../public/about2.png";
import braces from "../public/braces.png";
import invisalign from "../public/Invisalign.png";
import prothodontics from "../public/prothodontics.png";
import ceramics from "../public/ceramic-braces.png";
import consultation from "../public/consultation.jpg";
import women1 from "../public/women1.avif";
import women2 from "../public/women2.jpg";
import women3 from "../public/women3.jpg";
import women4 from "../public/women4.avif";
import appointment from "../public/book-appointment.png";

const feedback: {
  img: StaticImageData;
  name: string;
  profession: string;
  rating: string;
  feed: string;
}[] = [
  {
    img: women1,
    name: "Ankita Sharma",
    profession: "Teacher",
    rating: "⭐⭐⭐⭐⭐",
    feed: "Dr. Rathi made my root canal absolutely painless - I finally enjoy going to the dentist without fear!",
  },
  {
    img: women2,
    name: "Neha Mehta",
    profession: "Software Engineer",
    rating: "⭐⭐⭐⭐",
    feed: "I was nervous about dental treatment, but Dr. Rathi explained everything patiently. My smile looks so much better now!",
  },
  {
    img: women3,
    name: "Ritika Kapoor",
    profession: "Interior Designer",
    rating: "⭐⭐⭐⭐⭐",
    feed: "Professional, friendly, and painless treatment — that's exactly what I experienced here. Truly one of the best dental clinics I've visited.",
  },
  {
    img: women4,
    name: "Alice",
    profession: "Teacher",
    rating: "⭐⭐⭐⭐⭐",
    feed: "Dr. Rathi and her team are amazing! They handled my dental implant with so much care. I feel more confident than ever.",
  },
];

export default function Home() {
  const [currentDiv, setCurrentDiv] = useState(0);

  const handleLeft = () => {
    currentDiv > 0 ? setCurrentDiv((prev) => currentDiv - 1) : "";
  };
  const handleRight = () => {
    currentDiv < 3 ? setCurrentDiv((prev) => currentDiv + 1) : "";
  };

  return (
    <div className="w-full h-screen font-[var(--font-geist-sans)]">
      <nav className="flex items-center md:px-24 px-4 w-full lg:py-2 py-3 justify-between bg-[#fff]">
        <div className="text-2xl font-semibold text-[#3083FF]">
          <span className="text-[#13182F]">Dr</span> Rathi's
        </div>
        <NavigationMenu className="md:block hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold text-base">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Option 1</NavigationMenuLink>
                <NavigationMenuLink>Option 2</NavigationMenuLink>
                <NavigationMenuLink>Option 3</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold text-base">
                All Pages
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Option 1</NavigationMenuLink>
                <NavigationMenuLink>Option 2</NavigationMenuLink>
                <NavigationMenuLink>Option 3</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="p-1 rounded-full flex items-center text-center justify-center bg-white text-[#3083FF] cursor-pointer border-[2px] border-[#3083FF] hover:text-[#3083FF] transition-all ease-in-out duration-250 hover:bg-white">
          <User className="stroke-1.2 size-5" />
        </div>
      </nav>
      {/* Hero */}
      <section className="md:px-24 px-4 w-full h-screen md:pt-20 pt-15 md:pb-0 pb-20 md:space-y-0 space-y-6 bg-[#3083FF] rounded-b-3xl text-white">
        <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-4">
          <p className="font-semibold -mb-2 text-lg">Dental Specialist</p>
          <p className="md:text-7xl text-4xl font-semibold md:w-[50%]">
            Gentle <span className="italic font-semibold ">Dental Care</span>{" "}
            for the Whole Family
          </p>
          <p className="font-medium md:w-[20%] md:pt-10 ">
            Dr Rathi's clinic provides dental care facilities that specialized
            in providing dental care services to patients.
          </p>
          <div className="flex flex-col gap-4 w-full mt-1">
            <button className="w-full bg-white text-[#3083FF] font-bold py-3 rounded-sm">
              Our Services
            </button>
            <button className="flex items-center font-semibold gap-2 w-full border-[2px] border-white rounded-sm py-3 justify-center">
              <PhoneCall className="size-4.5" /> Book Appointment
            </button>
          </div>
        </div>
        <div className="w-full relative">
          <div className="overflow-hidden md:w-[60vw] md:h-auto h-[35vh] w-full right-0 md:-top-12">
            <Image
              src={patient}
              alt=""
              width={600}
              height={600}
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* large */}
          <div className="w-[8.2rem] h-[8.2rem] bg-[#79f4bc] rounded-full border-[1px] border-black md:flex hidden items-center justify-center absolute md:left-[21.5rem] left-0 top-24">
            <div className="w-[5.5rem] h-[5.5rem] bg-white rounded-full border-[1px] border-black absolute flex items-center justify-center">
              <ShieldCheck className="size-10 stroke-1 text-[#3083FF]" />
            </div>
            <CircularText
              text="Your dental health is our top priority - "
              radius={65}
              speed={8}
              className=""
            />
          </div>
          {/* mobile */}
          <div className="w-[6rem] h-[6rem] bg-[#79f4bc] rounded-full border-[1px] border-black flex md:hidden items-center justify-center md:left-[21.5rem] left-0 absolute -bottom-9">
            <div className="w-[3.5rem] h-[3.5rem] bg-white rounded-full border-[1px] border-black absolute flex items-center justify-center">
              <ShieldCheck className="size-7 stroke-1.5 text-black" />
            </div>
            <CircularText
              text="Your dental health is our top priority - "
              radius={45}
              speed={8}
              className="!text-xs"
            />
          </div>
        </div>
      </section>
      <div className="w-full h-40 bg-[#3083FF] md:block hidden"></div>
      {/* Benefits */}
      <section className="w-full min-h-screen md:bg-[#3083FF] bg-white text-[#000] md:px-24 px-4 flex md:flex-row flex-col md:gap-80 gap-2 md:pt-20 pt-20 md:text-white">
        <div className="flex flex-col justify-between md:text-start text-center">
          <p className="md:text-lg text-[#3083FF] uppercase font-bold tracking-wider">
            about us
          </p>
          <Image
            src={aboutUs}
            alt=""
            width={600}
            height={600}
            className="w-[25vw] h-auto md:block hidden"
          />
        </div>
        <div className="md:w-[30%] flex flex-col md:gap-10 gap-4 md:text-start text-center">
          <p className="md:text-5xl text-4xl font-semibold">
            Emphasizes health{" "}
            <span className="text-[#3083FF] italic">benefits</span> of straight
            teeth
          </p>{" "}
          <p className="font-medium">
            Dental care is essential for maintaining good oral health and
            overall well-being. Dental care services typically include
            preventive, restorative, and cosmetic procedures that help keep
            teeth and gums healthy and looking great.
          </p>{" "}
          <div>
            <button className="bg-[#3083FF] md:text-sm md:px-5.5 px-8 rounded-sm py-3 cursor-pointer text-white md:font-semibold font-semibold border-[2px] border-[#3083FF] hover:border-[#79f4bc] hover: hover:bg-[#3083FF] transition-all duration-200 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-[#3083FF] w-full h-[90vh] rounded-2xl text-center mt-40 flex flex-col gap-5 items-center px-5 pb-5">
          <div className="w-full h-62 bg-black rounded-xl overflow-hidden relative -mt-32">
            <Image
              src={aboutUs}
              alt=""
              width={600}
              height={600}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full h-96 bg-black rounded-xl overflow-hidden relative">
            <Image
              src={aboutUs2}
              alt=""
              width={600}
              height={600}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full text-white">
            <div className="py-3 border-b-[2px] border-[#ffffff1d] w-full">
              <p className="text-3xl font-extrabold">
                7<span className="">+</span>
              </p>
              <p className="font-semibold">Years Expertise</p>
            </div>
            <div className="py-3 border-b-[2px] border-[#ffffff1d] w-full">
              <p className="text-3xl font-extrabold">
                14<span className="">K</span>
              </p>
              <p className="font-semibold">Delighted Clients</p>
            </div>
            <div className="py-3 w-full">
              <p className="text-3xl font-extrabold">
                1000<span className="">+</span>
              </p>
              <p className="font-semibold">Great Reputation</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="w-full min-h-screen md:px-24 px-4 flex md:flex-row flex-col md:gap-[30rem] gap-10 py-20 text-center">
        <div className="w-full space-y-2">
          <p className="uppercase font-bold md:text-black text-[#3083FF]">
            our services
          </p>
          <p className="font-semibold text-black text-4xl">
            Expert Dental Care, Made Simple
          </p>
        </div>
        <div className="w-full flex md:flex-row flex-col gap-x-6 gap-y-6 md:gap-y-0">
          <div className="space-y-6 w-full flex flex-col items-center">
            <div className="md:w-[17rem] w-[80%] h-[22rem] bg-[#E6E6E6] px-5 py-6 flex flex-col text-start justify-between rounded-md">
              <div className="space-y-1">
                <p className="text-2xl font-bold">Braces</p>
                <p className="text-sm font-medium">
                  Traditional metal braces are the most common type of
                  orthodontic treatment.
                </p>
              </div>
              <div className="w-full flex md:justify-end">
                <Image
                  src={braces}
                  width={600}
                  height={600}
                  alt=""
                  className="w-52 h-auto"
                />
              </div>
            </div>
            <div className="w-[80%] h-[22rem] bg-[#D7FCEB] px-5 py-6 flex flex-col justify-between rounded-md">
              <div className="flex flex-col gap-1 text-start md:text-center">
                <p className="font-bold text-2xl">Invisalign</p>
                <p className="text-sm font-medium">
                  Invisalign is a popular alternative to traditional braces.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Image
                  src={invisalign}
                  width={600}
                  height={600}
                  alt=""
                  className="md:w-48 w-56 h-auto"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 md:mt-20 flex md:flex-row flex-col md:items-start items-center">
            <div className="md:w-[17rem] w-[80%] text-start md:text-center h-[22rem] bg-[#FDF5EC] px-5 py-6 flex flex-col justify-between rounded-md">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-2xl">Prosthodontics Dentures</p>
                <p className="text-sm font-medium">
                  These are used to keep space open in the mouth for permanent
                  teeth.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Image
                  src={prothodontics}
                  width={600}
                  height={600}
                  alt=""
                  className="md:w-48 w-56 h-auto"
                />
              </div>
            </div>
            <div className="md:w-[17rem] w-[80%] h-[22rem] bg-[#F0F8FF] px-5 py-6 flex flex-col justify-between rounded-md">
              <div className="flex flex-col gap-1 text-start md:text-center">
                <p className="font-bold text-2xl">Ceramic braces</p>
                <p className="text-sm font-medium">
                  Ceramic braces are similar to traditional braces.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Image
                  src={ceramics}
                  width={600}
                  height={600}
                  alt=""
                  className="md:w-48 w-52 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feedback */}
      <section className="w-full min-h-screen bg-[#13182F] text-[#fff] md:px-24 px-4 text-center pt-15 md:space-y-5 space-y-6">
        <div className="space-y-2">
          <p className="text-cyan-500 font-bold uppercase tracking-wider">
            clients feedback
          </p>
          <p className="md:text-5xl text-4xl text-white font-semibold">
            We are making and <br /> <span className="italic">Impression</span>
          </p>
        </div>
        <div className="w-full flex overflow-x-hidden justify-center">
          {feedback.map((item, index) => (
            <div
              key={index}
              className={`w-88 h-62 bg-white rounded-lg px-5 py-5 flex-col justify-between ${
                index === currentDiv ? "flex" : "hidden"
              }`}
            >
              <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden relative bg-green-400">
                  <Image
                    src={item.img}
                    alt=""
                    width={600}
                    height={600}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-start text-xl font-bold text-black">
                  <p>{item.name}</p>
                  <p className="text-blue-400 text-base">{item.profession}</p>
                </div>
              </div>
              <div className="w-full text-start py-2">{item.rating}</div>
              <div className="text-gray-500 font-semibold text-start">
                <p>{item.feed}</p>
              </div>
            </div>
          ))}
        </div>
        {/* button */}
        <div className="w-full py-2 space-x-10 text-[#13182F]">
          <button
            className={`px-3 py-3 rounded-full ${
              currentDiv < 1 ? "bg-gray-400" : "bg-white"
            }`}
            onClick={handleLeft}
          >
            <ChevronLeft className="size-6.5" />
          </button>
          <button
            className={`px-3 py-3 rounded-full ${
              currentDiv > 2 ? "bg-gray-400" : "bg-white"
            }`}
            onClick={handleRight}
          >
            <ChevronRight className="size-6.5" />
          </button>
        </div>
        {/* review details */}
        <div className="px-8 space-y-4 mt-10">
          <div className="w-full py-3 flex justify-center items-center font-bold text-start gap-4 rounded-lg bg-[#ffffff24]">
            <div className="bg-blue-500 p-3 rounded-full">
              <Handshake />
            </div>
            <div className="space-y-1.5">
              <p>Avg rating 4.9</p>
              <p className="text-xs">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <div className="w-full py-3 flex justify-center items-center font-bold text-start gap-4 rounded-lg bg-[#ffffff24]">
            <div className="bg-pink-400 p-3 rounded-full">
              <Heart />
            </div>
            <div className="space-y-1.5">
              <p>Customer Satisfaction</p>
              <p className="text-xs">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </section>
      {/* Book appointment */}
      <section className="w-full py-10 px-4">
        <div className="w-full bg-[#3083FF] rounded-lg px-3 flex flex-col gap-5 items-center text-center py-10 text-white">
          <div>
            <p className="font-medium">Book an Appointment</p>
            <p className="text-3xl font-bold">
              Your Health, Our Dedicated Team Ready!
            </p>
          </div>
          <div className="w-full space-y-4">
            <button className="w-full flex justify-center items-center gap-2.5 py-3 text-center rounded-lg bg-[#fff] text-black font-bold">
              <PhoneCall className="size-4.5" /> Book Consultation
            </button>
            <button className="w-full flex justify-center items-center gap-2.5 py-3 text-center rounded-lg bg-[#fff] text-black font-bold">
              Healthcare Specialities
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#13182F] md:px-24 px-4 pt-20 pb-5 space-y-10 text-white">
        <div className="flex md:flex-row flex-col justify-between gap-10">
          <div className="space-y-3">
            <div className="space-y-3">
              <p className="text-white text-4xl font-semibold">
                <span className="text-cyan-500">Dr</span> Rathi's
              </p>
              <p className="font-medium">
                At Dr Rathi's Clinic, we create healthy, confident smiles with
                gentle care - from routine checkups to advanced treatments.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="space-y-2 font-medium">
              <p className="text-xl font-semibold mb-4">Quick Links</p>
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Testimonials</p>
            </div>
            <div className="space-y-2 font-medium">
              <p className="text-xl font-semibold mb-4">Utility</p>
              <p>Style Guide</p>
              <p>Licenses</p>
              <p>Changelog</p>
              <p>Protected</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-semibold">Contact</p>
            <p className="flex font-medium gap-3">
              <MapPin className="size-9 text-cyan-500" /> 1st FLOOR, opposite
              LIBERTY CINEMA HALL, Block 5C, Karol Bagh, New Delhi, 110005
            </p>
            <p className="flex font-medium items-center gap-3">
              <Mail className="size-5 text-cyan-500" /> contact@drrathiclinic.in
            </p>
            <p className="flex  font-medium items-center gap-3">
              <PhoneCall className="size-5 text-cyan-500" /> +91 88896 29377
            </p>
            <div className="flex font-medium gap-3">
              <Clock className="size-5 mt-1 text-cyan-500" />
              <div className="space-y-1">
                <p>10am to 8pm</p>
                <p>Sunday Closed</p>
              </div>
            </div>
          </div>
          <span className="w-full bg-[#ffffff22] h-[1px]"></span>
          <div className="flex items-center justify-center gap-10">
            <span className="p-2.5 bg-[#ffffff22] rounded-lg">
              <Map />
            </span>
            <span className="p-2.5 bg-[#ffffff22] rounded-lg">
              <Facebook />
            </span>
            <span className="p-2.5 bg-[#ffffff22] rounded-lg">
              <Instagram />
            </span>
            <span className="p-2.5 bg-[#ffffff22] rounded-lg">
              <Twitter />
            </span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <div>
              <PhoneCall className="size-7 stroke-1" />
            </div>
            <div className="font-semibold">
              <p>Call Anytime</p>
              <p className="text-cyan-500">+91 88896 29377</p>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-300 flex justify-between border-t-[1px] border-[#ffffff22] pt-5">
          <p className="flex items-center gap-1">
            <Copyright className="size-3.5" /> Dentico / All Rights Reserved
          </p>
          <p>Terms & Condition</p>
        </div>
      </section>
    </div>
  );
}
