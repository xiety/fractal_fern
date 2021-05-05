import React from 'react';
import CustomSlider from './CustomSlider';

const SliderGroup = ({ name, value, setValue }) => {
    return (<>
        {Object.keys(value).filter((key) => key !== 'p').map((key) => {
            return (
                <CustomSlider key={key} name={key} value={value[key]} setValue={(n) => setValue({ ...value, [key]: n })} />
            );
        })}
    </>);
}

export default SliderGroup;
