import Link from 'next/link';
import React, {useState} from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BButton } from './Button';
import FormInput, { FormTextarea } from './FormInput';
import { SuccessModal, ErrorModal } from "./Modal";
import Subheading from './Subheading';

export default function ContactForm(): JSX.Element {
  const [modalShow, setModalShow] = useState(false);
  const [errorModalShow, setErrorModalShow] = useState(false);

  function handleSubmit(e): void {
    let data: FormData = new FormData(e.target);
    let action: string = "https://www.formbackend.com/f/5e1db3df8b119ea4";
    let request: XMLHttpRequest = new XMLHttpRequest();
    let form: HTMLFormElement = document.getElementById(
      "contact-form"
    ) as HTMLFormElement;
    request.open("POST", action, true);

    /* https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests */
    request.onload = (e) => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          setModalShow(true);
          form.reset();
        } else {
          setErrorModalShow(true);
          form.reset();
        }
      }
    };
    request.onerror = (e) => {
      setErrorModalShow(true);
    };

    request.send(data);
    e.preventDefault();
  }

  return (
    <div
      id="contact"
      className="container flex flex-col md:flex-row md:justify-between md:items-center md:gap-12 lg:gap-24 mx-auto md:border-2 md:border-[#2A303C] md:rounded-[32px] md:px-10 md:py-8"
    >
      <div className="md:max-w-[50%]">
        <h2 className="ml-[30px] lg:ml-0 text-primary w-fit font-other font-semibold text-[24px] leading-[35px] lg:text-[32px] lg:leading-[47px] lg:mb-[6px]">
          {"Let's get in touch..."}
        </h2>
        <div className="font-primary text-lg leading-[27px] lg:text-[21px] lg:leading-[35px] text-[#C3C9D5] font-medium mx-[30px] lg:mx-0 lg:max-w-[85%]">
          If you ever want to talk about any potential opportunities, you can
          find me on social media or send me a message here!
        </div>
        <div className="flex gap-6 lg:gap-16 mx-[30px] lg:mx-0 text-[#C3C9D5] my-6 lg:mb-0 lg:mt-[38px]">
          <Link
            href="https://www.linkedin.com/in/armen-merzaian"
            target="_blank"
          >
            <FaLinkedin className="w-[28px] h-[32px] lg:w-[42px] lg:h-[48px]" />
          </Link>
          <Link href="https://www.github.com/armenmerzaian" target="_blank">
            <FaGithub className="w-[28px] h-[32px] lg:w-[42px] lg:h-[48px]" />
          </Link>
        </div>
      </div>
      <form
        acceptCharset="UTF-8"
        className="mx-[30px] lg:mx-0 text-[#8793AB] font-primary font-medium text-sm leading-[18px] lg:text-base lg:leading-[20px] flex flex-col gap-5 lg:gap-7 md:flex-grow lg:max-w-[40%]"
        onSubmit={handleSubmit}
        id="contact-form"
      >
        <div className="flex flex-col">
          <FormInput
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="order-3"
            minLength={2}
            required
          />
          <label
            htmlFor="name"
            className="order-1 text-[#C3C9D5] font-primary font-medium text-[14px] leading-[18px] lg:text-[16px] lg:leading-[20px]"
          >
            Name
          </label>
        </div>
        <div className="flex flex-col">
          <FormInput
            type="text"
            name="email"
            id="emailInput"
            placeholder="Email"
            className=" order-2"
            required
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          />
          <label
            htmlFor="emailInput"
            className="order-1 text-[#C3C9D5] font-primary font-medium text-[14px] leading-[18px] lg:text-[16px] lg:leading-[20px]"
          >
            Email
          </label>
        </div>
        <div className="flex flex-col col-span-2">
          <FormTextarea
            name="message"
            className=" order-2 "
            placeholder="Message"
            required
            maxLength={300}
            minLength={20}
          />
          <label className="order-1 text-[#C3C9D5] font-primary font-medium text-[14px] leading-[18px] lg:text-[16px] lg:leading-[20px]">
            Message
          </label>
        </div>
        <BButton
          text="Send Message"
          icon={false}
          variant="primary"
          shadow={false}
          className="mt-[12px] lg:mt-[20px]"
        />
      </form>
      {modalShow ? (
        <SuccessModal
          modalShow={modalShow}
          setModalShow={setModalShow}
          title="Message Sent!"
          text="Thank you for sending me a message, I will get back to you as soon as possible!"
        />
      ) : null}
      {errorModalShow ? (
        <ErrorModal
          errorModalShow={errorModalShow}
          setErrorModalShow={setErrorModalShow}
        />
      ) : null}
    </div>
  );
}


