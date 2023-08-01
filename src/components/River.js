import React, { useEffect, useState } from "react";

const RiverComponent = () => {
  // Sample strings (with the sailboat emoji having a unique class name)
  const initialStrings = [
    "-         -      -     -       -       -          -         -      -   -         -      -     -       -       -          -⛵️—[]-      - --     ",
    "   ---   -- -   ⛵️—[]     --    --    --       --    ---    --         --   ---    ---   -- -        --    --    --       --    ---    --         --   ",
    "    ---       ---   ----     ---      ---       --  ---  ----   ---     ----    ---       ---   ----     ---      ---       --  ---  ---- ⛵️—[]  ---     ---",
    "-----     ----  ----  ---   ----        ----    ---  ----    -----⛵️—[]---    ----    -----     ----  ----  ---   ----        ----    ---  ----    -----  ---    ---",
  ];

  // Function to update each string, cut first 5 characters and append them to the end
  function updateString(str) {
    return str.slice(1) + str.slice(0, 1);
  }

  // Set the intervals for each string (time is in milliseconds, adjust as needed)
  const intervals = [997, 859, 571, 293]; // Different intervals for each string

  // State to store the animated strings
  const [stringsArray, setStringsArray] = useState(initialStrings);

  // Function to start the intervals for each string
  useEffect(() => {
    const intervalIds = stringsArray.map((string, index) => {
      const intervalId = setInterval(() => {
        setStringsArray((prevStrings) => {
          const updatedStrings = [...prevStrings];
          updatedStrings[index] = updateString(updatedStrings[index]);
          return updatedStrings;
        });
      }, intervals[index]);

      return intervalId;
    });

    // Clean up intervals on component unmount
    return () => {
      intervalIds.forEach(clearInterval);
    };
  }, []);

  // Queue to store the approximate characters
  const approximatedQueue = [];

  // Function to change the character to "≈" for 400ms when the mouse hovers over it

  // Function to wrap each character of a string in a <span> element and add hover event listeners
  function wrapCharactersInSpan(str) {
    return str.split("").map((char, index) => {
      return (
        <span
          key={index}
          // onMouseOver={(event) => changeSymbolToApproximately(event, char)}
        >
          {char}
        </span>
      );
    });
  }

  // Helper function to get the SVG based on the string's index
  function getSVG(index) {
    switch (index) {
      case 0:
        return (
          <img
            className="inline-emoji"
            src="https://www.datocms-assets.com/103104/1690581320-txt.svg"
          ></img>
        );
      case 1:
        return (
          <img
            src="https://www.datocms-assets.com/103104/1690581652-ae.svg"
            className="inline-emoji"
          ></img>
        );
      case 2:
        return (
          <img
            src="https://www.datocms-assets.com/103104/1690581310-psd.svg"
            className="inline-emoji"
          ></img>
        ); // Replace '...' with the SVG code for the third string
      case 3:
        return (
          <img
            src="https://www.datocms-assets.com/103104/1690581665-fig.svg"
            className="inline-emoji"
          ></img>
        );
      default:
        return null;
    }
  }

  // Function to check and insert SVG
  function checkAndInsertSvg(string, index) {
    const openBracketIndex = string.indexOf("[");
    if (openBracketIndex !== -1) {
      const closeBracketIndex = string.indexOf("]", openBracketIndex + 1);
      if (closeBracketIndex !== -1) {
        return (
          <>
            {wrapCharactersInSpan(string.slice(0, openBracketIndex + 1))}

            {wrapCharactersInSpan(
              string.slice(openBracketIndex + 1, closeBracketIndex)
            )}
            <span className="inline-emoji">{getSVG(index)}</span>
            {wrapCharactersInSpan(string.slice(closeBracketIndex))}
          </>
        );
      }
    }
    // If the pattern is not found, return the original string
    return wrapCharactersInSpan(string);
  }

  return (
    <div>
      {stringsArray.map((string, index) => (
        <div key={index} id={`animatedText${index}`}>
          {checkAndInsertSvg(string, index)}
        </div>
      ))}
    </div>
  );
};

export default RiverComponent;
