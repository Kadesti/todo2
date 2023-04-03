import styled from 'styled-components'

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 40vh;
    
    margin: auto;
    
    justify-content: space-between;
    color: #f0f0f0;
    
    .scroll {
        overflow-y: scroll;
        width: 100%;
        padding-right: 10px;
        
        > div:not(:last-child) {
            margin-bottom: 20px;
        }
        
        
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .scroll::-webkit-scrollbar {
    width: 7px;  /* 스크롤바의 너비 */
    }

    .scroll::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #f0f0f0; /* 스크롤바의 색상 */
    
    border-radius: 10px;
    }

    .scroll::-webkit-scrollbar-track {
        background: rgba(240, 240, 240, 0.3);  /*스크롤바 뒷 배경 색상*/
        border-radius: 10px;
    }

    
`

const Single = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    width: 100%;

    position: relative;

    .done > div {
        opacity: 50%;
    }

    .done::after {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 5%;
        width: 6em;
        height: 3px;
        transform: translateX(3em);
        transform: translateY(1.5px);
        background-color: white;

        border-radius: 3px;
    }
`

const Multiple = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    .multiple__text {
        display : flex;
        width: 80%;
        justify-content: center;
        align-items: center;

        .text--text {
            font-size: 30px;
        }
        .text--amount {
            font-size: 20px;
        }
    }
`

const CircleColor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20%;

    aspect-ratio: 1 / 1;

    box-sizing: border-box;

    border: 3px solid black;
    border-top-color: white;
    border-radius: 50%;
`

export { ItemContainer, Single, Multiple, CircleColor }