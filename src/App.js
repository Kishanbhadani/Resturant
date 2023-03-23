import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React,{Component} from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Check from './Component/Check';
import About from './Component/About';
import Header from './Component/Header';
import Login from './Component/Login';
import Registation from './Component/Registation';
import Moreitem from './Component/Moreitem';
import Error from './Component/Error';


const firebaseConfig = {
  apiKey: "AIzaSyCRKQYk4gsO3KtBd28BsqDFtP9y2T7pf2Y",
  authDomain: "resturant-octant.firebaseapp.com",
  databaseURL: "https://resturant-octant-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "resturant-octant",
  storageBucket: "resturant-octant.appspot.com",
  messagingSenderId: "616723922296",
  appId: "1:616723922296:web:833d8fd51fc85a92d71c8d"
};


initializeApp(firebaseConfig);
const auth = getAuth();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth: false,
      message:"",
      type:1
    }
    console.log("constructor");
  } 

  loginHandler = ()=>{
    this.setState({auth: !this.state.auth})
  }

  submitReg = (event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const correctPassword = event.target.correctPassword.value;
    if(password !== correctPassword){
      this.setState({message: "password does not match",type:0})
      return;
    } 

      createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        // console.log(data);
        sendEmailVerification(auth.currentUser);
        this.setState({message:"Registered Successfully", type:1}, ()=>{
          event.target.email.value = "";
          event.target.password.value = "";
          event.target.correctPassword.value = "";
        })
      })
      .catch((error) => {
        const errorMessage = error.message;
        this.setState({message:errorMessage,type:0})
      });
  }

  submitLogin = (event)=>{
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((data) => {
      if(data.user.emailVerified === true){
      this.setState({message:"Login Successfully",type:1})
      } else{
      this.setState({message:"Verify your Email Id",type:0})
      }
      console.log(data);
    })
    .catch((error) => {
      const errorMessage = error.message;
      this.setState({message:errorMessage,type:0})
    });
  }


  static getDerivedStateFromProps(props,state){
     console.log("getDerivedStateFromProps");
     return null;
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  render() {
    console.log('Render');
      return (
        <div className="App">
        <Router>
          <Navbar login={this.loginHandler} status={this.state.auth}></Navbar>
            <Routes>

                <Route exact path="/login" element={
                  <>
                      <Login 
                          type = {this.state.type}
                          google={this.googleHandlerLog}
                          message= {this.state.message}
                          submit={this.submitLogin}>
                      </Login> : 
                  </>}> 
                </Route>   
                
                <Route exact path="/registation" element={
                  <>
                    <Registation 
                        type = {this.state.type}
                        google={this.googleHandlerReg}
                        message= {this.state.message}
                        submit={this.submitReg}>
                    </Registation>
                  </>}> 
                </Route>   

                <Route exact path="/about" element={
                  <>
                    <Header title="About us" img="check-baner.jpg"></Header>
                    <About></About>
                  </>}> 
                </Route>
    
                <Route exact path="/check" element={
                  <>
                    <Header title="" img="check-baner.jpg"></Header>
                    <Check></Check>
                  </>}> 
                </Route>
    
                <Route exact path="/moreitem" element={
                  <>
                    {this.state.auth === false ? <redirect></redirect> :
                    <>
                      <Header title="more info details" img="check-baner.jpg"></Header>
                      <Moreitem></Moreitem>
                    </>
                    }
                  </>}> 
                </Route>

                <Route exact path='moreitem/1' element={
                  <>
                    <Moreitem></Moreitem>
                    <p className="m-4 font-sty text-blog-head">1 Blog</p>
                    <p className="m-4 font-sty">Blog : Being a foodie, it is difficult for me to chose a single food which I like the most. However, pizza is one thing that I cannot imagine my life without. I like the aroma of a freshly baked pizza. The smell of the bread, cheese and vegetables merged together are worth it when a pizza arrives out of the oven. I like my pizza with extra cheese and a thin crust. My favorite toppings are mushroom, chicken, bell pepper, olives and anchovies.</p>
                  </>
                }></Route>
                <Route exact path='moreitem/2' element={
                  <>
                     <Moreitem></Moreitem>
                     <p className="m-4 font-sty text-blog-head">2 Blog</p>
                     <p className="m-4 font-sty">Blog : Welcome to my blog for food lovers! This is a place where you can come to explore your passion for food, discover new recipes, and share your experiences with other like-minded individuals. Whether youre a seasoned chef or just starting out in the kitchen, this blog is sure to inspire and delight your taste buds.</p>
                     <p className="m-4 font-sty">At the heart of this blog is a deep love for all things culinary. From classic comfort foods to exotic delicacies, we celebrate the diversity of cuisines from around the world. We believe that food is not just nourishment for the body, but also for the soul. It brings people together, fosters connections, and creates memories that last a lifetime.</p>
                     <p className="m-4 font-sty">On this blog, you will find a wide range of articles, recipes, and tips to help you on your culinary journey. From step-by-step instructions for creating your favorite dishes to in-depth explorations of different cuisines, we have something for everyone. Our writers are passionate foodies who love to share their knowledge and experiences with others.</p>
                     <p className="m-4 font-sty">So whether you are looking for a quick and easy weeknight dinner recipe or want to impress your dinner guests with an elaborate multi-course meal, you will find plenty of inspiration here. We hope that our blog will become your go-to source for all things food-related, and that you will join us in celebrating the joy of cooking and eating.</p>
                  </>
                }></Route>
                <Route exact path='moreitem/3' element={
                  <>
                     <Moreitem></Moreitem>
                     <p className="m-4 font-sty text-blog-head">3 Blog</p>
                     <p className="m-4 font-sty">Blog : Welcome to my food blog, a place for food lovers and cooking enthusiasts alike to come together and share their passion for all things culinary. Whether youre a beginner or an experienced cook, this blog is a space for you to explore and experiment with new recipes, learn cooking techniques, and discover the latest food trends.Our mission is to inspire and empower our readers to create delicious, nutritious, and visually stunning meals in their own kitchens. We believe that cooking and eating are not just basic human necessities, but also a way to express creativity, connect with others, and enjoy the simple pleasures of life.</p>
                     <p className="m-4 font-sty">In this blog, you will find a diverse array of content, ranging from traditional family recipes passed down through generations, to modern fusion cuisine that reflects the ever-changing culinary landscape. Our writers and contributors are passionate foodies, chefs, and culinary experts who bring a wealth of knowledge and experience to our community.From appetizers to desserts, vegan to gluten-free, we cover a wide range of topics and cuisines to cater to different tastes and dietary needs. We also offer cooking tips and techniques, food hacks, and product reviews to help you improve your skills and elevate your cooking game.</p>
                     <p className="m-4 font-sty">So whether you are looking for inspiration for your next meal, want to learn new cooking techniques, or simply love to talk about food, we invite you to join our community of food lovers and embark on a delicious journey with us.</p>
                  </>
                }></Route>
  
                <Route exact path="/"  element={
                  <>
                    <Header title="Food & Food" img="home-baner.jpg"></Header>
                    <Home></Home>
                  </>}> 
                </Route>
    
                <Route exact path="*"  element={
                  <>
                    <Error></Error>
                  </>}> 
                </Route>
    
            </Routes>
            <Footer></Footer>
          </Router>
        </div>
      );
  }
}

export default App;