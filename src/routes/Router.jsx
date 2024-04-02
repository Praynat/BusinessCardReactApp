import React from 'react';
import ROUTES from './routesModel';
import {Routes,Route} from "react-router-dom"
import CardsPage from '../Cards/Pages/CardsPage';
import AboutPage from '../Pages/AboutPage';
import ErrorPage from '../Pages/ErrorPage';
import CardsPageDetails from '../Cards/Pages/CardsPageDetails';
import SandboxPage from '../Sandbox/Pages/SandboxPage';
import Counter from '../Sandbox/Components/Counter';
import LifeCycle from '../Sandbox/Components/LifeCycle';
import Countries from '../Sandbox/Components/Countries';
import FormExample from '../Sandbox/Components/FormExample';

export default function Router() {
  return (
    <Routes>
        <Route path={ROUTES.ROOT} element={<CardsPage/>}/>
        <Route path={ROUTES.CARDS} element={<CardsPage/>}/>
        <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
        <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardsPageDetails/>}/>
        <Route path={ROUTES.SANDBOX} element={<SandboxPage/>}>
          <Route path="counter" element={<Counter/>}/>
          <Route path="lifeCycle" element={<LifeCycle/>}/>
          <Route path="Countries" element={<Countries/>}/>
          <Route path="form" element={<FormExample/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}
