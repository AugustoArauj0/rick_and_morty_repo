import Card from '../Card/Card';
import { CardsContaniner } from './styledComponents';

export default function Cards(props) {
   const { characters, onClose } = props;
   return <CardsContaniner>
      {
         characters.map((element) =>{
            const { id, name, species, gender, image} = element;
            return <Card
               name = {name}
               species = {species}
               gender = {gender}
               image = {image}
               onClose = {onClose}
               id = {id}
            />
         })
      }
   </CardsContaniner>;
}
