import { ArrowUpRight } from 'lucide-react'
import React from 'react'

function LearnMore() {
  return (
    <div className="flex items-center gap-2">
        <ArrowUpRight className="text-[#5FFb17] bg-black rounded-full w-fit p-1" />
        <h2 className="text-xs md:text-sm font-montserrat font-medium text-black">
          Learn more...
        </h2>
    </div>
  )
}

export default LearnMore