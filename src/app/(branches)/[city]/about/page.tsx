import PageAbout from '@/components/Pages/PageAbout';
import getTarget from '@/util/targetBranch';

export default async function About({ params }: { params: { city: string } }) {
  const target = getTarget(params.city);
  return <PageAbout branch={target} />;
}
