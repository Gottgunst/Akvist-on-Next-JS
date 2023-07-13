import TermsRostov from '@/data/terms.mdx';

export function PageTerms() {
  return (
    <>
      <div className='section'>
        <div className='header-compensation'></div>
      </div>

      <div className='section section_type_terms'>
        <TermsRostov />
      </div>
    </>
  );
}
export default PageTerms; // as unknown as (props: IPageTermsProps) => JSX.Element;
