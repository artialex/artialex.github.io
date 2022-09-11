/**
 * @generated SignedSource<<8132e654366ff87975a6d35b4893580c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AllTagsPageContentQuery$variables = {};
export type AllTagsPageContentQuery$data = {
  readonly tags: ReadonlyArray<{
    readonly id: string;
    readonly noteCount: number;
    readonly prettyName: string;
    readonly vaultLinkCount: number;
  }>;
};
export type AllTagsPageContentQuery = {
  response: AllTagsPageContentQuery$data;
  variables: AllTagsPageContentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "noteCount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "vaultLinkCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllTagsPageContentQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllTagsPageContentQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7e48de8426cb51999aa15afb57a9a094",
    "id": null,
    "metadata": {},
    "name": "AllTagsPageContentQuery",
    "operationKind": "query",
    "text": "query AllTagsPageContentQuery {\n  tags {\n    id\n    prettyName\n    noteCount\n    vaultLinkCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "add7497ce574121ca03f0b7eaa0b2cc3";

export default node;
