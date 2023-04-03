import styled from 'styled-components'

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 30px; */

    background-color: #f0f0f0;
    border-radius: 30px;

    overflow: hidden;

    > div:not(:last-child) {
        margin : 20px;
    }

    .body {
        width: 100%;
        background-color: black;
        border-radius: 50px 0;

        padding: 20px 0;
    }
`

const Profile = styled.div`
    display: flex;
    justify-content: center;    

    // margin : 20px;

    .profile__img {
        width: 100px;
        height: 100px;

        margin-right: 50px;
    }

    .info {
        display: flex;
        flex-direction : column;
        justify-content: space-evenly;
    }
    .info__name {
        font-size: 50px;
    }
    .info__day {
        font-size: 20px;
    }

`

const Buttom = styled.div`
    margin : 20px auto 0px auto;
    button {
        width: 50px;
        aspect-ratio: 1 / 1;

        border-radius: 30%;

        padding: 0;
        margin-bottom: 20px;
        > span {
            font-size: 40px;
        }
    }

    div {
        font-size: 20px;

        color: #f0f0f0;
    }
`

const InputComp = styled.div`
    width: 80%;
    margin: auto;
    margin-bottom: 15px;

    .amount{
        background-color: #f0f0f0;      
        width: 100%;
        height: 15px;
        border-radius: 5px;
        margin-top: 5px;
        display: flex;
        justify-content: end;
        overflow: hidden;
        
        /* padding-left: 10px; */
        input {
            border: none;
            padding: 0;
            background-color: #f0f0f0;

            width: 95%;
        }

        input:focus {
            outline: none;
        }
        &.invisible {
            opacity: 0;
        }
    }
`

const MainComp = styled.div`
        background-color: #f0f0f0;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        overflow: hidden;

        .title {
            width: 85%;
            height: 50px;
            /* font-size: 29px; */
            font-size: 1.8em;
            background-color: #f0f0f0;
            border: none;

            &.small {
                height: 50px;
            }
        }
        .title:focus {
            outline: none;
        }
`
const CheckWrap = styled.div`
        input#check_btn + label > span {
            /* vertical-align: middle; */
            padding-left: 5px;
        }

        input#check_btn + label:before {
            content: '';
            display: inline-block;
            width: 17px;
            height: 17px;
            border: 2px solid rgba(0,0,0,0.7);
            border-radius: 4px;
            vertical-align: middle;
            margin-right: 10px;
            font-size: 15px;
        }

        input#check_btn:checked + label:before {
            content: '✔️';
            border-color: rgba(0,0,0,0.7);
            background-position: 50%;
        }    

        input#check_btn{
            display: none;
        }
`

export { HomeContainer, Profile, Buttom, InputComp, MainComp, CheckWrap };