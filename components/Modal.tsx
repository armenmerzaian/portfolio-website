import React from "react";
import { FaCheck, FaExclamation } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { BButton } from "./Button";

export function SuccessModal({modalShow, setModalShow, title, text}: {modalShow: boolean, setModalShow: (value: boolean) => void, title: string, text: string}): JSX.Element {
  function toggleModal() {
    setModalShow(!modalShow);
  }
  return (
    <div className="fixed z-40 inset-0 bg-background/50 backdrop-blur-2xl flex justify-center items-center">
      <div className="bg-surface rounded-2xl w-[340px] h-[340px] grow-0 shrink-0 flex flex-col justify-start items-center shadow-2xl">
        <button onClick={toggleModal} className="self-end pt-[20px] pr-[20px]">
          <CgClose
            size={30}
            style={{ strokeWidth: 1 }}
            className="text-background"
          />
        </button>
        <span className="mx-auto mb-6">
          <FaCheck
            size={40}
            style={{ strokeWidth: 1 }}
            className="text-primary"
          />
        </span>
        <h3 className="text-[#C3C9D5] text-xl leading-8 font-bold text-center mb-2">
          {title}
        </h3>
        <p className="text-center font-primary text-white/60 text-lg px-4 mt-3 mb-4">
          {text}
        </p>
        <BButton
          icon={false}
          shadow={false}
          variant="primary"
          onClick={toggleModal}
          text="Done"
        />
      </div>
    </div>
  );
}

export function ErrorModal({ errorModalShow, setErrorModalShow }): JSX.Element {
  function toggleModal(): void {
    setErrorModalShow(!errorModalShow);
  }
  return (
    <div className="fixed z-40 inset-0 bg-background/50 backdrop-blur-2xl flex justify-center items-center">
      <div className="bg-surface rounded-2xl w-[340px] h-[340px] grow-0 shrink-0 flex flex-col justify-start items-center shadow-2xl">
        <button onClick={toggleModal} className="self-end pt-[20px] pr-[20px]">
          <CgClose
            size={30}
            style={{ strokeWidth: 1 }}
            className="text-background"
          />
        </button>
        <span className="mx-auto mb-6">
          <FaExclamation
            size={40}
            style={{ strokeWidth: 1 }}
            className="text-tertiary"
          />
        </span>
        <h3 className="text-[#C3C9D5] text-2xl leading-8 font-bold text-center mb-2">
          Oops!
        </h3>
        <p className="text-center font-primary text-white/60 text-lg px-8 mt-3 mb-4">
          Your form could not be submitted. Reach me directly at{" "}
          <a
            href="mailto:hello@armen-merzaian.com?subject=Let's get in touch!"
            className="hover:text-[#8793AB]"
          >
            hello@armen-merzaian.com
          </a>
          .
        </p>
        <BButton
          icon={false}
          shadow={false}
          variant="primary"
          onClick={toggleModal}
          text="Done"
        />
      </div>
    </div>
  );
}

