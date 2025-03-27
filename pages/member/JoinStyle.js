import styled from "styled-components";

const JoinComp = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  margin-top: 118px;
  .join_inner {
    width: 400px;
    height: 100%;
    margin: 0 auto;
    .join_box {
      padding-top: 50px;
      box .join_title {
        text-align: center;
        height: 60px;
        line-height: 60px;
        h2 {
          font-size: 40px;
        }
      }
      .join_input {
        width: 350px;
        margin: 0 auto;
        table {
          margin-top: 30px;
          tr {
            height: 70px;
            th {
              text-align: start;
              width: 80px;
            }
            input {
              height: 40px;
              width: 260px;
              outline: none;
            }
          }
        }
      }
    }
  }
`;
export default JoinComp;
