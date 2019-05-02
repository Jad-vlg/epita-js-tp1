import { getState, setState } from "../store";

/* FIXED:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const remove = (i) => {
    const tmp = getState();
    if (i >= tmp.length)
        return null;
    else if (i < 0)
        return null;
    else {
        tmp.splice(i, 1);
        setState(tmp);
    }
};

export default remove;
