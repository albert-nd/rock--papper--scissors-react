import { useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";

const choices = [
  { name: "rock", icon: FaHandRock },
  { name: "paper", icon: FaHandPaper },
  { name: "scissors", icon: FaHandScissors },
];

const getRandomChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const RPS = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const determineWinner = (user, computer) => {
    if (user === computer) return "tie";
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      return "win";
    }
    return "lose";
  };

  const handleClick = (choice) => {
    const random = getRandomChoice();
    setUserChoice(choice);
    setComputerChoice(random);

    const outcome = determineWinner(choice.name, random.name);

    if (outcome === "win") {
      setResult("You win! 🎉");
      setUserScore((s) => s + 1);
    } else if (outcome === "lose") {
      setResult("You lose! 😢");
      setComputerScore((s) => s + 1);
    } else {
      setResult("It's a tie!");
    }
  };

  const resetRound = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="rounded-3xl bg-linear-to-bl from-black to-gray-800 text-white p-6 sm:p-10 text-center">

        <h1 className="
          text-3xl sm:text-5xl font-bold mb-6
          bg-gradient-to-bl from-orange-900 to-orange-400
          bg-clip-text text-transparent">
            Rock Paper Scissors
        </h1>


        {/* Scoreboard */}
        <div className="flex justify-between max-w-xs mx-auto mb-6">
          <div>
            <p className="text-sm">You</p>
            <p className="text-2xl text-green-400">{userScore}</p>
          </div>
          <div>
            <p className="text-sm">Computer</p>
            <p className="text-2xl text-red-400">{computerScore}</p>
          </div>
        </div>

        {/* Choices */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8">
          {choices.map((choice) => {
            const Icon = choice.icon;
            return (
              <button
                key={choice.name}
                onClick={() => handleClick({ name: choice.name })}
                className="
                  bg-black p-4 sm:p-5 rounded-full
                  border border-gray-500
                  hover:scale-110 hover:bg-green-200
                  transition-transform duration-500
                "
              >
                <Icon className="w-10 h-10 sm:w-16 sm:h-16 text-yellow-600" />
              </button>
            );
          })}
        </div>

        {/* Results */}
        {userChoice && (
          <div className="space-y-4">
            <p>You chose: <span className="font-bold">{userChoice.name}</span></p>
            <p>Computer chose: <span className="font-bold">{computerChoice.name}</span></p>

            <p
              className={`text-3xl sm:text-5xl font-bold ${
                result.includes("win")
                  ? "text-green-400"
                  : result.includes("lose")
                  ? "text-red-500"
                  : "text-yellow-400"
              }`}
            >
              {result}
            </p>
          </div>
        )}

        {/* Reset */}
        <button
          onClick={resetRound}
          className="
            mt-6 px-6 py-2
            rounded-full font-bold
            bg-gradient-to-bl from-orange-800 to-orange-400 text-black hover:from-orange-800 hover:to-orange-300
            transition-transform duration-300
            hover:scale-105
          "
        >
          Reset Round
        </button>
      </div>
    </div>
  );
};

export default RPS;
