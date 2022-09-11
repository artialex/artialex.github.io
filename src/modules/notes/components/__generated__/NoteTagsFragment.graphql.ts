/**
 * @generated SignedSource<<fbfba9dc2cf9a59205a34d5b0384a914>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NoteTagsFragment$data = {
  readonly tags: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"TagFragment">;
  }>;
  readonly " $fragmentType": "NoteTagsFragment";
};
export type NoteTagsFragment$key = {
  readonly " $data"?: NoteTagsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NoteTagsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NoteTagsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Tag",
      "kind": "LinkedField",
      "name": "tags",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TagFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Note",
  "abstractKey": null
};

(node as any).hash = "d39132f24ab22a6364fcc040a9ee4f8e";

export default node;
