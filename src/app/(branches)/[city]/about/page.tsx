import PageAbout from '@/components/Pages/PageAbout';
import getTarget from '@/context/targetBranch';

export default async function About({ params }: { params: { city: string } }) {
  const target = getTarget(params.city);
  return <PageAbout branch={target} />;
}
