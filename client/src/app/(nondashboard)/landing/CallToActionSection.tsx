"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <div className="relative py-24">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Call to Action Background"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-opacity-60 bg-black">
        <motion.div></motion.div>
      </div>
    </div>
  );
};

export default CallToActionSection;
