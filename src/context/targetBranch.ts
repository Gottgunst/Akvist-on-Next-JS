

export default function getTarget(city=''){
  switch (city) {
    case 'krasnodar':
      return 'Краснодар';
      break;
    case 'stavropol':
      return 'Ставрополь';
      break;
    case 'pyatigorsk':
      return 'Пятигорск';
      break;
    default:
      return 'Ростов-на-Дону';
      break;
  }
}

export function getSlash(target=''){
    switch (target) {
      case 'Краснодар':
        return 'krasnodar';
        break;
      case 'Ставрополь':
        return 'stavropol';
        break;
      case 'Пятигорск':
        return 'pyatigorsk';
        break;
      default:
        return '';
        break;
    }
}


// https://stackoverflow.com/questions/65168343/how-to-handle-not-found-404-for-dynamic-routes-in-next-js-which-is-calling-api\

// export async function getServerSideProps (context) {
//   // this will be called server-side only
//   const pid = context.params.pid;

//   // connect to your db to check if it exists, make a webservice call...
//   if (!checkIfExists(pid)) {
//     return { notFound: true };
//     // this will display your /pages/404.js error page,
//     // in the current page, with the 404 http status code.
//   }
//   return {
//     props: {
//       pid,
//       // you may also add here the webservice content
//       // to generate your page and avoid a client-side webservice call
//     }
//   };
// };