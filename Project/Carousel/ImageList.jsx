import styled from "styled-components";

const ImageList = ({ data }) => {

    return <>
        <List>
            {data.map(({ img, name }) =>
                <ImgList key={name}>
                    <ImgCenter src={img} /><b>{name}</b>
                </ImgList>)}
        </List>
    </>
}
const List = styled.ul`display:grid;
grid-template-columns:repeat(3,1fr)`
const ImgList = styled.li`
list-style:none;
display: flex;
flex-direction: column; 
margin-left: 10px;
`
const ImgCenter = styled.img`width:400px; height:400px`
export default ImageList;