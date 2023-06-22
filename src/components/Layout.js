import React from "react";
import { easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";

export default function Layout({ children }) {
  // const [playAnimation, setPlayAnimation] = useState(false);

  // useEffect(() => {
  //   const onPageLoad = () => {
  //     setPlayAnimation(true);
  //     console.log('trueee')
  //   }

  //   if (document.readyState === 'complete') {
  //     onPageLoad();
  //   } else {
  //     document.addEventListener('load', onPageLoad);
  //     return () => document.removeEventListener('load', onPageLoad);
  //   }
  // }, []);

  return (
    <div className="layout">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.45, ease: easeInOut }}
        exit={{ opacity: 0 }}
      >
        <div>{children}</div>
      </motion.main>
      <Footer />
    </div>
  );
}

//navColour={navColour}
