import DarkMode from "./components/DarkMode";
import RPS from "./components/RPS";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 text-black dark:text-white">
      <header className="flex justify-end p-4">
        <DarkMode />
      </header>

      <RPS />
    </div>
  );
};

export default App;
