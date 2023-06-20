import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export const wrapPageElement = ({element}) => (
  <AnimatePresence mode="wait">{element}</AnimatePresence>
);