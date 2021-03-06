import { getState, setState } from "../store";

/* FIXED:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

const add = (i) => {
    const newArray = [...getState(), i];
    setState(newArray);
};

export default add;
