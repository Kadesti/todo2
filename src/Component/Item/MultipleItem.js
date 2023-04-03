import { useState } from 'react'
import { Multiple, CircleColor } from '../StyleComponent/ItemStyle'

const Circle = () => {
    return (
        <CircleColor>
            <div>
                <div>
                    <span>70%</span>
                </div>
            </div>
        </CircleColor>
    )
}

const MultipleItem = ({ text, amount }) => {
    // 각각의 state?
    const [current, setCurrent] = useState(0);

    // state 수가 많으니 redux로?

    return (
        <Multiple>
            <div className='multiple__text'>
                <div>
                    <div className='text--text'>{text}</div>
                    <div className='text--amount'>{amount}</div>
                </div>
            </div>

            <Circle>

            </Circle>

            {/* {
                current === account ? (): ()
            } */}
        </Multiple>
    )

}
export default MultipleItem;