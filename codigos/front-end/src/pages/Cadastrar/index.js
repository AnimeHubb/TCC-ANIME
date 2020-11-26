import React,{useState} from 'react';
import logo from './logo.jpg';
import './login.css';
import Img from 'react-image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Cadastrar() {
    const SalvarClick = ()  => {
        toast.success('Use mascara😷')
    }
 



    return (


    <form id='register'>
        <div className='container'>
             <img src={logo} className="imagem"  width='300px'  alt="logo"/>
             <div className='primeira-coluna'>
                 <h2 className='titulo'> Criar conta</h2>
                 
                 <div className='form'>
                     <input type='email' Name='email' size='40' id='email' placeholder='Email'></input>
                     <br></br>

                     <input type='text' class='number' size='40' id='name' placeholder='CPF'></input>

                     <br></br>
                     <input type='text' class="number" size="40" id='name'placeholder='Telefone'></input>
                     <br></br>
                     <input type='password' class="password" size="40" id='password' placeholder='Senha'></input>
                     <br></br>
                     <input type='password' class="passconfirmation" size="40" id='passconfirmation' placeholder='Confirmar senha'></input>

                     <button  class="button" id="Login"><a href="../Principal/index.js" onClick={SalvarClick}><h5>Criar conta</h5></a></button>

                     

                     <ul>
                         <li className='crie'><a href='../Login/index.js'><h7>Já tem sua conta</h7></a></li>
                     </ul>
                 </div>
            </div>

            <ToastContainer />
       </div>
       </form>
    )
}