import { preDirections, preBrands, preContacts, preBranch } from '@/data/.';
import { IBranch, IBrand, IContact, IDirection } from '@/models';

interface IGetDataProps {
  page?: string;
  city?: string;
}
interface INone {
  city?: string;
}

export async function getData({ page = 'none', city = '*' }: IGetDataProps) {
  const base =
    'https://script.google.com/macros/s/AKfycbzFH9ZmURjylhjtfrB995JlujlpHYlJSJuH69zqItGn9BdEgM7eV7AWo4x2hR_tOgR6/exec';

  const url: string = base + '?page=' + page + '&city=' + city;

  try {
    const response = await fetch(url);

    // const good = await response.json();

    // if (good) {
    return response.json();
    // } else {
    //   throw good;
    // }
  } catch (err) {
    console.error('#####');
    console.log(err);

    const reserve: IBranch[] | IBrand[] | IContact[] | IDirection[] | INone[] =
      {
        Directions: preDirections,
        Branches: preBranch,
        Contacts: preContacts,
        Brands: preBrands,
      }[page] || [{ city: 'none' }];

    return reserve.filter(
      (el: IBranch | IBrand | IContact | IDirection | INone) =>
        el.city === city || city === '*'
    );
  }

  // fetch(url)
  // .then((res) => {
  //   return res.json();
  // })
  // .catch((err) => {
  //   console.log(err);

  // const reserve:
  //   | IBranch[]
  //   | IBrand[]
  //   | IContact[]
  //   | IDirection[]
  //   | INone[] = {
  //   Directions: preDirections,
  //   Branches: preBranch,
  //   Contacts: preContacts,
  //   Brands: preBrands,
  // }[page] || [{ city: 'none' }];

  // return reserve.filter(
  //   (el: IBranch | IBrand | IContact | IDirection | INone) =>
  //     el.city === city || city === '*'
  // );
  // });
}

// https://script.google.com/macros/s/AKfycbzFH9ZmURjylhjtfrB995JlujlpHYlJSJuH69zqItGn9BdEgM7eV7AWo4x2hR_tOgR6/exec?page=Directions&city=*

// https://script.google.com/macros/s/AKfycbzFH9ZmURjylhjtfrB995JlujlpHYlJSJuH69zqItGn9BdEgM7eV7AWo4x2hR_tOgR6/exec?page=Branches&city=*

// https://script.google.com/macros/s/AKfycbzFH9ZmURjylhjtfrB995JlujlpHYlJSJuH69zqItGn9BdEgM7eV7AWo4x2hR_tOgR6/exec?page=Contacts&city=*

// https://script.google.com/macros/s/AKfycbzFH9ZmURjylhjtfrB995JlujlpHYlJSJuH69zqItGn9BdEgM7eV7AWo4x2hR_tOgR6/exec?page=Brands&city=*
