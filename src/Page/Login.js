import React from 'react'
import image from '../img/Profile.png'

function Login() {
    return (
        <div>
            <div className='profile'>
                <img src={image} alt='profile' />
                <p>오늘의 시작</p>
            </div>
            <form className='Login__submit'>
                <div className='Login__Input'>
                    <p className='Login__Input__text'>ID</p>
                    <input placeholder='ID를 입력하세요' />
                    <p className='Login__Input__text'>Password</p>
                    <input placeholder='비밀먼호를 입력하세요' />
                </div>
                <div className='Login__send'>
                    <div className='Login__KeepLogint'>
                        <input className='Login__send--KeepLogint' type='checkbox' />
                        <p>로그인 유지</p>
                    </div>
                    <button className='Login__send--button'>로그인</button>
                </div>
            </form>
        </div>
    )
}

export default Login