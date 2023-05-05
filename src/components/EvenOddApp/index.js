// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: 0, EvenOrOdd :'Even'}

  onIncrement = () => {
    this.setState(prevState => ({randomNumber: randomNumberMethod()}))
  }
  function randomNumberInRange(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  randomNumberMethod=()=>{
    randomNumberInRange(0,100)
  }
  getEvenOrOdd=()=>{
      const {randomNumber}=this.state

      return randomNumber%2==0? 'Even':'Odd'
  }

  render() {
    const randomNumber = this.randomNumberMethod()
    const EvenOrOdd = this.getEvenOrOdd()
    return (
      <div className="Main-division">
        <div className="EvenOdd-background">
          <h1>Count {randomNumber}</h1>
          <p>Count is {EvenOrOdd}</p>
          <button type="button" onClick={this.onIncrement}>Increment</button>
          <p>Increase By Random Number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
