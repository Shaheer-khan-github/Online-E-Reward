import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" sx={{ height: '10px', borderRadius: '7px' }} {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        {/* <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography> */}
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export function ProgressBar({ value }) {

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={value || 0} />
    </Box>
  );
}
