import Item from '../Component/Item/Item'
import ProfileImg from '../img/Profile.png'

import { useSelector } from "react-redux"
import { useEffect, useState } from 'react'

import { HomeContainer, Profile, Buttom, InputComp, MainComp, CheckWrap } from '../Component/StyleComponent/HomeStyle';

// const useInput = () => {
//     const [newtitle, setNewtitle] = useState('');
//     const [newamount, setNewamount] = useState(0);
//     const [ischecked, setIschecked] = useState(false);

//     console.log(123);
//     return [
//         newtitle, setNewtitle,
//         newamount, setNewamount,
//         ischecked, setIschecked
//     ]
// }

const AddInput = (props) => {
    // console.log(props);
    const [newtitle, setNewtitle, newamount, setNewamount, ischecked, setIschecked] = Object.values(props);

    const [titleFade, setTitleFade] = useState('');
    const [amountFade, setAmountFade] = useState('invisible');

    useEffect(() => {
        // console.log(titleFade);
        ischecked
            ? (
                // setTitleFade('small')
                (setAmountFade(''))
            )
            : (
                // setTitleFade('')
                (setAmountFade('invisible'))
            )
    }, [ischecked])

    return (
        <InputComp>
            <MainComp>
                {
                    ischecked
                        ? <input className='title small' value={newtitle} onChange={e => setNewtitle(e.target.value)} />
                        : <input className='title' value={newtitle} onChange={e => setNewtitle(e.target.value)} />
                }
                {/* <input className={'title ' + titleFade} placeholder='할 일' value={newtitle} onChange={e => setNewtitle(e.target.value)} /> */}

                <CheckWrap>
                    <input type="checkbox" id="check_btn" />
                    <label for="check_btn" onClick={() => { setIschecked(!ischecked) }}></label>
                </CheckWrap>

                {/* <label className='checkForm' type='checkbox' checked={ischecked} onChange={() => { setIschecked(!ischecked) }} /> */}
            </MainComp>
            <div className={'amount ' + amountFade}>
                <input value={newamount} onChange={e => setNewamount(e.target.value)} />
            </div>
        </InputComp>
    )
}

// const makeNewItem = () => {
//     let result = {
//         id : item.length,
//         text : newtitle,
//         type : ischecked,
//         amount : newamount,
//         isDone : false
//     }
// }

const Home = () => {
    // const [ischecked, setIschecked] = useInput();
    const [newtitle, setNewtitle] = useState('');
    const [newamount, setNewamount] = useState('');
    const [ischecked, setIschecked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const entireState = [newtitle, setNewtitle, newamount, setNewamount, ischecked, setIschecked];

    let item = useSelector((state) => { return state.item })

    return (
        <HomeContainer>
            <Profile>
                <div>
                    <img className='profile__img' src={ProfileImg} alt='Profile.png' />
                </div>
                <div className='info'>
                    <span className='info__name'>Kadesti</span>
                    <span className='info__day'>1st April 2023</span>
                </div>
            </Profile>
            <div className='body'>
                {
                    isClicked
                        ? (
                            <>
                                <AddInput {...entireState} />
                                <Item />
                                <Buttom>
                                    <button onClick={() => {
                                        // makeNewItem()
                                        setIsClicked(false)
                                    }}><span>+</span></button>
                                    <div>더하기를 누르면 일정이 추가되요!</div>
                                </Buttom>
                            </>
                        )
                        : (
                            <>
                                <div />
                                <Item />
                                <Buttom>
                                    <button onClick={() => setIsClicked(true)}><span>+</span></button>
                                    <div>더하기를 누르면 일정이 추가되요!</div>
                                </Buttom>
                            </>
                        )
                }
            </div>
        </HomeContainer >
    )
}

export default Home