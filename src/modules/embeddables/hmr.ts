import { useSyncExternalStore } from 'react';

let version = 0;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return version;
}

export function bumpEmbeddableHmrVersion() {
  version += 1;

  for (const listener of listeners) {
    listener();
  }
}

export function useEmbeddableHmrVersion() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
