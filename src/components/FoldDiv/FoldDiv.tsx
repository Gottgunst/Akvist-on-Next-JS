'use client';
import { useState } from 'react';
//################# LIBS ####################
import { motion } from 'framer-motion';

//################ LAYOUT ###################

//########### INTERFACE & STYLES ##############
import { IFoldDivProps } from '.';
import './Fold-Div.css';

export function FoldDiv({ title, children }: IFoldDivProps) {
  const [status, setStatus] = useState(false);

  const changeStatus = () => setStatus(!status);

  const variants = {
    open: {
      opacity: 1,
      height: 'auto',
      paddingTop: 10,
      paddingBottom: 10,
      // transition: 'easeIn',
    },
    close: {
      opacity: 0,
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      // transition: 'easeOut',
    },
  };

  return (
    <article className="fold-div">
      <h3 className="fold-div__title" onClick={changeStatus}>
        {title}
      </h3>
      <button className="fold-div__button" onClick={changeStatus}>
        <motion.svg
          animate={{
            rotate: status ? 45 : 0,
          }}
          role="presentation"
          focusable="false"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="none"
            stroke-width="2px"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="square"
          >
            <g
              transform="translate(1.000000, 1.000000)"
              stroke="var(--color__cross)"
            >
              <path d="M0,11 L22,11"></path>
              <path d="M11,0 L11,22"></path>
            </g>
          </g>
        </motion.svg>
      </button>
      <motion.div
        initial={'close'}
        animate={status ? 'open' : 'close'}
        variants={variants}
        className="section__text fold-div__content"
      >
        {children}
      </motion.div>
    </article>
  );
}

export default FoldDiv as unknown as (props: IFoldDivProps) => JSX.Element;
