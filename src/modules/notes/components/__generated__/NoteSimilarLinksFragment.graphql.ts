/**
 * @generated SignedSource<<374ebfd179bae8d99faf736536416ae8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NoteSimilarLinksFragment$data = {
  readonly tags: ReadonlyArray<{
    readonly id: string;
    readonly notes: ReadonlyArray<{
      readonly title: string;
    }>;
    readonly vaultLinks: ReadonlyArray<{
      readonly comment: string | null;
      readonly link: string;
      readonly name: string;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"TagFragment">;
  }>;
  readonly title: string;
  readonly " $fragmentType": "NoteSimilarLinksFragment";
};
export type NoteSimilarLinksFragment$key = {
  readonly " $data"?: NoteSimilarLinksFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NoteSimilarLinksFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NoteSimilarLinksFragment",
  "selections": [
    (v0/*: any*/),
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
          "alias": null,
          "args": null,
          "concreteType": "Note",
          "kind": "LinkedField",
          "name": "notes",
          "plural": true,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "VaultLink",
          "kind": "LinkedField",
          "name": "vaultLinks",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "link",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "comment",
              "storageKey": null
            }
          ],
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
})();

(node as any).hash = "e142af68d38db83a3253e3405d844fb4";

export default node;
