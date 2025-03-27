import styled from "styled-components";

const HeaderComp = styled.header`
  width: 100%;
  height: 120px;
  top: 0;
  left: 0;
  position: fixed;
  .header_inner {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    line-height: 120px;
    h1 {
      font-size: 40px;
      font-style: oblique;
      color: #ffac28;
      text-shadow: 2px 2px #ccc;
      display: inline;
      cursor: pointer;
    }
  }
`;
export default HeaderComp;
