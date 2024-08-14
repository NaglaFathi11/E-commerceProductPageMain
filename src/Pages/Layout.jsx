import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

export default function Layout(props) {
  return (
    <>
      <NavBar
        anotherCount={props.anotherCount}
        setAnotherCount={props.setAnotherCount}
      />
      <Outlet />
    </>
  );
}
