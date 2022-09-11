/**
 * @generated SignedSource<<b60f3eb3f2d20a7c351232320fafcac8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MapQuery$variables = {
  tag?: string | null;
};
export type MapQuery$data = {
  readonly notes: ReadonlyArray<{
    readonly tags: ReadonlyArray<{
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"TagFragment">;
    }>;
    readonly title: string;
  }>;
  readonly tags: ReadonlyArray<{
    readonly id: string;
    readonly noteCount: number;
    readonly prettyName: string;
    readonly vaultLinkCount: number;
    readonly " $fragmentSpreads": FragmentRefs<"TagFragment">;
  }>;
  readonly vaultLinks: ReadonlyArray<{
    readonly comment: string | null;
    readonly link: string;
    readonly name: string;
  }>;
};
export type MapQuery = {
  response: MapQuery$data;
  variables: MapQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "tag"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "prettyName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "noteCount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vaultLinkCount",
  "storageKey": null
},
v5 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "TagFragment"
},
v6 = [
  {
    "kind": "Variable",
    "name": "tag",
    "variableName": "tag"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": (v6/*: any*/),
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MapQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tags",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "notes",
        "plural": true,
        "selections": [
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Tag",
            "kind": "LinkedField",
            "name": "tags",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v8/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MapQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tags",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "notes",
        "plural": true,
        "selections": [
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Tag",
            "kind": "LinkedField",
            "name": "tags",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v8/*: any*/)
    ]
  },
  "params": {
    "cacheID": "691fbf8e56e85d8f90be61178b380c71",
    "id": null,
    "metadata": {},
    "name": "MapQuery",
    "operationKind": "query",
    "text": "query MapQuery(\n  $tag: String\n) {\n  tags {\n    id\n    prettyName\n    noteCount\n    vaultLinkCount\n    ...TagFragment\n  }\n  notes(tag: $tag) {\n    title\n    tags {\n      id\n      ...TagFragment\n    }\n  }\n  vaultLinks(tag: $tag) {\n    name\n    link\n    comment\n  }\n}\n\nfragment TagFragment on Tag {\n  id\n  prettyName\n}\n"
  }
};
})();

(node as any).hash = "364a41d12d26e589a685cb515e3620ba";

export default node;
