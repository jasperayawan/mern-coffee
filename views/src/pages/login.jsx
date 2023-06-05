import {useState} from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate()

    const registerUser = async(e) => {
        e.preventDefault();

            const loginUser = Axios.create({
                baseURL: 'http://localhost:8080',
                body: JSON.stringify({email,password}),
                method: 'POST'
            })

            try{
                const response = await loginUser.post('/login', {
                    email: email,
                    password: password 
                })

                if(response.status === 200){
                    Navigate('/')
                }
            }
            catch(err){
                console.log(err)
            }
    }

    return(
        <section className='flex h-screen w-full'>
            <div className='w-[600px] px-5 flex justify-center items-center h-full'>
                <form className='w-full' onSubmit={registerUser}>
                    <div className='flex flex-col gap-3'>
                        <div className='flex justify-center items-center'>
                           <h1 className='text-3xl font-bold'> Welcome back!</h1>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-stone-600 font-semibold'>Email</label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='ring-1 ring-stone-200 py-2 pl-2'
                                placeholder="username" required/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-stone-600 font-semibold'>Password</label>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='ring-1 ring-stone-200 py-2 pl-2'
                                placeholder="username" required/>
                        </div>
                        <div>
                            <button className='px-4 py-2 __registerSubmit text-white'>Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='__rghtSdFrRgstr w-full'>
                <h1>haha</h1>
            </div>
        </section>
    )
}