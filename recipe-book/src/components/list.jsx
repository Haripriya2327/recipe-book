import recipe from '../data/recipe.json'
import ListItem from './listItem';
import { useState } from 'react';

export default function List() {
let [recipeToShow, updateRecipeList] = useState(recipe);
function deleteRecipe(id){
//    console.log(id)
const newRecipeList = recipeToShow.filter((recipeObj) => {
    return recipeObj.id !== id;
});
updateRecipeList(newRecipeList);

}
    return(<div className='recipe-list'>{recipeToShow.map((recipe) =>{
           return  <ListItem  key={recipe.id} recipe={recipe} func={deleteRecipe}/>           
        })}
    </div>)
}
