import PageAbout from '@/components/page/PageAbout';
import getTarget from '@/context/targetBranch';

export default async function About({ params }: { params: { city: string } }) {
  const target = getTarget(params.city);
  return <PageAbout branch={target} />;
}
