/**
 * @generated SignedSource<<cfc66de4b8aed7b6f789ee90073dd0ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type NoteListQuery$variables = {};
export type NoteListQuery$data = {
  readonly notes: ReadonlyArray<{
    readonly title: string;
  }>;
};
export type NoteListQuery = {
  response: NoteListQuery$data;
  variables: NoteListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NoteListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NoteListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c916ac6b738be0ed6774902f1c7d6e6d",
    "id": null,
    "metadata": {},
    "name": "NoteListQuery",
    "operationKind": "query",
    "text": "query NoteListQuery {\n  notes {\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "f8df108b4f580fe7107bc129be1ca56a";

export default node;
