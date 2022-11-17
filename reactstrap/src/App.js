
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CollapseEx from './CollapseEx';
import FadeEx from './FadeEx';
import FormEx from './FormEx';

import ListGroupEx from './ListGroupEx';
import ModalEx from './ModalEx';
import NavbarEx from './NavbarEx';
import PagenationEx from './PagenationEx';
import PopoverEx from './PopoverEx';
import ProgressEx from './ProgressEx';
import SpinnerEx from './SpinnerEx';
import TableEx from './TableEx';
import TabEx from './TabEx';
import SweetAlert2BasicEx from './SweetAlert2BasicEx';
import SweetAlert2PositionEx from './SweetAlert2PositionEx';
import SweetAlert2ConfirmEx from './SweetAlert2ConfirmEx';


function App() {
  return (
    <>
      <h1>
        reactstrap Test   
      </h1>
      <CollapseEx/>
      <FadeEx/>
      <FormEx/>
     
      <ListGroupEx/>
      <ModalEx/>
      <NavbarEx/>
      <PagenationEx/>
      <PopoverEx/>
      <ProgressEx/>
      {/* <SpinnerEx/> */}
      <TableEx/>
      <TabEx/>
      {/* <SweetAlert2BasicEx/> */}
      <SweetAlert2PositionEx/>
      <SweetAlert2ConfirmEx/>

    </>
  );
}

export default App;
