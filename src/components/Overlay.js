import React, { useState, useEffect, useRef } from "react";

const ImageGallery = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const currentImageIndexRef = useRef(0); // Using useRef to track the currentImageIndex

  useEffect(() => {
    const imageContainers = document.querySelectorAll(".image-container");
    const overlay = document.getElementById("overlay");
    const modal = document.querySelector(".modal");
    const enlargedImage = document.getElementById("enlargedImage");
    const imageSubtitle = document.getElementById("imageSubtitle");
    const closeButton = document.getElementById("closeButton");

    const calculateAndSetModalSize = () => {
      const pageWidth = window.innerWidth;
      const modalWidth = pageWidth * 0.8;
      const aspectRatio =
        enlargedImage.naturalWidth / enlargedImage.naturalHeight;
      let modalHeight = modalWidth / aspectRatio;

      // Ensure the modal height does not exceed the available height (80% of the viewport height)
      const maxModalHeight = window.innerHeight * 0.7;
      if (modalHeight > maxModalHeight) {
        modalHeight = maxModalHeight;
        let modalWidth = modalHeight * aspectRatio;
        modal.style.width = `${modalWidth}px`;
      }

      modal.style.height = `${modalHeight}px`;
    };

    const updateDisplayedImage = () => {
      const image =
        imageContainers[currentImageIndexRef.current].querySelector("img");
      const imgSrc = image.getAttribute("src");
      const imgAlt = image.getAttribute("alt");
      enlargedImage.setAttribute("src", imgSrc);
      imageSubtitle.textContent = imgAlt;
    };

    const closeOverlay = () => {
      overlay.style.opacity = "0";
      overlay.addEventListener(
        "transitionend",
        () => {
          overlay.style.visibility = "hidden";
          document.body.style.overflow = "auto";
        },
        { once: true }
      );
      setIsOverlayVisible(false);
    };

    const handleImageClick = (index) => {
      currentImageIndexRef.current = index; // Update the currentImageIndexRef
      updateDisplayedImage();
      calculateAndSetModalSize();
      document.body.style.overflow = "hidden";

      if (!isOverlayVisible) {
        overlay.style.opacity = "0";
        overlay.style.visibility = "visible";
        setTimeout(() => (overlay.style.opacity = "1"), 10);
        setIsOverlayVisible(true);
      }
    };

    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        closeOverlay();
      } else if (isOverlayVisible) {
        if (event.key === "ArrowRight") {
          currentImageIndexRef.current =
            (currentImageIndexRef.current + 1) % imageContainers.length;
          updateDisplayedImage();
          calculateAndSetModalSize();
        } else if (event.key === "ArrowLeft") {
          currentImageIndexRef.current =
            (currentImageIndexRef.current - 1 + imageContainers.length) %
            imageContainers.length;
          updateDisplayedImage();
          calculateAndSetModalSize();
        }
      }
    };

    imageContainers.forEach((container, index) => {
      const image = container.querySelector("img");
      image.style.cursor = "pointer";
      image.addEventListener("click", () => handleImageClick(index));
    });

    closeButton.addEventListener("click", () => closeOverlay());

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeOverlay();
      }
    });

    document.addEventListener("keydown", (event) => handleKeyPress(event));

    // Clean up event listeners on unmount
    return () => {
      imageContainers.forEach((container, index) => {
        const image = container.querySelector("img");
        image.removeEventListener("click", () => handleImageClick(index));
      });
      closeButton.removeEventListener("click", () => closeOverlay());
      overlay.removeEventListener("click", (event) => {
        if (event.target === overlay) {
          closeOverlay();
        }
      });
      document.removeEventListener("keydown", (event) => handleKeyPress(event));
    };
  }, [isOverlayVisible]);

  return (
    <div className="overlay" id="overlay">
      <button id="closeButton">Close</button>
      <div className="modal">
        <img src="" alt="Enlarged Image" id="enlargedImage" />
        <div className="image-focus-subtitle" id="imageSubtitle"></div>
      </div>
    </div>
  );
};

export default ImageGallery;
