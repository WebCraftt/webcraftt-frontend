"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

function FacebookMsg() {
  return (
    <FacebookProvider appId="664032472040233" chatSupport>
      <CustomChat pageId="122104685528003562" minimized="true" />
    </FacebookProvider>
  );
}

export default FacebookMsg;
