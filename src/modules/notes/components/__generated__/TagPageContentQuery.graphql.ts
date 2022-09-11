/**
 * @generated SignedSource<<35295a7e3f51351641949d6fab2840dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TagPageContentQuery$variables = {
  id: string;
};
export type TagPageContentQuery$data = {
  readonly tag: {
    readonly noteCount: number;
    readonly notes: ReadonlyArray<{
      readonly title: string;
    }>;
    readonly prettyName: string;
    readonly vaultLinkCount: number;
    readonly vaultLinks: ReadonlyArray<{
      readonly link: string;
      readonly name: string;
      readonly tags: ReadonlyArray<{
        readonly " $fragmentSpreads": FragmentRefs<"TagsFragment">;
      }>;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"TagFragment">;
  };
};
export type TagPageContentQuery = {
  response: TagPageContentQuery$data;
  variables: TagPageContentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
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
  "concreteType": "Note",
  "kind": "LinkedField",
  "name": "notes",
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
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vaultLinkCount",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "link",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TagPageContentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tag",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TagFragment"
          },
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "VaultLink",
            "kind": "LinkedField",
            "name": "vaultLinks",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
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
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TagPageContentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tag",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v8/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "VaultLink",
            "kind": "LinkedField",
            "name": "vaultLinks",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Tag",
                "kind": "LinkedField",
                "name": "tags",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
                  (v2/*: any*/)
                ],
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
    "cacheID": "a1615d17925cd1e21e1859b94d0234d4",
    "id": null,
    "metadata": {},
    "name": "TagPageContentQuery",
    "operationKind": "query",
    "text": "query TagPageContentQuery(\n  $id: String!\n) {\n  tag(id: $id) {\n    prettyName\n    ...TagFragment\n    noteCount\n    notes {\n      title\n    }\n    vaultLinkCount\n    vaultLinks {\n      name\n      link\n      tags {\n        ...TagsFragment\n      }\n    }\n  }\n}\n\nfragment TagFragment on Tag {\n  id\n  prettyName\n}\n\nfragment TagsFragment on Tag {\n  id\n  ...TagFragment\n}\n"
  }
};
})();

(node as any).hash = "ef709bfd0b4771aa80bc339708132208";

export default node;
