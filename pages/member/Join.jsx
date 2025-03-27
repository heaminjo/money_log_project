import JoinComp from "./JoinStyle";

export default function Join() {
  return (
    <JoinComp>
      <div className="join_inner">
        <div className="join_box">
          <div className="join_title">
            <h2>JOIN</h2>
          </div>
          <div className="join_input">
            <form action="">
              <table>
                <tr>
                  <th>
                    <label htmlFor="id">아이디</label>
                  </th>
                  <td>
                    <input type="text" id="id" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <label htmlFor="password">비밀번호</label>
                  </th>
                  <td>
                    <input type="password" id="password" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <label htmlFor="name">이름</label>
                  </th>
                  <td>
                    <input type="text" id="name" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <label htmlFor="birth">생년월일</label>
                  </th>
                  <td>
                    <input type="date" id="birth" />
                  </td>
                </tr>
              </table>
              <div className="sub_btn">
                <input type="submit" value="회원가입" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </JoinComp>
  );
}
