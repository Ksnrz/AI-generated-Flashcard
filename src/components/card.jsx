import React, { useEffect, useState } from "react";
import Score from "./Score";

const Card = ({ isLoading, setIsLoading }) => {
  const [correct, setCountCorrect] = useState(0); // count right score
  const [wrong, setCountWrong] = useState(0); // count wrong score
  const [isFlipped, setIsFlipped] = useState(false); // flip flashcard useState
  const [word, setWord] = useState(""); // set the default word to ""
  const [definition, setDefinition] = useState("");

  const fetchRandomWord = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://random-word-api.vercel.app/api?words=1" // random word
      );
      const data = await response.json(); // wait for api to response in json
      let tryThisWord = data[0];
      fetchWordDefinition(tryThisWord); // this will activate fetchWordDefinition()

      // for error
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching the random word: ", error);
    }
  };

  const fetchWordDefinition = async (newWord) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`
      );
      const data = await response.json();

      let wordDefinition =
        data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition ?? null;

      if (wordDefinition == null) {
        // if word dont have definition, fetch new word
        fetchRandomWord();
      } else if (wordDefinition != null) {
        // if word have definition, setDefinition
        setWord(newWord);
        setDefinition(wordDefinition);
      }
    } catch (error) {
      console.error("Error fetching word definition:", error);
    } finally {
      // this will run whether has error or not
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomWord(); // generate the first word
  }, []);

  const handleNextWord = () => {
    setIsFlipped(false);
    fetchRandomWord();

    // generate a new word
  };

  const resetScore = () => {
    setCountCorrect(0);
    setCountWrong(0);
    handleNextWord();
  };

  return (
    <>
      <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`card ${isFlipped ? "card-flipped" : ""}`}>
          <div className="card-face card-front">
            <p className="text-black px-3 py-2 rounded-xl">{word}</p>
          </div>
          <div className="card-face card-back">
            <p className="text-black px-3 py-2 rounded-xl">{definition}</p>
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <button
          className="answer-button iknow-hover select-none mr-4"
          onClick={() => {
            setCountCorrect(correct + 1);
            handleNextWord();
          }}
          disabled={isLoading}
        >
          <i class="fa-regular fa-circle-check text-5xl mr-2 text-green-500"></i>
        </button>
        <button
          className="answer-button idontknow-hover select-none"
          onClick={() => {
            setCountWrong(wrong + 1);
            handleNextWord(); // go to next word
          }}
          disabled={isLoading}
        >
          <i class="fa-regular fa-circle-xmark text-5xl mr-2 text-red-500"></i>
        </button>
      </div>
      <Score correct={correct} wrong={wrong} resetScore={resetScore} />
    </>
  );
};

export default Card;
