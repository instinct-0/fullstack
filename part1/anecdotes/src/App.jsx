import { useState } from 'react'



const Button = ({onClick, text}) => {
    return <button onClick={onClick}>{text}</button>
}


const Anecdote = ({anecdote, voteCount, onVoteClick, onNextClick}) => {
    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdote}</p>
            <Button onClick={onVoteClick} text="vote"/>
            <Button onClick={onNextClick} text="next anecdote"/>
            <p>has {voteCount} votes</p>
        </div>
    );
}

const MostVotedAnecdote = ({anecdotes, votes}) => {
    const mostVoted = Math.max(...votes);
    const mostVotedIndex = votes.findIndex(vote => vote == mostVoted);
    
    if (mostVoted === 0)
        return;

    return (
        <div>
            <h1>Anecnote with most votes</h1>
            <p>{anecdotes[mostVotedIndex]}</p>
            <p>has {mostVoted} votes</p>
        </div>
    );
}


const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selectedIndex, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));


    const handleVote = () => {
        const newVotes = [...votes];

        newVotes[selectedIndex]++;
        setVotes(newVotes);
    };

    const handleNextClick = () => {
        const rand = Math.random(0); /* [0, 1) */
        const newIndex = Math.floor(rand*anecdotes.length);

        setSelected(newIndex);
    }


    return (
    <>
        <Anecdote
            anecdote={anecdotes[selectedIndex]}
            voteCount={votes[selectedIndex]}
            onVoteClick={handleVote}
            onNextClick={handleNextClick}
        />

        <MostVotedAnecdote
            anecdotes={anecdotes}
            votes={votes}
        />
    </>
    )
}

export default App
