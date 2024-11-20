import Button from "../components/common/Button";
import { useDarkMode } from "../hooks/useDarkMode";

const Skills: React.FC = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h1>
        <p className="text-gray-700 dark:text-gray-300">This is the about page.</p>
        <Button onClick={() => setTheme(colorTheme)}> Toggle Dark Mode </Button>
      </div>
    </div>
  );
};

export default Skills;
