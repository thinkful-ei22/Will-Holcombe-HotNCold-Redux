import React from 'react';

export default function Nav(props){
  return (
    <nav> 
      <ul>
        <li><a href='#what' className='what' onClick={() => props.handleWhatInfo()}>What?</a></li>
        <li><a href='' className='new' onClick={() => props.newGame()}>+New Game</a></li>
        
      </ul>
    </nav>
  )
}













// import React from 'react';

// import './top-nav.css';

// export default function TopNav(props) {
//     function onClick(){
//         props.reset();
//     }
//     return (
//         <nav>
//             <ul className="clearfix">
//                 <li>
//                     <a className="what" href="#">
//                         What?
//                     </a>
//                 </li>
//                 <li>
//                     <a className="new" href="#" onClick={() =>onClick() }>
//                         + New Game
//                     </a>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// //props.onGenerateAuralUpdate()