import type { MDXComponents } from 'mdx/types';
import './components/mdx/mdx.css';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    h2: ({ children }) => (
      <h2 className='mdx__h2 section__title'>{children}</h2>
    ),
    p: ({ children }) => <p className='mdx__p section__text'>{children}</p>,
    ul: ({ children }) => <ul className='mdx__ul'>{children}</ul>,
    li: ({ children }) => <li className='mdx__li'>{children}</li>,
  };
}
