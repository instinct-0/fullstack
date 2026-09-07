import { useState } from 'react'


const Button = ({onClick, text}) => {
    return <button onClick={onClick}>{text}</button>
};


const StatisticLine = ({text, value}) => {
    return (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
    )
}

const Statistics = ({stats}) => {
    if (stats.total == 0) {
        return <p>No feedback given</p>
    }
    
    const average = (stats.good - stats.bad)/stats.total;
    const goodPercentage = (stats.good)/stats.total;
    return (
    <>
        <h1>Statistics</h1>
        <table>
            <tbody>
                <StatisticLine text="Good"    value={stats.good}/>
                <StatisticLine text="Neutral" value={stats.neutral}/>
                <StatisticLine text="Bad"     value={stats.bad}/>
                <StatisticLine text="Average" value={average}/>
                <StatisticLine text="Positive" value={`${goodPercentage} %`}/>
            </tbody>
        </table>
    </>
    )
};


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incrementGoodState = () => setGood(good + 1);
    const incrementNeutralState = () => setNeutral(neutral + 1);
    const incrementBadState = () => setBad(bad + 1);

    const stats = {
        'good': good,
        'neutral': neutral,
        'bad': bad,
        'total': good + neutral + bad
    };

    return (
    <div>
        <h1>Give Feedback</h1>
        <div>
            <Button onClick={incrementGoodState} text='good'/>
            <Button onClick={incrementNeutralState} text='neutral'/>
            <Button onClick={incrementBadState} text='bad'/>
        </div>
        
        <Statistics stats={stats}/>
    </div>
    );
}

export default App
