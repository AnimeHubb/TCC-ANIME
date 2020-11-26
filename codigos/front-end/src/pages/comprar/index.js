import React from 'react';


import logo from './logo.jpg';
import Beyblade from './gt.jpg';
import dragon from './dragon.jpg';
import carrinho from './carrinho.png';
import Home from './Home.png';
import Login from './Login.png';
import logobranca from './Logobranca.png';
import nogame from './nogame.jpg';

import rezero from './Rezero.png';
import slime from './slime.jpg';
import superonze from './super onze.png';
import hunter from './hunter.jpg';
import './comprar.css';



export default function compra() {
    return (
    <div className='master'>
         <div className='principal'>

     <div className='logo'> <img src={logobranca} height='100px' /></div>
     <div className='inicio'><input type='search' name='busca' placeholder='O  que você procura?'></input></div>
     <div className='home'><a href='../Principal/index.js'><img src={Home} height='20px'/></a></div>
     <div className='carrinho'><a href='../comprar/index.js'><img src={carrinho}  height='20px'/></a><p>carrinho</p></div>
     <div className='entre'><a href='#'><img src={Login}  height='20px'/></a><p>Entre</p></div>

    </div>
    <div className='carrosel'>
          <div className='box'>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={hunter} class="d-block w-100" alt="..."/>
              </div>
              
              <div class="carousel-item">
                <img src={slime}  class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={nogame} class="d-block w-100" alt="..."/>
              </div>


            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          </div>

          </div>

          <div className='comprass'>
              <div className='mangas1'></div>
              <div className='titulos'><h2>MANGÁS</h2></div>
              <div className='mangas2'></div>
          </div>

          <div className='comprei'>
              <div className='bn1'>
                  <div className='b1'></div>
                  <div className='a1'><h4>Another vl.5<br></br>R$5,00</h4> </div>
                  <button className='c1'>Comprar</button>
              </div>
              <div className='bn2'><div className='b2'></div>
                  <div className='a2'><h4>Black Clover vl.10<br></br>R$9,00</h4> </div>
                  <button className='c2'>Comprar</button></div>
                  
              <div className='bn3'><div className='b3'></div>
                  <div className='a3'><h4>Nanatsu vl.3<br></br>R$9,00</h4> </div>
                  <button className='c3'>Comprar</button></div>


              <div className='bn4'><div className='b4'></div>
                  <div className='a4'><h4>Re zero<br></br>R$5,00</h4> </div>
                  <button className='c4'>Compraro</button></div>
              
          </div>

          <div className='comprei22'>
          <div className='bn11'><div className='b11'></div>
                  <div className='a11'><h4>DXD<br></br>R$5,00</h4> </div>
                  <button className='c11'>Comprar</button></div>

          
              <div className='bn22'><div className='b22'></div>
                  <div className='a22'><h4>Never Land <br></br>R$2,00</h4> </div>
                  <button className='c22'>Comprar</button></div>


              <div className='bn33'><div className='b33'></div>
                  <div className='a33'><h4>One piece<br></br>R$5,00</h4> </div>
                  <button className='c33'>Comprar</button></div>


              <div className='bn44'><div className='b44'></div>
                  <div className='a44'><h4>Monster<br></br>R$10,00</h4> </div>
                  <button className='c44'>Comprar'</button></div>
              
          </div>

          <div className='cabeca1'>
          <img className='logoo' src={logo}  height='50px'/>
          <div className='atendimento'>Atendimento
            <p> Telefone:  957210878</p>
          </div>
          <div className='Pagamento'>Pagamento

              <p>Paypal</p>

              <p>Boleto</p>
              <p>Pagseguro</p>
           </div>
           <div className='nossas'>Nossas redes
               <p>Facebook</p>
              <p>Twiter</p>
              <p>Youtube</p>
              <p>Discord</p>

     </div>

        </div>



    </div>
    )
}
