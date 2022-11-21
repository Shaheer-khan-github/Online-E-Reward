import { Grid } from '@mui/material'
import { ProgressBar } from '../progressBar/progressBar.component'
import './votePercentCard.styles.css'

export function VotePercentCard4() {

    return (
      <div className="votePercentCard revamped bg-1">
        <Grid container>
          <Grid item xs={10}>
            <h1 className="votePercentCard__title">Usama Zafar</h1>
          </Grid>
          <Grid item xs={2}>
            <h1 className="votePercentCard__title votePercentCard__percent">15%</h1>
          </Grid>
          <ProgressBar value={15} />
        </Grid>
        <p className="votePercentCard__votes">1,500 votes</p>
      </div>
    );
}