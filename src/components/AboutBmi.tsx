import React from "react";

const AboutBmi: React.FC = () => {
  return (
    <div className="container mx-auto font-mono font-bold text-gray-300 p-4">
      <div className="bg-[#333] rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">About BMI</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-6">
            <p className="text-lg  mb-4">
              Body Mass Index (BMI) is a numerical value calculated from a
              person's weight and height. It is used as an indicator of body
              fatness and helps in assessing whether an individual's weight is
              within a healthy range for their height.
            </p>
            <p className="text-lg mb-4">
              BMI is calculated using the following formula:
            </p>
            <p className="text-lg mb-4">
              BMI = Weight (kg) / Height<sup>2</sup> (m<sup>2</sup>)
            </p>
          </div>
          <div className="mb-6">
            <p className="text-lg mb-4">
              It's important to note that while BMI is a useful screening tool,
              it doesn't account for various factors such as muscle mass, bone
              density, or overall body composition. Therefore, it may not be an
              accurate measure of health for individuals with high muscle mass,
              like athletes.
            </p>
            <p className="text-lg mb-4">
              Always consult with a healthcare professional for a comprehensive
              assessment of health and weight status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBmi;
