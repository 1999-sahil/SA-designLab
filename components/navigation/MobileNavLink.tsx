import Link from "next/link";
import { motion } from "framer-motion";

import { mobileLinkVars } from "@/constants/motion";

interface MobileNavLinkProps {
  title: string;
  to: string;
}

function MobileNavLink({ title, to }: MobileNavLinkProps) {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="flex items-center justify-center cursor-pointer capitalize font-poppins text-xl font-bold mx-auto py-2 rounded-md w-full text-zinc-800 dark:text-zinc-200 bg-zinc-200/70 dark:bg-[#101826] hover:bg-zinc-300 dark:hover:bg-[#142037]"
    >
      <Link href={to}>{title}</Link>
    </motion.div>
  )
}

export default MobileNavLink