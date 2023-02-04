import React from 'react'
import { FaGithub, FaRocket, FaArrowRight} from "react-icons/fa";

/*
    This is a button component that can be used in any page.
    It has three variants: primary, secondary, and tertiary.
    It has a text prop that is the text that will be displayed on the button.
    It has a variant prop that is the variant of the button.
    It has an onClick prop that is the function that will be called when the button is clicked.
    The onClick prop is optional.
    To use the onClick prop, you must pass a function as the value of the onClick prop.
*/

export default function Button({text, variant, arrow, shadow, onClick, className}: {text: string, variant: 'primary' | 'secondary' | 'tertiary', arrow: boolean, shadow: boolean, onClick: () => void, className?: string}) {
  
  let primaryStyle =
    "font-primary text-[#15181E] font-semibold text-lg px-6 py-2 bg-primary-gradient rounded-md flex items-center justify-center gap-2" +
    (shadow ? " shadow-[0_16px_32px_-8px_rgba(60,202,221,0.3)]" : "") + (className ? " " + className : "");
  let secondaryStyle =
    "font-primary text-[#1F4347] font-semibold text-lg px-6 py-2 bg-[#C9E4E8] hover:bg-[#A6D2D9] rounded-md flex items-center justify-center gap-2" +
    (className ? " " + className : "");
  let tertiaryStyle =
    "font-primary text-[#93E1EC] font-semibold text-lg px-6 py-2 bg-transparent hover:bg-[#3F485A] rounded-md flex items-center justify-center gap-2 box-border border border-[#93E1EC]" +
    (className ? " " + className : "");

  return (
    <button
      onClick={onClick}
      className={
        variant == "primary"
          ? primaryStyle
          : variant == "secondary"
          ? secondaryStyle
          : tertiaryStyle
      }
    >
      <FaGithub className={variant == "secondary" ? "" : "hidden"} />
      <FaRocket className={variant == "tertiary" ? "" : "hidden"} />
      {text}
      <FaArrowRight className={arrow ? "" : "hidden"} />
    </button>
  );
}


