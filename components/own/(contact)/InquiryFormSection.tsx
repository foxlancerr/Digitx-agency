"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { ArrowRight, TimerIcon } from "lucide-react";
import SectionWrapper from "../base/SectionWrapper";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";

// Validation Schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface IServiceOption {
  id: string;
  label: string;
  value: string;
}

interface ISubjectOption {
  id: string;
  label: string;
  value: string;
}

interface IFormConfig {
  title: string;
  description: string;
  submitButtonText: string;
}

const formConfig: IFormConfig = {
  title: "Online Inquiry Form",
  description:
    "Please fill in the following details, and we'll get back to you within 24 hours.",
  submitButtonText: "Send your Inquiry",
};

const serviceOptions: IServiceOption[] = [
  { id: "service-1", label: "Web Development", value: "web-development" },
  { id: "service-2", label: "Mobile App Development", value: "mobile-app" },
  { id: "service-3", label: "UI/UX Design", value: "uiux-design" },
  { id: "service-4", label: "Digital Strategy", value: "digital-strategy" },
  { id: "service-5", label: "Digital Marketing", value: "digital-marketing" },
  { id: "service-6", label: "SEO Optimization", value: "seo" },
];

const subjectOptions: ISubjectOption[] = [
  { id: "subject-1", label: "General Inquiry", value: "general" },
  { id: "subject-2", label: "Partnership Opportunity", value: "partnership" },
  { id: "subject-3", label: "Job Application", value: "job" },
  { id: "subject-4", label: "Support Request", value: "support" },
  { id: "subject-5", label: "Feedback", value: "feedback" },
];

const InquiryFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      service: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setSubmitStatus({
        type: "success",
        message: "Thank you! We'll be in touch within 24 hours.",
      });
      form.reset();
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 3000);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col space-y-12 mt-12 p-8 border rounded-2xl">
        {/* Form Header */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <h2 className="text-base font-semibold md:text-xl text-white text-center">
            Office Locations
          </h2>

          <p className="text-sm text-gray-40">
            Visit our offices to have a face-to-face discussion with our team.
            We have locations in
          </p>
        </div>

        {/* Form Container */}
        <div className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 md:space-y-8"
            >
              {/* Row 1: Name, Email, Phone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-sm font-semibold block">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Name"
                          {...field}
                          className="bg-transparent! border text-white p-6! rounded-full  focus:border-[#282828] focus:ring-0 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-sm font-semibold block">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your Email"
                          {...field}
                          className="bg-transparent! border text-white p-6! rounded-full  focus:border-[#282828] focus:ring-0 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-sm font-semibold block">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Enter your Phone Number"
                          {...field}
                          className="bg-transparent! border text-white p-6! rounded-full  focus:border-[#282828] focus:ring-0 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 2: Service, Company, Subject */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-sm font-semibold block">
                        Select Service
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-transparent! border text-white p-6! rounded-full  focus:border-[#282828] focus:ring-0 transition-colors">
                            <SelectValue placeholder="Select your Service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#0F0F0F] border border-[#1A1A1A]">
                          {serviceOptions.map((option) => (
                            <SelectItem
                              key={option.id}
                              value={option.value}
                              className="text-white hover:bg-[#1A1A1A]"
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-sm font-semibold block">
                        Company / Organization Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Name"
                          {...field}
                          className="w-full bg-transparent! border text-white p-6! rounded-full  focus:border-[#282828] focus:ring-0 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-sm font-semibold block">
                        Subject
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-transparent! border text-white p-6! rounded-full  focus:border-[#282828] focus:ring-0 transition-colors">
                            <SelectValue placeholder="Select your Subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#0F0F0F] border border-[#1A1A1A]">
                          {subjectOptions.map((option) => (
                            <SelectItem
                              key={option.id}
                              value={option.value}
                              className="text-white hover:bg-[#1A1A1A]"
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 3: Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-sm font-semibold block">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your Message"
                        {...field}
                        rows={12}
                        cols={12}
                        className="w-full bg-transparent! border text-white p-6! rounded-2xl  focus:border-[#282828] focus:ring-0 transition-colors"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs mt-1" />
                  </FormItem>
                )}
              />

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg text-sm text-center ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-500 border border-green-500/20"
                      : "bg-red-500/10 text-red-500 border border-red-500/20"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-transparent  border font-semibold rounded-full px-6! md:px-8! py-3! md:py-6! transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : formConfig.submitButtonText}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <InquryPrivacy></InquryPrivacy>
      <NewsLetterCard></NewsLetterCard>
    </div>
  );
};

export default InquiryFormSection;

const InquryPrivacy = () => {
  return (
    <div className="flex items-center flex-col sm:flex-row gap-6 mt-12">
      <Card className="bg-transparent border rounded-2xl">
        <CardContent className="flex flex-col space-y-3">
          <div className="flex items-center gap-2">
            <span>
              <TimerIcon className="size-8"></TimerIcon>
            </span>
            <h3 className="text-xl mb-0">Our Response</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-40">
            We understand the importance of timely responses, and our team is
            committed to addressing your inquiries promptly. Whether you have a
            specific project in mind, need advice on digital strategies, or want
            to explore partnership opportunities, we are here to assist you at
            every step.
          </p>
        </CardContent>
      </Card>
      <Card className="bg-transparent border rounded-2xl">
        <CardContent className="flex flex-col space-y-3">
          <div className="flex items-center gap-2">
            <span>
              <MdOutlinePrivacyTip className="size-8"></MdOutlinePrivacyTip>
            </span>
            <h3 className="text-xl mb-0">Privacy Assurance</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-40">
            At DigitX, we prioritize your privacy and protect your personal
            information in compliance with data protection regulations. Rest
            assured that your details will only be used for the purpose of
            addressing your inquiries and will not be shared with third parties
            without your consent
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
const NewsLetterCard = () => {
  return (
    <div className="mt-20 flex flex-col space-y-6">
      <div className="flex flex-col items-center justify-center space-y-3">
        <h2 className="text-base font-semibold md:text-xl text-white text-center">
          Join Us on Social Media
        </h2>

        <p className="text-sm text-gray-40">
          Stay updated with our latest projects, industry insights, and company
          news by following us on social media
        </p>
      </div>

      <Card className="bg-transparent border rounded-2xl flex items-center justify-center min-h-[300px]">
        <CardContent className="flex flex-col space-y-6 items-center justify-center">
          <div className="flex flex-row space-x-4">
            <div className="flex items-center justify-center rounded-full border-2 h-10 sm:h-12 w-10 sm:w-12 bg-linear-to-br from-gray-20 to-gray-10 cursor-pointer">
              <IoLogoLinkedin className="size-5" />
            </div>
            <div className="flex items-center justify-center rounded-full border-2 h-10 sm:h-12 w-10 sm:w-12 bg-linear-to-br from-gray-20 to-gray-10 cursor-pointer">
              <IoLogoTwitter className="size-5" />
            </div>
            <div className="flex items-center justify-center rounded-full border-2 h-10 sm:h-12 w-10 sm:w-12 bg-linear-to-br from-gray-20 to-gray-10 cursor-pointer">
              <FaSquareInstagram className="size-5" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <h2 className="text-base font-semibold md:text-2xl text-white text-center">
              Thank You!
            </h2>

            <p className="text-sm text-gray-40 text-center">
              For considering DigitX for your digital needs. We look forward to
              connecting with <br></br>you and being part of your digital
              success!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
