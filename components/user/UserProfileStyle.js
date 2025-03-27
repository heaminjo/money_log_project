import styled from "styled-components";

const UserProfileComp = styled.div`
  width: 200px;
  height: 300px;
  margin-top: 45px;
  border: 2px solid #ffac28;
  box-shadow: 5px 5px 5px #ffac28;
  border-radius: 20px;
  padding: 20px;
  .user_image {
    text-align: center;
    height: 170px;
    display: flex;
    margin: 0 auto;
  }
  .user_data {
    font-size: 13px;
    margin-top: 20px;
    p {
      padding: 5px;
      b {
        font-size: 20px;
      }
      span {
        font-size: 20px;
        font-weight: bold;
        color: #000;
      }
    }
    #user_money {
      margin-top: 20px;
      color: red;
      font-weight: bold;
    }
  }
  .user_sign {
    display: flex;
    gap: 5px;
    height: 130px;
    justify-content: end;
    align-items: end;
    li {
      font-size: 13px;
      cursor: pointer;
      font-weight: bold;
      a {
        color: #000;
        text-decoration: none;
      }
    }
  }
`;
export default UserProfileComp;
