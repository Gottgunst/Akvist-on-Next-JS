import { createContext } from 'react';

interface IContext {
  targetBranch?: any
  setTargetBranch?: any
}

export const BranchContext = createContext<IContext>({targetBranch:null});
