import { Grid } from '@mui/material'
import { VoteCard } from '../../components/voteCard/voteCard.component'
import { VotePercentCard } from '../../components/votePercentCard/votePercentCard.component'
import { VotePercentCard2 } from '../../components/votePercentCard2/votePercentCard.component'
import { VotePercentCard3 } from "../../components/votePercentCard3/votePercentCard.component";
import { VotePercentCard4 } from "../../components/votePercentCard4/votePercentCard.component";
import { Button } from '../../components/button/button.component'
import './results.styles.css'
import { Link } from 'react-router-dom'

function Results() {

    return (
      <div className="results revamped ">
        <div className="results__container">
          <Grid container alignItems="flex-end">
            <Grid item xs={12} md={7}>
              <div className="results__inner-container ">
                <VoteCard removeEffect />

                <VotePercentCard />
                <VotePercentCard4 />
                <VotePercentCard2 />
                <VotePercentCard3 />
              </div>
            </Grid>

            <Grid item xs={12} md={5}>
              <div className="results__inner-container text-white revamped ">
                <div className="results__vote-count-container eth-card white-glassmorphism">
                  <span className='text-white'>Votes</span>
                  <br />
                  <h1 className="results__vote-count text-white">10,000</h1>
                </div>
                <Link to="/cast-vote">
                  <Button className="results__button blue-glassmorphism hover:white-glassmorphism pointer revamped">Cast your vote</Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
}

export default Results