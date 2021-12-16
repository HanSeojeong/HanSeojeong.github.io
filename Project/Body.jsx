import styled, { css } from "styled-components"
import Section from "./Session"
import Session2 from "./Session2"
const Body = () => {
    const doItList = [{
        name: "일상에서"
        , img: "https://mblogthumb-phinf.pstatic.net/MjAxNzA1MjRfMSAg/MDAxNDk1NTg5MjEzMzEw._6yq1eCbNL0f6G-RQRP0WeG3oafe03v08xSJbfyFltEg.TDW_9yINMFufRg6TInqZYxZ9kMTShZNgz3FpxDO8t1wg.JPEG.kecoprumy/4%EC%9B%94_%EA%B0%9C%EC%9D%B8%EB%AF%B8%EC%85%98_%EC%9B%90%EA%B3%A0_-_%ED%99%98%EA%B2%BD%EC%8B%A4%EC%B2%9C%ED%8F%AC%EC%8A%A4%ED%84%B0.JPG?type=w2"
    }, {
        name: "기업에서",
        img: "https://mblogthumb-phinf.pstatic.net/20160708_204/lovekeiti_1467969233682IHzu8_PNG/160708_%C7%D1%B1%B9%C8%AF%B0%E6%BB%EA%BE%F7%B1%E2%BC%FA%BF%F8_%BA%ED%B7%CE%B1%D7_%B3%EC%BB%F6%B1%E2%BE%F7%C1%F6%C1%A4%C1%A6%B5%B5_%C0%E7%B0%A1%B0%F8-2.png?type=w2"
    }]

    const imageList = [{ name: "GREENPEACE", img: "https://images-na.ssl-images-amazon.com/images/I/81sP-0Xz2FL._RI_.jpg" },
    { name: "지구의 벗", img: "http://kfem.or.kr/wp-content/uploads/2014/12/1-640x426.jpg" },
    { name: "WWF", img: "https://fca7603378a4e3ebeab2-4e03b1ac88f27f7b20b4cf232f717383.ssl.cf1.rackcdn.com/photos/social/landing_page_share2.jpg" }]
    return (
        <BodyWrapper>
            <Section />
            <Session2 odata={doItList} active={false} title="우리가 할 수 있는 일" />
            <Session2 odata={imageList} active={true} title="세계 환경 단체" />
        </BodyWrapper>)
}

const BodyWrapper = styled.div``



export default Body;