import { getState, setState } from "../store";

/* FIXED:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

const update = (url, i) => {
    const updateArray = getState();
    updateArray[i] = url;
    setState(updateArray);
};

export default update;
