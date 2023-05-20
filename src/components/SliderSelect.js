import React, { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({ data, setData }) => {
    return (
        <Fragment>
            <SliderComponent
                label="Home Value"
                min={0}
                max={10000}
                defaultValue={0}
                value={data.homeValue}
                step={100}
                unit="$"
                amount={data.homeValue}
                onChange={(e, value) => setData({
                    homeValue: value
                })
            }
            />

            <SliderComponent
                label="Down Payment"
                min={0}
                max={10000}
                defaultValue={0}
                step={100}
                unit="$"
                amount={500}
                onChange={(e, value) =>
                    console.log(value)}
            />
            <SliderComponent
                label="Loan Amount"
                min={0}
                max={10000}
                defaultValue={0}
                step={100}
                unit="$"
                amount={700}
                onChange={(e, value) =>
                    console.log(value)}
            />
        </Fragment>
    )
}

export default SliderSelect