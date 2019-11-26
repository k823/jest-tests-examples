// Tutorial from LevelUpTuts

import { type } from "os";

export const hello = () => 'Hello';

export const add = (x, y) => {
    if(typeof x !== 'number' || typeof y !== 'number') {
        return null;
    }
    return x + y;
};


// Standard solution

// export const removeSNames = names => {
//     let newNames = names;
//     names.forEach(name => {
//         if(name.toLowerCase().charAt(0) == 's') {
//             const index = newNames.indexOf(name);
//             newNames.splice(index, 1);
//         };
//     });
//     return newNames;
// };


// Refactoring 

export const removeSNames = names => {
    return names.filter(name => name.toLowerCase().charAt(0) !== 's');
};

