/**
 * @generated SignedSource<<7825bd88c559bd1428d0cfd37614645a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NoteBacklinksFragment$data = {
  readonly backlinks: ReadonlyArray<{
    readonly title: string;
  }>;
  readonly " $fragmentType": "NoteBacklinksFragment";
};
export type NoteBacklinksFragment$key = {
  readonly " $data"?: NoteBacklinksFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NoteBacklinksFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NoteBacklinksFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Note",
      "kind": "LinkedField",
      "name": "backlinks",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Note",
  "abstractKey": null
};

(node as any).hash = "64d2f9c894dbc427725484f9a2342aa0";

export default node;
