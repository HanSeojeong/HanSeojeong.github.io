import styled, { css } from "styled-components"
import ImageList from "./Carousel/ImageList"
const Session2 = ({ active, odata, title }) => {
    return <>
        <Section2 active={active}>
            <Section2Title>{title}</Section2Title>
            <ImageList data={odata} />
        </Section2>
    </>
}

const Section2 = styled.div`
display:flex;
padding:100px;
align-items: center;
flex-direction: column;
${({ active }) => active && css`background-color:#3bd17a4c`}
`

const Section2Title = styled.div`font-size:2rem;
padding:10px;
margin:30px`

export default Session2;