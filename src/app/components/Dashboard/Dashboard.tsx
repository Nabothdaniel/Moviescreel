import HeaderTitle from "../Utils/HeaderTitle";
import Recommended from "./Recommended";



function Dashboard() {

  return (
    <main className={`  text-white`}>

      <HeaderTitle title="Recommended for you"/>
      <Recommended/>
    </main>
  );
}

export default Dashboard;
