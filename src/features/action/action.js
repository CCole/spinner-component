import React from 'react';
import { Box, Button } from 'grommet';
import { func } from 'prop-types';
const primaryColor = '#419cf2';
const sidePadding = '2.5rem';

const noop = () => {};
const buttonStyle = {
  border: `1px solid ${primaryColor}`,
  borderRadius: '2rem',
  paddingTop: '.5rem',
  paddingBottom: '.5rem',
  paddingLeft: sidePadding,
  paddingRight: sidePadding,
  color: primaryColor,
  fontWeight: 'bold',
};

const ActionBar = ({ start = noop, stop = noop } = {}) => {
  return (
    <Box
      direction="row"
      gap="small"
      style={{ justifyContent: 'space-between' }}
    >
      <Button style={buttonStyle} onClick={start} className="start-btn">
        Start
      </Button>
      <Button style={buttonStyle} onClick={stop} className="stop-btn">
        Stop
      </Button>
    </Box>
  );
};

ActionBar.propTypes = {
  start: func,
  stop: func,
};
export default ActionBar;
