import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MiPrimerComponente } from "./components/MiPrimerComponente/MiPrimerComponente"
import { ComponentUseEffect } from "./components/ComponentUSeEffect/ComponentUseEffect";
import { ComponentForm } from "./components/ComponentForm/ComponentForm";
import { AppProduct } from "./components/AppProduct/AppProduct";

export const App = () => {


  return (
    <div style={{display:'flex',flexDirection:'column',gap:'2vh'}}>
      {/* <MiPrimerComponente text={'Texto desde propiedades'} color="red" fontSize={5}/>
      <ComponentCounter />
      <ComponentUseEffect/> */}
      {/* <ComponentForm /> */}
      <AppProduct />
    </div>
  )
}
