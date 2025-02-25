import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Buy from "./components/pages/Buy";
import Petcare from "./components/pages/Petcare";
import SignUp from "./components/pages/SignUp";
import Sell from "./components/pages/Sell";
import Petveterinary from "./components/pages/Petveterinary";
import Pettranner from "./components/pages/Pettranner";
import Registration from "./components/Registration";
import Footer from "./components/Bottom";
import Login from "./components/Login";
import PetCards from "./components/PetCards";
import Profile from "./components/Profile";
import AddPet from "./components/AddPet";
import SaveAnimal_Shelter from "./components/SaveAnimal_Shelter";
import AllAnimalShelter from "./components/animal_shelter/AllAnimalShelter";
import Pet_Caretakers from "./components/pet_caretaker/SavePet_Caretakers";
import Trainer from "./components/pet_trainer/SaveTrainer";
import AllPetCaretaker from "./components/pet_caretaker/AllPetCaretaker";
import SaveTrainer from "./components/pet_trainer/SaveTrainer";
import Alltrainer from "./components/pet_trainer/Alltrainer";
import SavePetVet from "./components/pet_vet/SavePetVet";
import AllPetVet from "./components/pet_vet/AllPetVet";
import Veterinary from "./components/pet_vet/Veterinary";
import UserPet from "./components/UserPet";
import LoginReg from "./components/LoginReg";
import SellerInfo from "./components/SellerInfo";
import BuyerProfile from "./components/BuyerProfile";
import BuyerPetDisp from "./components/BuyerPetsDisp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/petcare" component={Petcare} />
          <Route path="/signup" component={Registration} />
          <Route path="/sell" component={Sell} />
          <Route path="/Petveterinary" component={Petveterinary} />
          <Route path="/pettranner" component={Pettranner} />
          <Route path="/login" component={Login} />
          <Route path="/allpets" component={PetCards} />
          <Route path="/profile" component={Profile} />
          <Route path="/addpet" component={AddPet} />
          <Route path="/saveanimalshelter" component={SaveAnimal_Shelter} />
          <Route path="/allAnimalShelter" component={AllAnimalShelter} />
          <Route path="/savepetcaretaker" component={Pet_Caretakers} />
          <Route path="/allpetcaretaker" component={AllPetCaretaker} />
          <Route path="/savetrainer" component={SaveTrainer} />
          <Route path="/alltrainer" component={Alltrainer} />
          <Route path="/savetrainer" component={Trainer} />
          <Route path="/saveveterinary" component={SavePetVet} />
          <Route path="/allveterinary" component={AllPetVet} />
          <Route path="/saveveterinary" component={Veterinary} />
          <Route path="/userpets" component={UserPet} />
          <Route path="/loginreg" component={LoginReg} />
          <Route path="/sellerinfo" component={SellerInfo} />
          <Route path="/buyerprofile" component={BuyerProfile} />
          <Route path="/buyerpetdisp" component={BuyerPetDisp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
