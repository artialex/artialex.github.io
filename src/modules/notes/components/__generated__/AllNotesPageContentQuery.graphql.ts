/**
 * @generated SignedSource<<2b937f95f77b4fb72482e2bd5a7e5fc1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AllNotesPageContentQuery$variables = {};
export type AllNotesPageContentQuery$data = {
  readonly notes: ReadonlyArray<{
    readonly tags: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"TagsFragment">;
    }>;
    readonly title: string;
  }>;
};
export type AllNotesPageContentQuery = {
  response: AllNotesPageContentQuery$data;
  variables: AllNotesPageContentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllNotesPageContentQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "notes",
        "plural": true,
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "TagsFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllNotesPageContentQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "notes",
        "plural": true,
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
                "kind": "ScalarField",
                "name": "prettyName",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b74431c6a45fdf623aeacee3b1d7bf31",
    "id": null,
    "metadata": {},
    "name": "AllNotesPageContentQuery",
    "operationKind": "query",
    "text": "query AllNotesPageContentQuery {\n  notes {\n    title\n    tags {\n      ...TagsFragment\n    }\n  }\n}\n\nfragment TagFragment on Tag {\n  id\n  prettyName\n}\n\nfragment TagsFragment on Tag {\n  id\n  ...TagFragment\n}\n"
  }
};
})();

(node as any).hash = "03df5180749088314f57a080eda964eb";

export default node;
