import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    const { value } = e.target.dataset;

    switch (value) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        console.log('error');
        break;
    }
  };

  const countTotalFeedback = () => bad + good + neutral;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / (bad + good + neutral)) || 0;

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        onLeaveFeedback={handleFeedback}
        options={['good', 'bad', 'neutral']}
      />

      <h2>Statistics</h2>

      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
};
