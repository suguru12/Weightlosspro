import React, { useState } from 'react';
import './accordion.css';

const FAQItems = [
  {
    question: 'How many calories should I consume to lose weight?',
    answer: 'The number of calories needed for weight loss varies depending on factors such as age, gender, weight, height, and activity level. Its recommended to aim for a moderate calorie deficit of 500-1000 calories per day to achieve a healthy and sustainable weight loss of 1-2 pounds per week.',
  },
  {
    question: 'How can I lose weight effectively?',
    answer: 'Losing weight effectively involves creating a calorie deficit by consuming fewer calories than you burn through physical activity and daily functions. Its important to focus on a combination of healthy eating, regular exercise, and behavior changes for long-term success.',
  },
  {
    question: 'Are there any recommended weight loss supplements or products?',
    answer: 'Its important to consult with a healthcare professional before considering any weight loss supplements or products. While some supplements may claim to aid in weight loss, their effectiveness and safety can vary. Focus on a balanced diet, regular exercise, and lifestyle changes as the foundation for weight loss, and consult a professional for personalized advice.',
  },
  {
    question: 'What are some common obstacles to weight loss and how can I overcome them?',
    answer: 'Common obstacles to weight loss include emotional eating, lack of motivation, plateaus, and unrealistic expectations. To overcome these challenges, its important to develop healthy coping mechanisms for emotional eating, find a support system, set realistic goals, track progress, and make adjustments to your approach as needed.',
  },
  {
    question: 'Is exercise necessary for weight loss?',
    answer: 'While exercise is not mandatory for weight loss, it greatly enhances the process. Exercise helps burn calories, increases metabolism, builds lean muscle mass, and improves overall health and well-being. Combining a healthy diet with regular physical activity produces optimal results.',
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = FAQItems.map((item, index) => (
    <div
      key={index}
      className={`accordion-item ${index === activeIndex ? 'active' : ''}`}
    >
      <div
        className="accordion-header"
        onClick={() => toggleAccordion(index)}
      >
        {item.question}
      </div>
      {index === activeIndex && (
        <div className="accordion-content">{item.answer}</div>
      )}
    </div>
  ));

  return <div className="accordion-container">{accordionItems}</div>;
};

export default FAQAccordion;