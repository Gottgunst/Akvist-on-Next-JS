// import { preDirections, preBrands, preContacts} from '@/data';
// import { IBranch, IBrand, IContact, IDirection } from '@/models';

interface IGetDataProps {
  page?: string
  city?: string
}

export async function getData({page, city}:IGetDataProps) {

  const base = 'https://script.google.com/macros/s/AKfycbypu3-sj7VlCJnixJyTxmdhBDdzo-9KWHzKKLYcRLlp_6HJ5aLkFCF3tEe6zgOfpGYb/exec';

  let url:string = page ?  base + '?page=' + page : base;
      url = city ?  url + '&city=' + city : url;

  const response = await fetch(url); 

  return response.json();
}
