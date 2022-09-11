/**
 * @generated SignedSource<<c1ae0ad4abb6fe11efd0f07f906777f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TagsFragment$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"TagFragment">;
  readonly " $fragmentType": "TagsFragment";
}>;
export type TagsFragment$key = ReadonlyArray<{
  readonly " $data"?: TagsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TagsFragment">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "TagsFragment",
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
  "type": "Tag",
  "abstractKey": null
};

(node as any).hash = "cfec0f9071c2c080416c1f12fdaa1b4f";

export default node;
