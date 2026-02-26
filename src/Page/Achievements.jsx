import { CheckCircle, Trophy } from "lucide-react";

function Achievements() {
  const achievementsData = [
    "Solved 250+ DSA problems on LeetCode and GeeksforGeeks, enhancing algorithmic thinking.",
    "Completed the 100 Days Coding Challenge on LeetCode, demonstrating consistency and dedication.",
    "Earned a Git & GitHub certification from Physics Wallah, gaining hands-on version control experience.",
  ];

  return (
    <div id="achievements" className=" bg-indigo-50 py-10 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-8 text-center flex items-center justify-center">
        <Trophy className="w-8 h-8 text-indigo-600 mr-2" />
        Achievements
      </h2>
      <ul className="space-y-4 max-w-3xl mx-auto">
        {achievementsData.map((achievement, index) => (
          <li
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 flex items-start hover:scale-105 transform transition-all duration-300"
          >
            <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
