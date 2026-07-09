import { useSyncExternalStore } from 'react';

type EmbeddableHmrState = {
  isReloadScheduled: boolean;
  listeners: Set<() => void>;
  version: number;
};

declare global {
  var __embeddableHmrState__: EmbeddableHmrState | undefined;
}

const state =
  globalThis.__embeddableHmrState__ ??
  (globalThis.__embeddableHmrState__ = {
    isReloadScheduled: false,
    listeners: new Set<() => void>(),
    version: 0,
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

function scheduleEmbeddableReload() {
  if (state.isReloadScheduled) return;

  state.isReloadScheduled = true;

  queueMicrotask(() => {
    window.location.reload();
  });
}

if (import.meta.hot) {
  import.meta.hot.on('vite:afterUpdate', (payload) => {
    const hasEmbeddableUpdate = payload.updates.some((update) => {
      return isEmbeddablePath(update.path) || isEmbeddablePath(update.acceptedPath);
    });

    if (hasEmbeddableUpdate) {
      bumpEmbeddableHmrVersion();
      scheduleEmbeddableReload();
    }
  });
}

export function useEmbeddableHmrVersion() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
