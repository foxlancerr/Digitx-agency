"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaTwitter } from "react-icons/fa";
import SectionWrapper from "../base/SectionWrapper";
import SectionTItle from "../base/SectionTItle";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ITestimonial {
  name: string;
  position: string;
  message: string;
  avatar: string;
}

const testimonials: ITestimonial[] = [
  {
    name: "Mark Roberts",
    position: "Founder of GreenEarth Eco Store",
    message:
      "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    avatar: "/assets/images/testimonials/member1.png",
  },
  {
    name: "Lisa Williams",
    position: "Head of Product at HealthTech Innovations",
    message:
      "The mobile app DigitX developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
    avatar: "/assets/images/testimonials/member2.png",
  },
  {
    name: "David Chen",
    position: "CEO of FinEdge Solutions",
    message:
      "DigitX helped us streamline our SaaS platform with elegant UI/UX and solid backend architecture. Their team delivers high-quality work on time and with great communication.",
    avatar: "/assets/images/testimonials/member3.png",
  },
  {
    name: "Sophia Martinez",
    position: "Marketing Director at UrbanPulse Agency",
    message:
      "DigitX transformed our digital presence with a modern, responsive website and a smooth CMS experience. Our engagement metrics improved drastically after launch.",
    avatar: "/assets/images/testimonials/member1.png",
  },
  {
    name: "James Patel",
    position: "CTO of CloudSync Technologies",
    message:
      "From architecture planning to deployment, the DigitX team impressed us with their technical depth and problem-solving skills. Truly dependable professionals.",
    avatar: "/assets/images/testimonials/member2.png",
  },
  {
    name: "Hannah Lee",
    position: "Founder of Artistry Studio",
    message:
      "Our e-commerce site now feels alive thanks to DigitX’s creative design and intuitive layout. Sales and customer retention have both increased significantly.",
    avatar: "/assets/images/testimonials/member3.png",
  },
  {
    name: "Robert King",
    position: "Product Manager at EduSmart Systems",
    message:
      "DigitX brought our EdTech vision to life. Their attention to detail and iterative design process made collaboration easy and effective.",
    avatar: "/assets/images/testimonials/member1.png",
  },
  {
    name: "Emily Davis",
    position: "Operations Lead at QuickServe Logistics",
    message:
      "Their team built a logistics tracking dashboard that’s fast, scalable, and visually clear. It has revolutionized how we manage real-time shipments.",
    avatar: "/assets/images/testimonials/member2.png",
  },
  {
    name: "Noah Thompson",
    position: "Founder of InnovateX Labs",
    message:
      "Working with DigitX was a seamless experience. They handled our blockchain integration project with precision and delivered beyond our expectations.",
    avatar: "/assets/images/testimonials/member3.png",
  },
  {
    name: "Olivia Johnson",
    position: "Creative Director at Visionary Media",
    message:
      "DigitX combined aesthetics and performance beautifully in our portfolio site. Their design sense and communication are top-notch.",
    avatar: "/assets/images/testimonials/member1.png",
  },
];

const TestimonialsSection = () => {
  return (
    <SectionWrapper className="bg-black">
      <div className="">
        <SectionTItle
          primaryTitle="Our"
          secondaryTitle="Testimonials"
          description="Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results."
          isNewLine={false}
        />

        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2.4}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 }, // mobile
              640: { slidesPerView: 1.2, spaceBetween: 20 }, // small tablets
              1024: { slidesPerView: 2.4, spaceBetween: 30 }, // desktop
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SectionWrapper>
  );
};

const TestimonialCard = ({ name, position, message, avatar }: ITestimonial) => {
  return (
    <Card className="relative bg-transparent border-none p-0! rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      {/* Card Content */}
      <CardContent className=" border min-h-70 border-border rounded-xl p-6 flex flex-col gap-6 text-left relative">
        {/* Twitter Icon */}
        <div className="p-4 rounded-md border bg-gray-6 border-[#2A2A2A] w-fit">
          <FaTwitter className="text-white size-6" />
        </div>

        {/* Testimonial Text */}
        <p className="text-primary-foreground text-base leading-relaxed">
          {message}
        </p>

        {/* tip image */}
        <Image
          className="absolute -bottom-5 left-2.5"
          width={40}
          height={40}
          alt="tip"
          src={"/assets/images/testimonials/Tip.png"}
        ></Image>
      </CardContent>

      {/* Author */}
      <div className="flex items-center gap-3 border-[#1F1F1F] bg-transparent mt-2">
        <Avatar className="size-15">
          <AvatarImage src={avatar} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>

        <div>
          <h4 className="text-white font-semibold text-base">{name}</h4>
          <p className="text-[#888888] text-sm">{position}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialsSection;
