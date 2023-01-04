import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, 
         faAnchor, 
        faRobot,
        faStarAndCrescent,
        faSatellite,
        faBicycle,
        faRainbow,
        faSprayCanSparkles,
        faDragon,
        faKiwiBird,
        faFeatherPointed,
        faGasPump,
        faMoon,
        faShieldDog,
        faMagicWandSparkles,
        faBridge,
        faDog,
        faTruckFast,
        faPuzzlePiece,
        faPeace,
        faJetFighter,
        faJedi,
        faCoffee,
        faRecordVinyl,
        faBowlingBall,
        faQuidditchBroomBall
        } from '@fortawesome/free-solid-svg-icons';


class Avatars extends React.Component {  
 
    render(){
        return(
            <div>
                <h4><FontAwesomeIcon icon={faAmbulance} color="green" /> Ambulance Icon</h4>
                <h4><FontAwesomeIcon icon={faAnchor} color="black" /> Anchor Icon</h4>
                <h4><FontAwesomeIcon icon={faRobot} color="grey"/> Robot Icon</h4>
                <h4><FontAwesomeIcon icon={faStarAndCrescent} />Star and Crescent</h4>
                <h4><FontAwesomeIcon icon={faSatellite} color="black" /> Satellite Icon</h4>
                <h4><FontAwesomeIcon icon={faShieldDog} color="blue" /> Shield Dog Icon</h4>
                <h4><FontAwesomeIcon icon={faBicycle} color="green" /> Bicycle Icon</h4>
                <h4><FontAwesomeIcon icon={faRainbow} color="blue" /> Rainbow Icon</h4>
                <h4><FontAwesomeIcon icon={faSprayCanSparkles} color="green" /> Spray Can Sparkles Icon</h4>
                <h4><FontAwesomeIcon icon={faDragon} color="orange" /> Dragon Icon</h4>
                <h4><FontAwesomeIcon icon={faGasPump} color="black" /> Gas Pump Icon</h4>
                <h4><FontAwesomeIcon icon={faMagicWandSparkles} color="blue" /> Magic Wand Icon</h4>
                <h4><FontAwesomeIcon icon={faMoon} color="grey" /> Moon Icon</h4>
                <h4><FontAwesomeIcon icon={faKiwiBird} color="green" /> Kiwi Bird Icon</h4>
                <h4><FontAwesomeIcon icon={faFeatherPointed} color="blue" /> Blue Feather Icon</h4>
                <h4><FontAwesomeIcon icon={faBridge} color="orange" /> Bridge Icon</h4>
                <h4><FontAwesomeIcon icon={faDog} color="black" /> Dog Icon</h4>
                <h4><FontAwesomeIcon icon={faTruckFast} color="blue" /> Truck Fast Icon</h4>
                <h4><FontAwesomeIcon icon={faPuzzlePiece} color="green" /> Puzzle Piece Icon</h4>
                <h4><FontAwesomeIcon icon={faPeace} color="red" /> Peace Icon</h4>
                <h4><FontAwesomeIcon icon={faJetFighter} color="blue" /> Jet Fighter Icon</h4>
                <h4><FontAwesomeIcon icon={faJedi} color="black" /> Jedi Icon</h4>
                <h4><FontAwesomeIcon icon={faCoffee} color="blue" /> Coffee Icon</h4>
                <h4><FontAwesomeIcon icon={faRecordVinyl} color="black" /> Vinyl Record Icon</h4>
                <h4><FontAwesomeIcon icon={faBowlingBall} color="green" /> Bowling Ball Icon</h4>
                <h4><FontAwesomeIcon icon={faQuidditchBroomBall} color="blue" /> Quidditch Icon</h4>
            </div>
        )
    }
     
}  
   
export default Avatars;