import React, {useState} from 'react'
import { CgClose } from 'react-icons/cg';
import { FaExclamation } from 'react-icons/fa';
import Modal from './Modal';

export default function ContactForm() {
  const [modalShow, setModalShow] = useState(true);
  const [errorModalShow, setErrorModalShow] = useState(false);

  function handleClick(e) {
    let data: FormData  = new FormData(e.target);
    let action: string = "https://www.formbackend.com/f/08da67ac6f24201c";
    let request: XMLHttpRequest = new XMLHttpRequest();
    request.open("POST", action, true);
    request.onerror = function () {
      //request failed
      setErrorModalShow(true);
    };
    request.send(data);
    setModalShow(true);
    e.preventDefault();
    document.getElementById("contact-form").reset();
  }

  return (
    <div className="p-4 tablet:p-8 rounded-2xl bg-surface-6 shadow-sm laptop:pb-9  h-full">
      <h1 className="text-primary-55 text-lg laptop:text-2xl font-semibold mb-6 webkit-padding">
        Send Us A Message
      </h1>
      <form
        acceptCharset="UTF-8"
        className="tablet:grid space-y-[36px] tablet:space-y-0 grid-cols-1 tablet:grid-cols-2 gap-8"
        onSubmit={handleClick}
        id="contact-form"
      >
        <div className="flex flex-col">
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Enter your first name"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none w-full pl-0 text-sm text-tertiary-light h-7 order-3 justify-start"
            required
            minLength={2}
          />
          <label
            htmlFor="first_name"
            className="text-sm leading-6 text-tertiary-light order-1"
          >
            First Name
          </label>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Enter your last name"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none w-full pl-0 text-sm text-tertiary-light h-7 order-3"
            required
            minLength={2}
          />
          <label
            htmlFor="last"
            className="text-sm leading-6 text-tertiary-light order-1"
          >
            Last Name
          </label>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="email"
            id="emailInput"
            placeholder="Enter your email"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none w-full pl-0 text-sm text-tertiary-light h-7 order-3"
            required
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          />
          <label
            htmlFor="emailInput"
            className="text-sm leading-6 text-tertiary-light order-1"
          >
            Email
          </label>
        </div>
        <div className="flex flex-col">
          <input
            type="tel"
            name="tel_number"
            id="tel_number"
            placeholder="Enter your phone number"
            className="bg-transparent border-x-0 border-t-0 border-b appearance-none pl-0 text-sm text-tertiary-light h-7 order-3"
            required
            pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          />
          <label
            htmlFor="tel_number"
            className="text-sm leading-6 text-tertiary-light order-1"
          >
            Phone
          </label>
        </div>
        <div className="flex flex-col col-span-2">
          <textarea
            name="message"
            className="w-full bg-transparent rounded-lg mt-1 text-sm resize-none h-[179px] order-2 text-tertiary-light"
            placeholder="Send us a message..."
            required
            maxLength={300}
            minLength={20}
          />
          <label className="laptop:col-span-full text-sm leading-6 text-tertiary-light order-1">
            Message
          </label>
        </div>
        <button className="w-fit ml-auto font-semibold rounded-[100px] px-4 py-2 bg-primary-55 hover:bg-primary-65 active:bg-primary-75 tablet:col-span-full max-h-12">
          Send Message
        </button>
      </form>
      {modalShow ? (
        <Modal
          modalShow={modalShow}
          setModalShow={setModalShow}
          title="Message Sent!"
          text="Thank you for sending us a message, we will get back to you as soon as possible!"
        />
      ) : (
        ""
      )}
      {errorModalShow ? (
        <ErrorModal
          errorModalShow={errorModalShow}
          setErrorModalShow={setErrorModalShow}
        />
      ) : (
        ""
      )}
    </div>
  );
}

function ErrorModal({ errorModalShow, setErrorModalShow }) {
  function toggleModal() {
    setErrorModalShow(!errorModalShow);
  }
  return (
    <div className="fixed z-40 inset-0 bg-black/60 backdrop-blur-2xl flex justify-center items-center">
      <div className="bg-surface-1 rounded-2xl w-[343px] h-[332px] grow-0 shrink-0 flex flex-col justify-start items-center">
        <button onClick={toggleModal} className="self-end pt-[20px] pr-[20px]">
          <CgClose />
        </button>
        <span className="mx-auto mb-6">
          <FaExclamation />
        </span>
        <h3 className="text-primary-55 text-xl leading-8 font-bold text-center mb-2">
          Oops!
        </h3>
        <p className="text-center text-tertiary-light/87 text-sm laptop:text-base px-[12px] leading-loose mb-5">
          Your form could not be submitted.{" "}
          <span className="block">Try again later.</span>
        </p>
        <button
          onClick={toggleModal}
          className="rounded-[100px] px-4 py-2 bg-primary-55"
        >
          Done
        </button>
      </div>
    </div>
  );
}
