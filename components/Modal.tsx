import React from "react";
import { FaCheck } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

export default function Modal({modalShow, setModalShow, title, text}: {modalShow: boolean, setModalShow: (value: boolean) => void, title: string, text: string}) {
  function toggleModal() {
    setModalShow(!modalShow);
  }
  return (
    <div className="fixed z-40 inset-0 bg-background backdrop-blur-2xl flex justify-center items-center">
      <div className="bg-surface rounded-2xl w-[343px] h-[332px] grow-0 shrink-0 flex flex-col justify-start items-center">
        <button onClick={toggleModal} className="self-end pt-[20px] pr-[20px]">
          <CgClose />
        </button>
        <span className="mx-auto mb-6">
          <FaCheck />
        </span>
        <h3 className="text-[#C3C9D5] text-xl leading-8 font-bold text-center mb-2">
          {title}
        </h3>
        <p className="text-center font-primary text-[#C3C9D5/87] text-sm px-[12px] leading-loose mb-5">
          {text}
        </p>
        <button
          onClick={toggleModal}
          className="rounded-[100px] px-4 py-2 bg-primary"
        >
          Done
        </button>
      </div>
    </div>
  );
}
