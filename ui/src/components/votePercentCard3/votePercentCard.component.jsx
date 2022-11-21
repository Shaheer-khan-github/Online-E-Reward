import { Grid } from '@mui/material'
import { ProgressBar } from '../progressBar/progressBar.component'
import './votePercentCard.styles.css'

export function VotePercentCard3() {

    return (
      <div className="votePercentCard revamped bg-1">
        <Grid container>
          <Grid item xs={10}>
            <h1 className="votePercentCard__title">Saad</h1>
          </Grid>
          <Grid item xs={2}>
            <h1 className="votePercentCard__title votePercentCard__percent">25%</h1>
          </Grid>
          <ProgressBar value={25} />
        </Grid>
        <p className="votePercentCard__votes">2,500 votes</p>
      </div>
    );
}