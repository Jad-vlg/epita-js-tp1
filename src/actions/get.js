import { getState } from "../store";

/* FIXED:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const get = (i) => {
    const picture = getState();
    if (i >= picture.length)
        return null;
    else if (i < 0)
        return null;
    else
        return picture[i];
};   

export default get;
