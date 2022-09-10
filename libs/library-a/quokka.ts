// uncomment the below to run with quokka
// ({
//   env: {
//     params: {
//       env: `TS_NODE_PROJECT=${process.env.NX_WORKSPACE_ROOT_PATH}/libs/library-a`,
//     },
//   },
// });

import * as a from '@test-quokka-workspace/library-b';

console.log(a.libraryB());
