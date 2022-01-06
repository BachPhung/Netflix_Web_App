import './Register.scss'
import { useState } from 'react'
import { Language } from '@material-ui/icons'
export const Register = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [click,setClick] = useState(false)
    const handleStart = () =>{
        if(email.length !==0 && email.includes('@')){
            setClick(true);
        }
    }
    const handleFinish = () =>{

    }
    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt="logo netflix"
                />
                <div className='right'>
                
                <select name='language' id='language'>
                        <option>English</option>
                        <option value="adventure">Soumi</option>
                        <option value="comedy">Svenska</option>
                    </select>
                <Language className='icon-l'/>
                <button className="loginButton">Sign In</button>
                </div>
                </div>
                <div className="container">
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>
                        Ready to watch? Enter your email to create or restart your membership
                    </h3>
                    {(!email || !click) ? 
                        <div className="input">
                            <input value={email} onChange={e=>setEmail(e.target.value)} type='email' placeholder='Email address'/>
                            <button onClick={handleStart} className="registerButton">Get Started</button>
                         </div>
                            :
                            <div className="input">
                            <input value={password} onChange={e=>setPassword(e.target.value)} type='password' placeholder='Password'/>
                            <button onClick={handleFinish} className="registerButton">Start</button>
                         </div>  
                    }
                    
                </div>
            </div>
        </div>
    )
}
