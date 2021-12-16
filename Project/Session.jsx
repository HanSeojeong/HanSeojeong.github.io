import styled, { css } from "styled-components"

const Section = () => {
    const data = [{
        text: "환경은 '우리 주변을 둘러싸고 있는 모든 것'을 말합니다. 사람도 환경의 일부분이며, 환경과 밀접한 관계를 맺으며 생활하고 있습니다",
        img: "https://previews.123rf.com/images/3rus/3rus1504/3rus150400012/39122779-%EC%84%B8%EA%B3%84-%EB%85%B9%EC%83%89-%EC%83%9D%ED%83%9C-%EB%8F%84%EC%8B%9C%EB%8A%94-%ED%99%98%EA%B2%BD-%EC%B9%9C%ED%99%94%EC%A0%81-%EC%9D%B8-.jpg"
        , active: false
    }, {
        text: "그러나 사람들의 무자비한 지구소비로 인해 지구온난화가 가속되어 우리의 지구는 생명이 위태로워지고 있습니다."
        , img: "https://herb-api.hankookilbo.com/api/attaches/image/group/89663a4d-e1aa-43da-b459-ae57744bd2df"
        , active: true
    }]

    return <>

        {data.map((data) => (<Session active={data.active} key={data.text}>
            <ImgSession1 src={data.img} />
            <Text>{data.text}</Text> </Session>))}



    </>
}
const Session = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        height:700px;
        ${({ active }) => active && css`background-color:#3479344b;
        flex-direction:row-reverse`}
`
const ImgSession1 = styled.img`width:500px`
const Text = styled.div`width:450px;
padding:20px`

export default Section;