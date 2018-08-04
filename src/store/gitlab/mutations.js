/* eslint-disable no-console */
// const doesValueExist = (state, key) => {
//   if (state[key]) {
//     return true;
//   }
//   return false;
// };

// const updateValue = (state, key, value) => {
//   // Si le state est un array
//   if (Array.isArray(state[key])) {
//     // Si la value est un array
//     if (Array.isArray(value)) {
//       // Si le state est vide
//       if (state[key].length === 0) {
//         // On le set
//         state[key] = value;
//         console.log(`Setting value ${key}`);
//       } else {
//         // Sinon, pour chaque valeur
//         let i;
//         let trouve = false;
//         value.forEach((v) => {
//           console.log('Adding value', v);
//           i = 0;
//           while (i < state[key].length && !trouve) {
//             if (state[key][i] === v) {
//               state[key][i] = v;
//               console.log(`Setting value ${key}`);
//               trouve = true;
//             }
//             i += 1;
//           }
//           if (!trouve) {
//             state[key].push(v);
//             console.log(`Adding value ${key}`);
//           }
//         });
//       }
//       // Sinon (la value n'est pas un array)
//     } else {
//       // On l'ajoute
//       state[key].push(value);
//       console.log(`Adding value ${key}`);
//     }
//     // Sinon (le state n'est pas un array)
//   } else {
//     // On set la value
//     state[key] = value;
//     console.log(`Setting value ${key}`);
//   }
// };

export const types = {
  ADD_VALUE: 'ADD_VALUE',
};

export default {
  [types.ADD_VALUE](state, { key, value }) {
    if (state[key] !== undefined) {
      state[key] = value;
    }
  },
};
