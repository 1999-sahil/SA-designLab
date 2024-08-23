import Frontend from "@/assets/frontend.png";
import Fullstack from "@/assets/fullstack.png";
import Design from "@/assets/design.png";
import Program from "@/assets/program.png";


export const navigationLinks = [
    { title: "expertise", to: "#expertise" },
    { title: "work", to: "#work" },
    { title: "experience", to: "#experience" },
    { title: "contact", to: "#contact" },
];

export const cardData = [
    {
        title: "Frontend",
        title2: "Development",
        image: Frontend,
        bgColor: "bg-[#e3e3e3]",
        fgColor: "bg-[#5FFB17]",
        textColor: "text-black",
        borderColor: "border-[#333]",
    },
    {
        title: "Full Stack",
        title2: "Development",
        image: Fullstack,
        bgColor: "bg-[#5FFB17]",
        fgColor: "bg-black",
        textColor: "text-[#5FFB17]",
        borderColor: "border-[#333]",
    },
    {
        title: "Design &",
        title2: "Creative",
        image: Design,
        bgColor: "bg-black",
        fgColor: "bg-white",
        textColor: "text-black",
        borderColor: "border-[#333]",
    },
    {
        title: "Programming &",
        title2: "Coding",
        image: Program,
        bgColor: "bg-[#e3e3e3]",
        fgColor: "bg-[#5FFB17]",
        textColor: "text-black",
        borderColor: "border-[#333]",
    },
];