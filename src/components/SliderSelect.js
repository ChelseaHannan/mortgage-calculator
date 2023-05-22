import React, { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({ data, setData }) => {
    return (
        <Fragment>
            <SliderComponent
                label="Home Value"
                min={0}
                max={10000}
                defaultValue={data.homeValue}
                value={data.homeValue}
                step={100}
                unit="$"
                amount={data.homeValue}
                onChange={(e, value) => setData({
                    ...data,
                    homeValue: value
                })}
            />

            <SliderComponent
                label="Down Payment"
                min={0}
                max={data.homeValue}
                defaultValue={data.downPayment}
                step={100}
                unit="$"
                amount={data.downPayment}
                onChange={(e, value) => setData({
                    ...data,
                    loanAmount: (data.homeValue - value),
                    downPayment: value
                })}
            />
            <SliderComponent
                label="Loan Amount"
                min={0}
                max={data.homeValue}
                defaultValue={data.loanAmount}
                step={100}
                unit="$"
                amount={data.loanAmount}
                onChange={(e, value) => setData({
                    ...data,
                    loanAmount: value
                })}
            />
            <SliderComponent
                label="Interest Rate"
                min={0}
                max={100}
                defaultValue={data.interestRate}
                step={0.5}
                unit="%"
                amount={data.interestRate}
                onChange={(e, value) => setData({
                    ...data,
                    interestRate: value
                })}
            />
        </Fragment>
    )
}

export default SliderSelect