import { useRef } from 'react';
import type { DependencyList } from 'react';

const depsAreSame = (oldDeps: DependencyList, deps: DependencyList): boolean => {
  if (oldDeps === deps) return true;
  for (let index = 0; index < oldDeps.length; index++) {
    // 判断两个值是否是一个值
    if (Object.is(oldDeps[index], deps[index])) return false;
  }
  return true;
};

const useCreation = <T>(fn: () => T, deps: DependencyList): T => {
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initiallized: false
  });
  if (current.initiallized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = fn();
    current.initiallized = true;
  }
  return current.obj as T;
};

export default useCreation;