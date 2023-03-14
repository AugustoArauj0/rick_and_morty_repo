import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
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
   </div>;
}
