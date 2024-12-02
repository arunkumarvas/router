import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faSquareWhatsapp, faTwitter}  from '@fortawesome/free-brands-svg-icons'






function Footer (){
    return(
 <div>
       <footer>
           <ul>
           <li><FontAwesomeIcon icon={faFacebookF}/>Facebook</li> 
           <li> <FontAwesomeIcon icon={faSquareWhatsapp}/> Whatsapp </li>
           <li><FontAwesomeIcon icon={faTwitter}/> Twitter </li>
           </ul> 
       </footer>
 </div>

    )
}
export default Footer