import ProgressCircle from './circle-progress/circle-progress';
import { Box, Card, CardFooter } from 'grommet';
import ActionBar from './action/action';

const noop = () => {};

const Spinner = () => {
  return (
    <>
      <Card
        style={{ backgroundColor: '#FFF', width: '280px', height: '410px' }}
      >
        <Box
          style={{
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ProgressCircle r={58} w={120} h={120} cx={60} cy={60} prog={75} />
        </Box>
        <CardFooter pad={{ horizontal: 'small' }}>
          <ActionBar start={noop} stop={noop} />
        </CardFooter>
      </Card>
    </>
  );
};

export default Spinner;
