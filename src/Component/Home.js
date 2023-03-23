import React,{useState} from 'react';

function Home(props) {
    const [SubscribeBtn,SubscribeHandle] = useState("UnSubscribe");
    const [item,Setitem] = useState(0);
    
    return (
            <div>
             
                <div className="Cont-main">
                    <p className="c_m_p_s1">Try Our Best One Food</p>
                    <div className="main-sec1">
                        <p className="main_sec1_p1">Chienese Food</p>
                        <p className="main_sec1_p2"> try it, now!</p>
                        <img className="main-sec-img" src="./img/chienese.jpg" alt='' ></img>
                    </div>
                    <div className="main-sec1">
                        <p className="main_sec1_p1">Gujrati Food</p>
                        <p className="main_sec1_p2">order Today</p>
                        <img className="main-sec-img" src="./img/gujrati.jpg" alt='' ></img>
                    </div>
                    <div className="main-sec1">
                        <p className="main_sec1_p1">Panjabi Food</p>
                        <p className="main_sec1_p2"> Test at once</p>
                        <img className="main-sec-img" src="./img/pnjabi.jpg" alt='' ></img>
                    </div>
                    <div className="main-sec1">
                        <p className="main_sec1_p1">Marathi Food</p>
                        <p className="main_sec1_p2"> it,s Amazing</p>
                        <img className="main-sec-img" src="./img/marathi.jpg" alt='' ></img>
                    </div>
                    <div className="main-sec1">
                        <p className="main_sec1_p1">Tamil Food</p>
                        <p className="main_sec1_p2"> it,s Great</p>
                        <img className="main-sec-img" src="./img/tamil.jpg" alt='' ></img>
                    </div>
                </div>

                <p className="c_m_p_s2">Order or Book Food</p>
                <div className="main_sec2">
                    <div className="sec2_p1">
                        <p className="sec2_p1_c1">Book Order, Now</p>
                        <div className="sec2_p1_c2">
                            Search : <input type="text" name="food" className="foodsearch" placeholder="Find Your Food..."></input>
                            <img className="sec2_p1_img" src="./img/fruit.jpg" alt=''></img>
                            <p>Fruit Dish</p>
                            <img className="sec2_p1_img" src="./img/khichadi.jpg" alt=''></img>
                            <p>Khichdi Special</p>
                            <img className="sec2_p1_img" src="./img/pizza.jpg" alt=''></img>
                            <p>Pizza</p>
                            <img className="sec2_p1_img" src="./img/icecream.jpg" alt=''></img>
                            <p>Ice-Cream</p>
                        </div>
                    </div>
                    <div className="sec2_p2">
                        <p className="sec2_p2_c1">Restuarnt More Branch</p>
                        <form className="form_s2">
                            Country : <select className="search_p2" placeholder="Country Name">
                                <option>India</option>
                                <option>Canada</option>
                                <option>Ausraliya</option>
                                <option>German</option>
                            </select><br></br>
                            State &nbsp;&nbsp;&nbsp;&nbsp; : <input type="text" className="search_p2" placeholder="State Name"></input><br></br>
                            City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <input type="text" className="search_p2" placeholder="City Name"></input><br></br>
                        </form>
                        <div className="sec2_p2_c2">
                            <p className="sec2_p2_c2_p">Details Of Offers</p>
                            <div className="main-sec2">
                                <p className="main_sec1_p1">Full Thali</p>
                                <p className="main_sec1_p2">Dinner : $200</p>
                                <p className="main_sec1_p2">Lunch : $150</p>
                            </div>
                            <div className="main-sec2">
                                <p className="main_sec1_p1">Pizza Dile</p>
                                <p className="main_sec1_p2">Lunch : $200</p>
                                <p className="main_sec1_p2">Dinner : $220</p>
                            </div>
                            <div className="main-sec2">
                                <p className="main_sec1_p1">Dosha Dish</p>
                                <p className="main_sec1_p2">Lunch : $130</p>
                                <p className="main_sec1_p2">Dinner : $190</p>
                            </div>
                            <div className="main-sec2">
                                <p className="main_sec1_p1">Gujrati Khana</p>
                                <p className="main_sec1_p2">Lunch : $350</p>
                                <p className="main_sec1_p2">Dinner : $400</p>
                            </div>
                            <div className="main-sec2">
                                <p className="main_sec1_p1">Chicken Dish</p>
                                <p className="main_sec1_p2">Lunch : $30</p>
                                <p className="main_sec1_p2">Dinner : $90</p>
                            </div>
                            <div className="main-sec2">
                                <p className="main_sec1_p1">Rajwadi masala</p>
                                <p className="main_sec1_p2">Lunch : $650</p>
                                <p className="main_sec1_p2">Dinner : $700</p>
                            </div>
                        </div>
                        <div className="sec2_p2_c3">
                            <p className="sec2_p2_c2_p">Restuarnt Benifits</p>
                            <div className="sec_p2_C3_F1">
                                <ol>
                                    <li>Teasty and Healthy food</li>
                                    <li>Easy Payment Method</li>
                                    <li>Comfartability</li>
                                    <li>Fresh food serve</li>
                                    <li>unlimited offer access alltime</li>
                                </ol>
                            </div>
                        </div>
                        <div className="sec2_p2_c4">
                            <p className="sec2_p2_c2_p" onClick={()=>{Setitem(!item)}}>Timing open & close</p>
                              {item ?
                                <>
                                    <p className="sec_p2_C3_F1">Open Morning Time : 10:00 AM</p>
                                </> : 
                                <>
                                    <p className="sec_p2_C3_F1">Close Night Time : 11:45 PM</p>
                                </>}
                            <button className="btnset" onClick={()=>{SubscribeHandle("Subscribe")}}>{SubscribeBtn}</button>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Home;