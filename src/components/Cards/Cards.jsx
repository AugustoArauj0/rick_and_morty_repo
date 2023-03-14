import Card from '../Card/Card';
import { CardsContaniner } from './styledComponents';

export default function Cards(props) {
   const { characters } = props;
   return <CardsContaniner>
      {
         characters.map((element) =>{
            const { name, species, gender, image} = element;
            return <Card
               name = {name}
               species = {species}
               gender = {gender}
               image = {image}
               onClose = {() => window.alert('Emulamos que se cierra la card')}
            />
         })
      }
   </CardsContaniner>;
}
