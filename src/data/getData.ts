import { preDirections, preBrands, preContacts, preBranch } from '@/data/.';
import { IBranch, IBrand, IContact, IDirection } from '@/models';

interface IGetDataProps {
  page?: string;
  city?: string;
}
interface INone {
  city?: string;
}

export async function getData({
  page = 'none',
  city = '*',
}: IGetDataProps): any {
  const base =
    'https://script.google.com/macros/s/AKfycbypu3-sj7VlCJnixJyTxmdhBDdzo-9KWHzKKLYcRLlp_6HJ5aLkFCF3tEe6zgOfpGYb/exec';

  let url: string = page ? base + '?page=' + page : base;
  url = city ? url + '&city=' + city : url;

  try {
    const response = await fetch(url);

    const good = await response.json();

    // if (good) {
    return good;
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

// https://script.google.com/macros/s/AKfycbypu3-sj7VlCJnixJyTxmdhBDdzo-9KWHzKKLYcRLlp_6HJ5aLkFCF3tEe6zgOfpGYb/exec?page=Directions&city=*

// https://script.google.com/macros/s/AKfycbypu3-sj7VlCJnixJyTxmdhBDdzo-9KWHzKKLYcRLlp_6HJ5aLkFCF3tEe6zgOfpGYb/exec?page=Branches&city=*

// https://script.google.com/macros/s/AKfycbypu3-sj7VlCJnixJyTxmdhBDdzo-9KWHzKKLYcRLlp_6HJ5aLkFCF3tEe6zgOfpGYb/exec?page=Contacts&city=*

// https://script.google.com/macros/s/AKfycbypu3-sj7VlCJnixJyTxmdhBDdzo-9KWHzKKLYcRLlp_6HJ5aLkFCF3tEe6zgOfpGYb/exec?page=Brands&city=*
