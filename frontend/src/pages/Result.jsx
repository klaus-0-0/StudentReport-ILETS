import { useState } from "react";

function Result() {
  const studentName = "Rahul Sharma";

  const [scores] = useState({
    Pronunciation: 7,
    Fluency: 6,
    Vocabulary: 8,
    Grammar: 6,
  });

  const feedback = {
    Pronunciation:
      "Speech is generally clear and understandable with minor influence from first language accent.",
    Fluency:
      "Able to maintain conversation flow, though occasional pauses affect smooth delivery.",
    Vocabulary:
      "Demonstrates a good range of vocabulary and can express ideas effectively.",
    Grammar:
      "Uses both simple and complex sentence structures, but accuracy needs improvement.",
  };

  const getColor = (score) => {
    if (score >= 8) return "bg-green-500";
    if (score >= 7) return "bg-blue-500";
    if (score >= 6) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <h1 className="text-xl font-bold text-gray-800">
            Test Report
          </h1>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow p-8">

          {/* Header */}
          <h2 className="text-2xl font-semibold mb-1">
            Speaking Assessment Result
          </h2>
          <p className="text-gray-600 mb-8">
            Candidate: <span className="font-medium">{studentName}</span>
          </p>

          {/* SCORES */}
          {Object.entries(scores).map(([subject, score]) => (
            <div key={subject} className="mb-6">

              <div className="flex justify-between mb-1">
                <span className="font-medium">{subject}</span>
                <span className="font-semibold">{score}/9</span>
              </div>

              <div className="h-3 bg-gray-200 rounded-full">
                <div
                  className={`h-full rounded-full ${getColor(score)}`}
                  style={{ width: `${(score / 9) * 100}%` }}
                />
              </div>

            </div>
          ))}

          {/* DETAILED FEEDBACK (POINTS STYLE) */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">
              Detailed Feedback
            </h3>

            <div className="space-y-4">

              {Object.entries(feedback).map(([skill, text]) => (
                <div
                  key={skill}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {skill}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Result;
