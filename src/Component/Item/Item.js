import { useSelector } from "react-redux"
import { ItemContainer } from '../StyleComponent/ItemStyle'

import Single from './SingleItem';
import Multiple from './MultipleItem';

// props Drilling.. redux toolkit으로 개선할 필요 있음 -> redux로 처리 완료
const Item = () => {
    let item = useSelector((state) => { return state.item })

    return (
        <ItemContainer>
            <div className='scroll'>
                {item.map(el => el.type === 'single' ? <Single {...el} key={el.id} /> : <Multiple {...el} key={el.id} />)}
            </div>
        </ItemContainer>
    )
}

export default Item