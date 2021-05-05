import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const StyledSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '0 0',
    },
    thumb: {
        height: 11,
        width: 11,
    },
    valueLabel: {
        left: 16,
        top: 0,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.4,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        marginTop: -3,
    },
})(Slider);

const CustomSlider = ({ name, value, setValue }) => {
    return (
        <Grid container>
            <Grid item xs={1}>
                {name}
            </Grid>
            <Grid item xs={11}>
                <StyledSlider
                    marks={[{ value: 0 }]}
                    value={value} onChange={(e, value) => setValue(value)} min={-2.0} max={2.0} step={0.01} valueLabelDisplay='on' />
            </Grid>
        </Grid>
    );
}

export default CustomSlider;
