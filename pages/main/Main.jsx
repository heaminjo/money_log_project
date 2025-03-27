import Calendar from "react-calendar";
import UserProfile from "../../components/user/UserProfile";
import MainComp from "./MainStyle";
export default function Main() {
  return (
    <MainComp>
      <div className="main_inner">
        <Calendar />
        <UserProfile />
      </div>
    </MainComp>
  );
}
