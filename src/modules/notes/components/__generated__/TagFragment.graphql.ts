/**
 * @generated SignedSource<<de9195cd5e3499fcd7b64c51baac91f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TagFragment$data = {
  readonly id: string;
  readonly prettyName: string;
  readonly " $fragmentType": "TagFragment";
};
export type TagFragment$key = {
  readonly " $data"?: TagFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TagFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TagFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "prettyName",
      "storageKey": null
    }
  ],
  "type": "Tag",
  "abstractKey": null
};

(node as any).hash = "4720be8087f622cdf0192395cd74b4b6";

export default node;
