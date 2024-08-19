import React from "react";

interface MyButtonProps {
    text: string;
};

function MyButton({ text }: MyButtonProps) {
  return (
    <div className="">
        <h2>
            {text}
        </h2>
    </div>
  )
}

export default MyButton
