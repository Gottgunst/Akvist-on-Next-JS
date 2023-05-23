import { useContext, useEffect, useState } from 'react';
import { BranchContext } from '../../context';

interface IChangeCityProps {
  target: string
}

export function ChangeCity({target}:IChangeCityProps) {

  const {targetBranch, setTargetBranch} = useContext(BranchContext);

  useEffect(() => {

    setTargetBranch(target);

  },[setTargetBranch, target]);


  return (
    <>
    </>
  )
}
