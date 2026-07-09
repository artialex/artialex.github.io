import { useSyncExternalStore } from 'react';

type EmbeddableHmrState = {
  version: number;
  listeners: Set<() => void>;
};

declare global {
  var __embeddableHmrState__: EmbeddableHmrState | undefined;
}

const state =
  globalThis.__embeddableHmrState__ ??
  (globalThis.__embeddableHmrState__ = {
    version: 0,
    listeners: new Set<() => void>(),
  });

function subscribe(listener: () => void) {
  state.listeners.add(listener);

  return () => {
    state.listeners.delete(listener);
  };
}

function getSnapshot() {
  return state.version;
}

export function bumpEmbeddableHmrVersion() {
  state.version += 1;

  for (const listener of state.listeners) {
    listener();
  }
}

function isEmbeddablePath(path: string | undefined) {
  if (!path) return false;

  return path.includes('/src/modules/embeddables/') || path.includes('\\src\\modules\\embeddables\\');
}

if (import.meta.hot) {
  import.meta.hot.on('vite:afterUpdate', (payload) => {
    const hasEmbeddableUpdate = payload.updates.some((update) => {
      return isEmbeddablePath(update.path) || isEmbeddablePath(update.acceptedPath);
    });

    if (hasEmbeddableUpdate) {
      bumpEmbeddableHmrVersion();
    }
  });
}

export function useEmbeddableHmrVersion() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
