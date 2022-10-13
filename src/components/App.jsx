import React from 'react';
import {Statistics} from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import {Notification} from "./Notification/Notification"
import { Box } from './Box';
import { useState } from 'react';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
        case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
       case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  }

  const countTotalFeedback = () => { 
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    return good > 0 ? (Number.parseInt(good / countTotalFeedback() * 100)) : 0
  }


    const options = ["good", "neutral", "bad"]
    const totalFeeedback = countTotalFeedback()
    const positiveFeedback = countPositiveFeedbackPercentage()

  
  return (
      
      <Box display="flex" flexDirection="column" alignItems='center'  justifyContent="center"  p={30} as="main"> 
        
        <Section title="Please leave a feedback"/> 
      
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
      
        {totalFeeedback > 0 ?
          
          <Statistics good={good} neutral={neutral} bad={bad} total={totalFeeedback} positivePercentage={positiveFeedback} />

          :  <Notification message="There is no feedback"/>}
        
       </Box>
    
  
  )};

export default App; 





// class App extends Component {
//   state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
//   }

//   onLeaveFeedback = (option) => {
//     this.setState(prevState => ({[option]: prevState[option] + 1}))
//   }

//   countTotalFeedback = () => { 
//     return this.state.good + this.state.neutral + this.state.bad
//   }

//   countPositiveFeedbackPercentage = () => { return  this.state.good > 0 ? (Number.parseInt(this.state.good / this.countTotalFeedback() * 100)) : 0  }



//   render() {
//     const options = Object.keys(this.state)
//     const totalFeeedback = this.countTotalFeedback()
//     const positiveFeedback = this.countPositiveFeedbackPercentage()

//     return (
//       <Box display="flex" flexDirection="column" alignItems='center'  justifyContent="center"  p={30} as="main"> 
        
//         <Section title="Please leave a feedback"/> 
      
//         <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
      
//         {totalFeeedback > 0 ?
          
//           <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={totalFeeedback} positivePercentage={positiveFeedback} />

//           :  <Notification message="There is no feedback"/>}
        
//        </Box>
    
  
//   )}};

// export default App;