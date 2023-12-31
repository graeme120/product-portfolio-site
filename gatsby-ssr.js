import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const wrapPageElement = ({ element }) => (
  <AnimatePresence mode="wait">{element}</AnimatePresence>
);

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="TT Commons Medium"
      rel="preload"
      href="/fonts/TTCommons/TT-Commons-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="TT Commons Medium"
      rel="preload"
      href="/fonts/TTCommons/TT-Commons-Medium.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="TT Commons Regular"
      rel="preload"
      href="/fonts/TTCommons/TT-Commons-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="TT Commons-Regular"
      rel="preload"
      href="/fonts/TTCommons/TT-Commons-Regular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="TT Commons Regular Italic"
      rel="preload"
      href="/fonts/TTCommons/TT-Commons-Italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="TT Commons Regular Italic"
      rel="preload"
      href="/fonts/TTCommons/TT-Commons-Italic.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="TT Commons DemiBold"
      rel="preload"
      href="/fonts/TTCommons/TT-Commons-DemiBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="TT Commons DemiBold"
      rel="preload"
      href="/fonts/TTCommons/TT-Commons-DemiBold.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="TT Commons DemiBold Italic"
      rel="preload"
      href="/fonts/TTCommons/TT-Commons-DemiBold-Italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="TT Commons DemiBold Italic"
      rel="preload"
      href="/fonts/TTCommons/TT-Commons-DemiBold-Italic.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,

    <link
      key="Calibre Medium"
      rel="preload"
      href="/fonts/Calibre/Calibre-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="Calibre Medium"
      rel="preload"
      href="/fonts/Calibre/Calibre-Medium.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Calibre Regular"
      rel="preload"
      href="/fonts/Calibre/Calibre-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="Calibre-Regular"
      rel="preload"
      href="/fonts/Calibre/Calibre-Regular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Calibre Regular Italic"
      rel="preload"
      href="/fonts/Calibre/Calibre-RegularItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="Calibre Regular Italic"
      rel="preload"
      href="/fonts/Calibre/Calibre-RegularItalic.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Calibre Semibold"
      rel="preload"
      href="/fonts/Calibre/Calibre-Semibold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="Calibre Semibold"
      rel="preload"
      href="/fonts/Calibre/Calibre-Semibold.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Calibre Semibold Italic"
      rel="preload"
      href="/fonts/Calibre/Calibre-SemiboldItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="Calibre Semibold Italic"
      rel="preload"
      href="/fonts/Calibre/Calibre-SemiboldItalic.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
  ]);
};
