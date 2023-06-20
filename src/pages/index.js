import React from "react";
import Navbar from "../components/Navbar";
import { easeInOut, motion } from "framer-motion";
import "../styles/global.css";
import "../styles/home.css";
import "../styles/navbar.css";
import loadable from "@loadable/component";
import { Script } from "gatsby";

const LoadableP5 = loadable(() => import("react-p5-wrapper"), {
  resolveComponent: ({ ReactP5Wrapper }) => ReactP5Wrapper,
});

export function Head() {
  return <title>Graeme Mounsey, Digital Designer</title>;
}

export default function Home() {
  const bodyRef = React.createRef();
  const mirrorRef = React.createRef();
  const kRef = React.createRef(0);
  const videoRef = React.createRef();

  function sketch(p5) {
    let hDim;
    let vDim;

    let cols;
    let rows;

    let cnv;

    let colourA;
    let colourB;

    p5.setup = () => {
      const unit = bodyRef.current;
      const measure = getComputedStyle(unit);
      const trueWidth = parseFloat(measure.getPropertyValue("width"));

      const unit2 = mirrorRef.current;
      const measure2 = getComputedStyle(unit2);
      const trueSize = parseFloat(measure2.getPropertyValue("font-size"));
      const trueSizeMobile = trueSize * 1.25;

      if (trueWidth < 400) {
        cols = parseInt(trueWidth / (trueSize * 0.5));
        rows = parseInt((trueWidth * 2.5) / (trueSize * 0.9));

       
  
        videoRef.current = p5.createVideo(
          "https://www.datocms-assets.com/95149/1678217431-attempt3.mp4"
        );
        videoRef.current.class("web");
        cnv = p5.createCanvas(trueWidth, trueWidth * 1.3);
      } else {
        cols = parseInt(trueWidth / (trueSize * 0.5));
        rows = parseInt((trueWidth * 0.43) / (trueSize * 0.5));

        cnv = p5.createCanvas(trueWidth, trueWidth * 0.4);
        videoRef.current = p5.createVideo(
          "https://www.datocms-assets.com/95149/1678068464-sea-7-46-50-pm.mp4"
        );
        videoRef.current.class("mobile");
      }

      cnv.class("canvas");
      p5.drawingContext.willReadFrequently = true;
      p5.pixelDensity(1);
      p5.frameRate(24);

      // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      //   // Webcam access is allowed
      //   navigator.mediaDevices
      //     .getUserMedia({ video: true })
      //     .then(function (stream) {
      //       // Webcam access is permitted
      //       videoRef.current = p5.createCapture(p5.VIDEO);
      //       videoRef.current.autoPlay(true);
      //       videoRef.current.size(cols, rows);
      //       videoRef.current.attribute("muted", "muted");
      //       videoRef.current.attribute("loop", "loop");
      //       videoRef.current.hide();
      //     })
      //     .catch(function (error) {
      //       // Webcam access is not permitted
      //       videoRef.current = p5.createVideo(sea);
      //       videoRef.current.autoPlay(true);
      //       videoRef.current.attribute("muted", "muted");
      //       videoRef.current.attribute("loop", "loop");
      //       videoRef.current.hide();
      //       videoRef.current.size(cols, rows);
      //     });
      // } else {
      //   // Webcam access is not allowed or unavailable
      //   videoRef.current = p5.createVideo(sea);
      //   videoRef.current.autoPlay(true);
      //   videoRef.current.attribute("muted", "muted");
      //   videoRef.current.attribute("loop", "loop");
      //   videoRef.current.loop();
      //   videoRef.current.hide();
      //   videoRef.current.size(cols, rows);
      // }

      // videoRef.current = p5.createVideo(
      //   "https://www.datocms-assets.com/95149/1678068464-sea-7-46-50-pm.mp4"
      // );
      videoRef.current.loop();
      videoRef.current.volume(0);
      videoRef.current.muted = true;
      videoRef.current.attribute("muted", "muted");
      videoRef.current.attribute("loop", "");
      videoRef.current.attribute("autoPlay", "");
      videoRef.current.attribute("playsinline", "");
      videoRef.current.addClass("gone");
      // videoRef.current.hide();
      videoRef.current.size(cols, rows);

      p5.textSize(trueSize * 0.5);

      vDim = trueSize * 0.5;
      hDim = trueSize * 0.5;

      colourA = p5.color(59, 250, 156);
      colourB = p5.color(0, 0, 255);
    };

    p5.mousePressed = () => {
      videoRef.current.play();
    };

    p5.mouseMoved = () => {
      videoRef.current.play();
    };

    p5.draw = () => {
      if (!videoRef.current) {
        return;
      }

      p5.background(255, 252, 246);

      videoRef.current.loadPixels();
      p5.loadPixels();
      const video = videoRef.current;

      for (var j = 0; j < video.height; j++) {
        for (var i = 0; i < video.width; i++) {
          var index = (video.width - i + 1 + j * video.width) * 4;

          var r = video.pixels[index + 0];
          var g = video.pixels[index + 1];
          var b = video.pixels[index + 2];

          var bright = (r + g + b) / 3;

          let x = i * hDim;
          let y = j * vDim;

          p5.smooth();

          if ((videoRef.current.width < 50)) {
            if (bright > 170) {
              p5.fill(colourA);
              p5.text("A", x, y);
            } else if (bright > 155) {
              p5.fill(colourA);
              p5.text("E", x, y);
            } else if (bright > 140) {
              p5.fill(colourA);
              p5.text("R", x, y);
            } else if (bright > 135) {
              p5.fill(colourA);
              p5.text("G", x, y);
            } else if (bright > 130) {
              p5.fill(colourA);
              p5.text("M", x, y);
              //Colour Divide between Colour A (above) & Colour B (below)
            } else if (bright > 125) {
              p5.fill(colourB);
              p5.text("U", x, y);
            } else if (bright > 120) {
              p5.fill(colourB);
              p5.text("O", x, y);
            } else if (bright > 115) {
              p5.fill(colourB);
              p5.text("Y", x, y);
            } else if (bright > 110) {
              p5.fill(colourB);
              p5.text("E", x, y);
            } else if (bright > 105) {
              p5.fill(colourB);
              p5.text("S", x, y);
            } else if (bright > 100) {
              p5.fill(colourB);
              p5.text("M", x, y);
            } else {
              p5.fill(colourB);
              p5.text("N", x, y);
            }
          } else {
            if (bright > 170) {
              p5.fill(colourA);
              p5.text("A", x, y);
            } else if (bright > 155) {
              p5.fill(colourA);
              p5.text("E", x, y);
            } else if (bright > 140) {
              p5.fill(colourA);
              p5.text("R", x, y);
            } else if (bright > 120) {
              p5.fill(colourA);
              p5.text("G", x, y);
            } else if (bright > 105) {
              p5.fill(colourA);
              p5.text("M", x, y);
              //Colour Divide between Colour A (above) & Colour B (below)
            } else if (bright > 100) {
              p5.fill(colourB);
              p5.text("U", x, y);
            } else if (bright > 95) {
              p5.fill(colourB);
              p5.text("O", x, y);
            } else if (bright > 85) {
              p5.fill(colourB);
              p5.text("Y", x, y);
            } else if (bright > 60) {
              p5.fill(colourB);
              p5.text("E", x, y);
            } else if (bright > 45) {
              p5.fill(colourB);
              p5.text("S", x, y);
            } else if (bright > 35) {
              p5.fill(colourB);
              p5.text("N", x, y);
            } else {
              p5.fill(colourB);
              p5.text("M", x, y);
            }
          }

          // rect(x*vScale, y*vScale, vScale, vScale);

          p5.noStroke();
        }
      }
    };

    p5.windowResized = () => {
      const unit = bodyRef.current;
      const measure = getComputedStyle(unit);
      const trueWidth = parseFloat(measure.getPropertyValue("width"));

      const unit2 = mirrorRef.current;
      const measure2 = getComputedStyle(unit2);
      const trueSize = parseFloat(measure2.getPropertyValue("font-size"));

      if (trueWidth < 400) {
        cols = parseInt(trueWidth / (trueSize * 0.5));
        rows = parseInt((trueWidth * 2.5) / (trueSize * 0.9));

        cnv = p5.resizeCanvas(trueWidth, trueWidth * 1.3);
      } else {
        cols = parseInt(trueWidth / (trueSize * 0.5));
        rows = parseInt((trueWidth * 0.43) / (trueSize * 0.5));

        cnv = p5.resizeCanvas(trueWidth, trueWidth * 0.4);
      }

      vDim = trueSize * 0.5;
      hDim = trueSize * 0.5;
    };

    p5.mouseClicked = () => {
      videoRef.current.play();
      kRef.current = kRef.current + 1;
      if (kRef.current === 0) {
        colourA = p5.color(59, 250, 156);
        colourB = p5.color(0, 0, 255);
      } else if (kRef.current === 1) {
        colourA = p5.color(255, 179, 207);
        colourB = p5.color(4, 15, 7);
      } else if (kRef.current === 2) {
        colourA = p5.color(255, 237, 148);
        colourB = p5.color(224, 86, 11);
      } else if (kRef.current === 3) {
        colourA = p5.color(255, 252, 246);
        colourB = p5.color(0);
      } else if (kRef.current === 4) {
        colourA = p5.color(59, 250, 156);
        colourB = p5.color(0, 0, 255);
        kRef.current = 0;
      }
    };
  }

  return (
    <div className="wholeThing">
      <div>
        <Navbar />
      </div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.45, ease: easeInOut }}
        exit={{ opacity: 0 }}
      >
        <div ref={bodyRef}>
          <div id="container">
            <div id="mirror" ref={mirrorRef} className="mirror">
              <LoadableP5 sketch={sketch} />
            </div>
          </div>
        </div>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
    var mirror = document.getElementById('mirror');
    var count = 0;
    var elements = document.querySelectorAll('a');
    
    mirror.addEventListener("click", () => {
        count++;
        
        
    
        switch (count) {
          case 0:
              break;
          case 1:
              addGreen();
              break;
          case 2:
              addPink();
              break;
          case 3:
              addBlack();
              break;
          case 4:
              addBlue();
              break;
        }
    
        console.log(count);     
    
        if (count >= 4){
          count = 0;
        }
         
    });
    
    elements.forEach(element => element.addEventListener('mouseout', function() {
      this.style.color = '#000000';
      this.style.textDecoration = 'none';
    }));
    
    elements.forEach(element => element.addEventListener('mouseover', function() {
      this.style.color = '#0000FF';
    }));
    
    
    
    function addBlue() {
      elements.forEach(element => element.addEventListener('mouseover', function() {
        element.style.color = '#0000FF';
        element.style.textDecoration = 'none';
      }));
    }
    
    function addGreen() {
      elements.forEach(element => element.addEventListener('mouseover', function() {
        element.style.color = '#FF7DCF';
        element.style.textDecoration = 'none';
      }));
    }
    
    function addPink() {
      elements.forEach(element => element.addEventListener('mouseover', function() {
        element.style.color = '#d65109';
        element.style.textDecoration = 'none';
      }));
    }
    
    function addBlack() {
      elements.forEach(element => element.addEventListener('mouseover', function() {
        element.style.textDecoration = 'underline';
      }))
      elements.forEach(element => element.addEventListener('mouseout', function() {
        element.style.textDecoration = 'none';
      }))
      elements.forEach(element => element.addEventListener('mouseover', function() {
        element.style.color = '#000000';
      }));
    }  
    `,
          }}
        />
      </motion.main>
    </div>
  );
}

// navColour={colours[navColourIndex]}
//onClick={nextColour}
//where do put nextColour() so that both things can run?
