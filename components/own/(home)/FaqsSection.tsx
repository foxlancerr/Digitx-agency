"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import SectionTItle from "../base/SectionTItle";
import SectionWrapper from "../base/SectionWrapper";
import { LuMinus, LuPlus } from "react-icons/lu";

const faqs = [
  {
    question: "How long does it take to complete a web development project?",
    answer:
      "The timeline varies depending on the project’s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "Can you handle large-scale mobile app development projects?",
    answer:
      "Yes, we have extensive experience managing enterprise-grade mobile apps with scalability, performance, and maintainability in mind.",
  },
  {
    question:
      "Do you offer maintenance services for websites and apps developed by other companies?",
    answer:
      "Absolutely. We provide ongoing maintenance and optimization services to ensure your website or app runs smoothly, regardless of who built it.",
  },
  {
    question:
      "How do you ensure the security of user data in your web applications?",
    answer:
      "We follow industry best practices, including data encryption, secure authentication, and regular security audits to protect user data.",
  },
  {
    question:
      "Can you create a responsive website design that looks great on all devices?",
    answer:
      "Yes. We use responsive design techniques and thorough testing to ensure your site looks and performs beautifully across all devices.",
  },
  {
    question:
      "What digital marketing strategies do you employ to drive website traffic?",
    answer:
      "We combine SEO, content marketing, social media strategies, and analytics to drive targeted traffic and measurable results.",
  },
  {
    question: "Can you integrate third-party APIs into our mobile app?",
    answer:
      "Yes. Our developers specialize in integrating third-party APIs to enhance your app’s functionality while maintaining performance and security.",
  },
  {
    question: "How do you ensure cross-platform compatibility for mobile apps?",
    answer:
      "We use frameworks like React Native and Flutter to build performant apps that run seamlessly across iOS and Android platforms.",
  },
];

export default function FaqsSection() {
  const [search, setSearch] = React.useState("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SectionWrapper>
      <SectionTItle
        isNewLine={false}
        primaryTitle={"Frequently"}
        secondaryTitle={"Asked Questions"}
        description={
          "Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success."
        }
      ></SectionTItle>

      <div className="max-w-md mx-auto mb-10">
        <Input
          type="text"
          placeholder="🔍 Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-muted/30 text-foreground placeholder:text-muted-foreground/70"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 text-left">
        <Accordion type="single" collapsible className="space-y-2">
          {filteredFaqs
            .slice(0, Math.ceil(filteredFaqs.length / 2))
            .map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-0 bg-transparent border-b-2 rounded-none"
              >
                <AccordionTrigger className="text-left font-medium text-base">
                  {faq.question}  
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>

        <Accordion type="single" collapsible className="space-y-2">
          {filteredFaqs
            .slice(Math.ceil(filteredFaqs.length / 2))
            .map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index + 5}`}
                className="border-0 bg-transparent border-b-2 rounded-none"
              >
                <AccordionTrigger className="text-left font-medium text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
