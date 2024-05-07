import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AppRoutes from './Routes/Index'
import Excel from './Excel/Excel'

function App() {

  return (
    <AppRoutes/>
    // <Excel/>
  )
}

export default App

// App.js
// import React from "react";
// import { DropdownProvider } from "./Context/DropDownContext";
// import Dropdown from "./Context/DropDown";
// import InputForm from "./Context/FormProvider";
// import FormLayout from "./Layout/FormLayout/FormLayout";

// const App = () => {
//   return (
//     <DropdownProvider>
//       <FormLayout>
//         <InputForm/>
//       </FormLayout>
//     </DropdownProvider>
//   );
// };

// export default App;

