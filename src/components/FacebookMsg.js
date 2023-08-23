"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";
import { FaLessThanEqual } from "react-icons/fa";

function FacebookMsg() {
  return (
    <FacebookProvider appId="664032472040233" chatSupport>
      {/* <CustomChat pageId="122104685528003562" minimized={false} /> */}
      <CustomChat pageId="122104685528003562" />
    </FacebookProvider>
  );
}

export default FacebookMsg;
