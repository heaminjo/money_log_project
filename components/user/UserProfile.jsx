import UserProfileComp from "./UserProfileStyle";
import img from "../../image/eee.gif";
import { useContext } from "react";
import { MoneyContext } from "../../App";
import { Link } from "react-router-dom";
export default function UserProfile() {
  const { isLogin, loginUser } = useContext(MoneyContext);
  console.log(loginUser);
  return (
    <UserProfileComp>
      <div className="user_image">
        <img src={img} alt="프로필 이미지 사진" />
      </div>
      <div className="user_profile">
        {isLogin ? (
          <>
            <div className="user_data">
              <p id="user_name">
                <b>{loginUser.userName}</b>님
              </p>
              <p id="user_money">
                이번달 지출 금액 <br />
                <span>10000000원</span>
              </p>
            </div>
          </>
        ) : (
          <>
            <ul className="user_sign">
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/join">회원가입</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </UserProfileComp>
  );
}
