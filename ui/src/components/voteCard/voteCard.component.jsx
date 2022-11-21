import { Link } from 'react-router-dom';
import './voteCard.styles.css';


export function VoteCard({ removeEffect, link }) {

    const component = 
    
    <div className={`voteCard ${removeEffect ? 'voteCard__removeEffect bg-1 rounded-2xl ' : 'rounded-2xl bg-1'}`}>
        <Highlighter />
        { !removeEffect && <VoteCount /> }
        <h1 className="voteCard__title revamped ">Team Lead Election</h1>
        <p className="voteCard__time revamped ">Created 1 day ago</p>
    </div>

    return !link ? (
        component 
    ) : (
        <Link to={link}>
            <div className='bg-1'>
                 { component }
            </div>
           
        </Link>
    )
}

function Highlighter() {
    
    return (
        <span className="highlighter bg-1 revamped">
            Live Election
        </span>
    )
}

function VoteCount() {

    return (
        <span className="voteCount bg-1 revamped">10,000 Votes</span>
    )
}