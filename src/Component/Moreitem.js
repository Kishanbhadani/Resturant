import React from 'react';
import {Link} from 'react-router-dom';

function Moreitem(props) {

    return (
        <div>
        <div className="fluid-container">
            <h1 className="text-center p-3 family">Our all foods and blog with description</h1>
            <div className='blog'>
                <li className='blog-page'><Link >Blog</Link></li>
                <li className='blog-page'><Link to="/moreitem/1">page 1</Link></li><hr></hr>
                <li className='blog-page'><Link to="/moreitem/2">page 2</Link></li><hr></hr>
                <li className='blog-page'><Link to="/moreitem/3">page 3</Link></li><hr></hr>
            </div>

            <p className="m-4 font-sty">There are many delicious dishes from different cuisines  American, Indian, Mexican, Greek, Chinese, etc. Each has its tastes, peculiarities of cooking. But which country has the best food? The question “What is my favorite food?” may occur to students when they are assigned with essay writing on this topic. Hm… and indeed, what is that? Determining with the favorite food is half the battle. Now, you should start writing about it. It isn’t enough to state, “My favorite food is … I like it because of …”. The descriptive essay writing is meant to be another – describing food as concisely and vividly as possible. Describing your favorite food, don’t be afraid of touching on a taste receptor of the reader. So, in this article, you’ll be shown how to write a descriptive essay on “My Favorite Food”. Moreover, you are given an essay sample to show how it should be done in practice. Follow it and write your own essay!</p>
            <p className="m-4 font-sty">According to a survey, pasta is the worlds favorite food. Whats yours? Because of a huge variety of food today, it is really challenging to choose the most favorite food to describe in an essay.</p>
            <p className='m-4 font-sty'>In order to perform well in life, our body needs energy. We get this energy from the food we eat. Without food, there will be no life. In today’s world, there are so many dishes available worldwide. Food comes in a wide variety all around the world. Dosa, Paneer, Naan, Chapati, Biryani, and more Indian delicacies are available. We are also offered western cuisines such as noodles, pasta, burgers, fries, pizzas and more dominating the food industry</p>
            
        </div>
        </div>
    );
}

// function OtherBlog(){
//     const {id} = useParams();

//     if(id === 1){
//         return(
//             <>
//               <h1 className="m-4 font-sty">page 1</h1>
//               <h1 className="m-4 font-sty">hello</h1>
              
//             </>
//         )
//     }
//     else if(id === 2){
//         return(
//             <>
//             <h1 className="m-4 font-sty">page 2</h1>
//             <h1 className="m-4 font-sty">hello</h1>
//             </>
//         )
//     }
//     else if(id === 3){
//         return(
//             <>
//             <h1 className="m-4 font-sty">page 3</h1>
//             <h1 className="m-4 font-sty">hello</h1>
//             </>
//         )
//     }
// }

export default Moreitem;