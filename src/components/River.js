import React, { useEffect, useState } from "react";

const RiverComponent = () => {
  // Sample strings
  const initialStrings = [
    "-         -      -     -       -       -          -         -      -   -         -      -     -       -       -          -         ⛵️-      - ",
    "   ---   -- -   ⛵️     --    --    --       --    ---    --         --   ---    ---   -- -        --    --    --       --    ---    --         --   ---  ",
    "    ---       ---   ----     ---      ---       --  ---  ----   ---     ----    ---       ---   ----     ---      ---       --  ---  ----  ⛵️  ---     ----    ",
    "-----     ----  ----  ---   ----        ----    ---  ----    -----⛵️ ---    ----    -----     ----  ----  ---   ----        ----    ---  ----    --------    ----      ",
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

  // Function to wrap each character of a string in a <span> element and add hover event listeners
  function wrapCharactersInSpan(str) {
    return str.split("").map((char, index) => {
      // Check if the character is the boat emoji (⛵️)
      const isBoatEmoji = char === "⛵️";
      // If it is, return the character without adding the hover event listener
      if (isBoatEmoji) {
        return char;
      }

      return (
        <span
          key={index}
          onMouseOver={(event) => changeSymbolToApproximately(event, char)}
        >
          {char}
        </span>
      );
    });
  }

  // Function to change the character to "≈" for 400ms when the mouse hovers over it
  // Function to change the character to "≈" for 400ms when the mouse hovers over it
  function changeSymbolToApproximately(event, char) {
    const approximatedChar = "≈";

    // If there are already 4 elements in the queue, revert the symbol of the least-recently approximated character
    if (approximatedQueue.length >= 4) {
      const leastRecentElement = approximatedQueue.shift();
      leastRecentElement.textContent =
        leastRecentElement.dataset.originalSymbol;
    }

    // Store the original symbol in the dataset of the target element
    event.target.dataset.originalSymbol = char;
    event.target.textContent = approximatedChar;
    approximatedQueue.push(event.target);

    setTimeout(() => {
      event.target.textContent = char;
      const index = approximatedQueue.indexOf(event.target);
      if (index !== -1) {
        approximatedQueue.splice(index, 1);
      }
    }, 400);
  }

  // Queue to store the approximate characters
  const approximatedQueue = [];

  return (
    <div>
      {stringsArray.map((string, index) => (
        <div key={index} id={`animatedText${index}`}>
          {wrapCharactersInSpan(string)}
        </div>
      ))}
    </div>
  );
};

export default RiverComponent;
