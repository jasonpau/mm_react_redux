import React from 'react';
import './styles.css';
import GameArea from './game-area';

const App = () => {
    return (
        <div>
            <header>
                <div id="header-content">
                    <div id="menu-bar">
                        <a href="#">Settings</a>
                        <a href="about.html">About</a>
                    </div>
                    <h1>Empires at War</h1>
                </div>
                <div className="deco-left"> </div>
                <div className="deco-right"> </div>
            </header>
            <div id="wrapper">
                <section id="stats-area">
                    <div className="games-played">
                        <div className="label">Games Played:</div>
                        <div className="value">0</div>
                    </div>
                    <div className="attempts">
                        <div className="label">Attempts:</div>
                        <div className="value">0</div>
                    </div>
                    <div className="accuracy">
                        <div className="label">Accuracy:</div>
                        <div className="value">0%</div>
                    </div>
                    <button className="reset">Reset Game</button>
                </section>
                <GameArea/>
            </div>
        </div>
    )
};

export default App;



/*

 <div id="game-won-wrapper">
 <div id="game-won">
 <div id="exit-game-won">X</div>
 <h2>Victory!</h2>
 <button className="reset">Play Again</button>
 </div>
 </div>
 */

/*

 <audio id="click">
 <source src="/memory_match_react/app/components/audio/click.mp3" type="audio/mpeg" />
 </audio>
 <audio id="double_click">
 <source src="/memory_match_react/app/components/audio/double-click.mp3" type="audio/mpeg" />
 </audio>
 */


    /*
     <div className="card">
     <div className="front">
     <img src="images/card-front-02.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-01.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-03.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-04.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>

     <div className="card">
     <div className="front">
     <img src="images/card-front-04.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-03.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-05.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-05.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-06.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-06.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>

     <div className="card">
     <div className="front">
     <img src="images/card-front-07.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-07.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-08.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-08.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-09.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     <div className="card">
     <div className="front">
     <img src="images/card-front-09.png" alt="" />
     </div>
     <div className="back">
     <img src="images/card-back.png" alt="" />
     </div>
     </div>
     */