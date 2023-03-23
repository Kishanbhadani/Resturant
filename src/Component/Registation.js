import React from 'react';

function Registation(props) {
    let msgclass = ["text-center"];
    if(props.type){
        msgclass.push("text-success")
    } else{
        msgclass.push("text-danger")
    }

        return(
            <div className='container card mt-3'>
               <h3 className='card p-3 mt-2 text-center text-primary'>Registation Form</h3>

               <p className={msgclass.join(" ")}>{props.message}</p>
               <form className='form-group form' onSubmit={props.submit}>
               <h2 className='p-3 text-center'>Registation Form</h2>

                    <label className='label-form'>Email:</label>
                    <input type="email" name='email' placeholder='Enter your email' required></input>
                    <br></br>

                    <label className='label-form'>Password:</label>
                    <input type="password" name='password' placeholder='Enter Password' required></input>
                    <br></br>

                    <label className='label-form'>Correct Password:</label>
                    <input type="password" name='correctPassword' placeholder='Enter repeat Password' required></input>
                    <br></br>

                    <button type='submit' className='btn' >Register</button>
                    </form>               
            </div>
        )
    }

export default Registation;