import React, { ChangeEvent, FormEvent, useState } from "react";
import SectionWrapper from "../section-wrapper";
import { space_mono } from "@/app/fonts";
import { SiMinutemailer } from "react-icons/si";
import UiInput from "../share/UiInput";
import UiTextarea from "../share/UiTextarea";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <SectionWrapper>
      <div className="relative flex flex-col h-full">
        <h2 className="text-orange-400 text-4xl text-center font-bold">
          Get In Touch!
        </h2>
        <form
          onSubmit={onSubmit}
          className="grid grid-rows-4 grid-cols-6 gap-5 max-w-3xl mx-auto rounded-3xl p-4 mt-10"
        >
          <div className="col-span-3 row-start-1 row-span-1">
            <label htmlFor="name">Name</label>
            <UiInput
              name="name"
              onChange={onChangeInput}
              value={form.name}
              id="name"
            />
          </div>
          <div className="col-span-3 row-start-1 row-span-1">
            <label htmlFor="email">Email</label>
            <UiInput
              name="email"
              onChange={onChangeInput}
              value={form.email}
              id="email"
            />
          </div>
          <div className="col-span-6 row-start-2 row-span-2">
            <label htmlFor="message">
              Message
              <UiTextarea
                name="message"
                onChange={onChangeInput}
                value={form.message}
                id="message"
              />
            </label>
          </div>
          <div className="row-start-4 row-span-1 col-span-6 mt-5 justify-center flex">
            <button
              type="submit"
              className={`border-orange-400 border-2 font-bold text-md px-4 h-10 rounded-full ${space_mono.className} flex items-center gap-2 overflow-hidden active:translate-y-1 active:transition-all`}
            >
              Send <SiMinutemailer className="animate-transition" />
            </button>
          </div>
        </form>
        <div className="md:absolute md:left-10 lg:left-20 md:top-1/2 md:-translate-y-1/2">
          <div className=" flex gap-x-5 justify-end md:flex-col md:gap-y-5">
            <AiOutlineFacebook
              size={30}
              className="cursor-pointer hover:fill-orange-400"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/long.thai.9822/",
                  "_blank"
                )
              }
            />
            <AiOutlineGithub
              size={30}
              className="cursor-pointer hover:fill-orange-400"
              onClick={() =>
                window.open("https://github.com/long6695", "_blank")
              }
            />
            <AiFillLinkedin
              size={30}
              className="cursor-pointer hover:fill-orange-400"
              onClick={() =>
                window.open("https://www.linkedin.com/in/long6695/", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
