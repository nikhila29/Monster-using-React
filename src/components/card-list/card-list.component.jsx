import './card-list.styles.css';
import Card from "../card/card.component";

import React from 'react';

const CardList = ({ monsters }) => (

  <div className='card-list'>
    {monsters.map((monster) => {

      return (
        <Card monster={monster}></Card>
      )
    })}
  </div>
);


// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className='card-list'>
//         {monsters.map((monster) => {
  
//           return (
//             <Card monster={monster}></Card>
//           )
//         })}
//       </div>

//     )
//   }
// }

export default CardList;


//return <h1 key={monster.id}>{monster.name}</h1>