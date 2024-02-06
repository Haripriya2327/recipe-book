import recipelist from "../data/recipe.json"
import '../App.css'
// import List from "./list";
   function ListItem(props) {

   

      return(
         <div className="recipe-card">
            <img className="recipe-image" src={props.recipe.image} alt={props.recipe.name} />
            <div className="recipe-details">
               <h2>{props.recipe.name}</h2>
               <p>Calories: {props.recipe.calories}</p>
               <p>Servings: {props.recipe.servings}</p>
            </div>
            <button className="deleteBtn" onClick={() => {props.func(props.recipe.id)}}> Delete </button>
         </div>
      );


   }


export default ListItem;
