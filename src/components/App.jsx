import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOption/FeedbackOptions';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, n) => acc + n, 0);
  };

  positivePercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const styles = {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#010101',
    };

    return (
      <div style={styles}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
// import React, { Component } from 'react';
// import Statistics from 'components/Statistics/Statistics';

// class App extends Component {
    
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//         total: 0,
//         positiveFeedB: 0,
//     }

//     handleClick = (variable) => {
//         this.setState((prevState) => {
//             return {
//                 good: variable === 'good' ? prevState.good + 1 : prevState.good,
//                 neutral: variable === 'neutral' ? prevState.neutral + 1 : prevState.neutral,
//                 bad: variable === 'bad' ? prevState.bad + 1 : prevState.bad,
//             };
//         },
//                 () => {
//                 this.countTotalFeedback();
//                 this.countPositiveFeedbackPercentage();
//             }
//         )    
//     }

//     countTotalFeedback = () => {
//         this.setState((prevState) => {
//             return {
//                 total: this.state.good + this.state.neutral + this.state.bad,
//             }            
//         })
//     }

//     countPositiveFeedbackPercentage = () => {
//         this.setState((prevState) => {
//             const percent = Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100);    
//             return {
//                 positiveFeedB: percent,
//             }

                    
            
//            // return {positiveFeedB: !isNaN(percent) ? percent : 0}
//         })        
//     }

//     render() {
//         return (
//         <>
//     <div>
//         <ul>Please leave feedback
//             <li>
//                 <button onClick = { () => {this.handleClick('good')} }>Good</button>
//             </li>
//             <li>
//                 <button onClick = { () => {this.handleClick('neutral')} }>neutral</button>
//             </li>
//             <li>
//                 <button onClick = { () => {this.handleClick('bad')} }>Bad</button>
//             </li>
//         </ul>
//         <Statistics>
//             good = { this.state.good }
//             neutral: { this.state.neutral }
//             bad: { this.state.bad }
//             total: { this.state.total }
//             positiveFeedB: { this.state.positiveFeedB }
//         </Statistics> 
//     </div>
// </>
//     );
//     }
    
// }

// export default App;