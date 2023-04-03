import 로딩화면 from '../img/로딩화면.png'
import styled from 'styled-components'

const LodingContainer = styled.div`    
    border-radius: 30px;
    background-image: url(${로딩화면});

    width: 100%;
    height: 100%;
`

const Loding = () => <LodingContainer />

export default Loding