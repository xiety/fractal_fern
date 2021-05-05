import React from 'react';
import Grid from '@material-ui/core/Grid';
import SliderGroup from './SliderGroup';
import fernDrawer from './fernDrawer';
import Typography from '@material-ui/core/Typography';

const App = () => {
  const width = 800;
  const height = 600;
  const canvas = React.useRef(null);

  const [row1, row1Set] = React.useState({ a: 0.0, b: 0.0, c: 0.0, d: 0.16, e: 0.0, f: 0.0, p: 10 });
  const [row2, row2Set] = React.useState({ a: 0.85, b: 0.04, c: -0.04, d: 0.85, e: 0.0, f: 1.60, p: 860 });
  const [row3, row3Set] = React.useState({ a: 0.20, b: -0.26, c: 0.23, d: 0.22, e: 0.0, f: 1.60, p: 930 });
  const [row4, row4Set] = React.useState({ a: -0.15, b: 0.28, c: 0.26, d: 0.24, e: 0.0, f: 0.44, p: 1000 });

  React.useEffect(() => {
    const options = { width, height, functions: [row1, row2, row3, row4] };
    fernDrawer(canvas.current, options);
  });

  return (
    <>
      <Typography>
        Barnsley's Fern Generator
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <SliderGroup name='func1' value={row1} setValue={row1Set} />
          <SliderGroup name='funс2' value={row2} setValue={row2Set} />
          <SliderGroup name='func3' value={row3} setValue={row3Set} />
          <SliderGroup name='func4' value={row4} setValue={row4Set} />
        </Grid>
        <Grid item xs={7}>
          <canvas ref={canvas} width={width} height={height} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
