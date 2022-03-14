import LivingRoom from "./LivingRoom"
import Bath from "./Bath"
import Kitchen from "./Kitchen"
import Bedroom from "./Bedroom"

function Floorplan(props){
  return(
    <>
    <div>
      <Bedroom bedNum="Bedroom 1" />
      <Kitchen />
      <Bath size="Full Bath" />
      <Bedroom bedNum="Bedroom 2" />
      <LivingRoom />
      <Bath size="Half bath" />
      <Bedroom bedNum="Bedroom 3" />
    </div>
    </>
  )
}

export default Floorplan