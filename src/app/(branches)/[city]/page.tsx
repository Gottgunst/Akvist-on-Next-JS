import PageDirections from '@/components/Pages/PageDirections';
import getTarget from '@/context/targetBranch';

export default async function Home({ params }: { params: { city: string } }) {
  const target = getTarget(params.city);
  return <PageDirections branch={target} />;
}
