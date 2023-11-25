import React, { useState, useEffect, ChangeEvent } from "react";
import AboutBmi from "../components/AboutBmi";
import Footer from "../components/Footer";

const Calculator: React.FC = () => {
  const [height, setHeight] = useState<number>(100);
  const [weight, setWeight] = useState<number>(20);
  const [bmi, setBMI] = useState<number>(0);

  useEffect(() => {
    const calculateBMI = () => {
      const heightInMeters: number = height / 100;
      const bmiValue: number = weight / (heightInMeters * heightInMeters);
      setBMI(Number(bmiValue.toFixed(2)));
    };

    calculateBMI();
  }, [height, weight]);

  const onWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value));
  };

  const onHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value));
  };

  const getBmiCategoryColor = (bmi: number): string => {
    if (bmi < 18.5) {
      return "bg-blue-800"; // underweight
    } else if (bmi >= 18.5 && bmi < 25) {
      return "bg-green-800"; // normal weight
    } else if (bmi >= 25 && bmi < 30) {
      return "bg-yellow-800"; //  overweight
    } else {
      return "bg-red-800"; // obesity
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">BMI CALCULATOR</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-2 text-center md:text-left">
            Weight: {weight} kg
          </p>
          <input
            className="w-full"
            type="range"
            step="1"
            min="20"
            max="186"
            value={weight}
            onChange={onWeightChange}
          />
        </div>
        <div>
          <p className="text-lg mb-2 text-center md:text-left">
            Height: {height} cm
          </p>
          <input
            className="w-full"
            type="range"
            step="1"
            min="100"
            max="272"
            value={height}
            onChange={onHeightChange}
          />
        </div>
      </div>
      <div className={`border p-4 rounded mt-6 ${getBmiCategoryColor(bmi)}`}>
        <h2 className="text-lg text-center">Your BMI is:</h2>
        <p className="text-3xl font-bold text-center mt-2">{bmi}</p>
      </div>
      <div className=" mt-4 rounded-lg shadow-md p-6">
        <p className="text-lg mb-4">The BMI categories are:</p>
        <ul className="list-none ml-6 text-lg">
          <li className="mb-2">
            <span className="font-semibold">Underweight:</span> BMI less than
            18.5
          </li>
          <li className="mb-2">
            <span className="font-semibold">Normal weight:</span> BMI between
            18.5 and 24.9
          </li>
          <li className="mb-2">
            <span className="font-semibold">Overweight:</span> BMI between 25
            and 29.9
          </li>
          <li className="mb-2">
            <span className="font-semibold">Obesity:</span> BMI of 30 or greater
          </li>
        </ul>
      </div>
      <div className="max-w-md mx-auto p-6 bg-slate-900 mt-3 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Discover Your Body's Stats!</h2>
        <p className="mb-4">
          Want to calculate your height or find a fitness task that fits your
          body daily? Look no further!
        </p>
        <ul className="list-disc pl-4 mb-6">
          <li>
            <a
              href="https://calculatebiwas.vercel.app/"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Calculate Your Height
            </a>
          </li>
          <li>
            <a
              href="https://todo-biwas.vercel.app/"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Add a Task for Your Body
            </a>
          </li>
          <li>
            <a
              href="https://weather-biwas.vercel.app/"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Check Today's Weather
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-600">
          Stay in tune with your body and the weather effortlessly!
        </p>
      </div>

      <AboutBmi />
      <Footer />
    </div>
  );
};

export default Calculator;
