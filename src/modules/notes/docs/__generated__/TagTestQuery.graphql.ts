/**
 * @generated SignedSource<<66a10bc9d898ce02dd7aaeae75d2bf83>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TagTestQuery$variables = {};
export type TagTestQuery$data = {
  readonly tag: {
    readonly " $fragmentSpreads": FragmentRefs<"TagFragment">;
  };
};
export type TagTestQuery = {
  response: TagTestQuery$data;
  variables: TagTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "test-id"
  }
],
v1 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TagTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tag",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TagFragment"
          }
        ],
        "storageKey": "tag(id:\"test-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TagTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tag",
        "plural": false,
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
        "storageKey": "tag(id:\"test-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "e1aa26413269a9ce169b2ad12b57fd27",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "tag": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Tag"
        },
        "tag.id": (v1/*: any*/),
        "tag.prettyName": (v1/*: any*/)
      }
    },
    "name": "TagTestQuery",
    "operationKind": "query",
    "text": "query TagTestQuery {\n  tag(id: \"test-id\") {\n    ...TagFragment\n  }\n}\n\nfragment TagFragment on Tag {\n  id\n  prettyName\n}\n"
  }
};
})();

(node as any).hash = "a19a140d20a9b57c7ed2d2324870e6ad";

export default node;
