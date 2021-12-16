import styled from "styled-components";

const Footer = () => {
    const aboutCompany = ["회사소개", "인재채용", "제휴제안", "개인정보처리방침"]
    const information = [{ name: "email", text: "www.ecoecoo.com" },
    { name: "전화번호", text: "000-1000-1001" },
    { name: "팩스", text: "080-1000-1001" }]
    return <div>
        <FooterWrapper>
            <FooterLeft>
                <nav>
                    <List>
                        {aboutCompany.map((item) => <ListItem key={item}>{item}</ListItem>)}
                    </List>
                </nav>

            </FooterLeft>
            <FooterRight>
                <ListRight>
                    {information.map((item) => <ListItem>{item.name} : {item.text}</ListItem>)}
                </ListRight>
            </FooterRight>
        </FooterWrapper>
    </div>
}
const FooterWrapper = styled.div`
padding: 0 50px;
display:flex; 
justify-content:space-between;
background-color:#c8fac353
`
const List = styled.ul`
list-style:none;
display:flex;
padding:50px;
`
const ListRight = styled.ul`
list-style:none;
display:flex;
flex-direction:column;
padding:20px;
margin:30px;
border-left: solid 1px #ddd;
`
const ListItem = styled.li`margin:10px`
const FooterLeft = styled.div`height:300px`
const FooterRight = styled.div``
export default Footer;