import { Grid } from '@mui/material'
import { ProgressBar } from '../progressBar/progressBar.component'
import './votePercentCard.styles.css'

export function VotePercentCard() {

    return (
      <div className="votePercentCard revamped bg-1">
        <Grid container>
          <Grid item xs={10}>
            <h1 className="votePercentCard__title">Ilsa Afzal</h1>
          </Grid>
         <Grid item xs={2}>
            <h1 className="votePercentCard__title votePercentCard__percent">43%</h1>
          </Grid>
          <ProgressBar value={43} />
        </Grid>
        <p className="votePercentCard__votes">4,300 votes</p>
      </div>
    );
}