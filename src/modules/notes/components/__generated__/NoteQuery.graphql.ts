/**
 * @generated SignedSource<<996a5a49166db0846e38b4fe8a2bcc3c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NoteQuery$variables = {
  id: string;
};
export type NoteQuery$data = {
  readonly note: {
    readonly content: string;
    readonly tags: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"TagsFragment">;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"NoteBacklinksFragment" | "NoteSimilarLinksFragment">;
  };
};
export type NoteQuery = {
  response: NoteQuery$data;
  variables: NoteQuery$variables;
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
  "name": "content",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = [
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NoteQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "note",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NoteBacklinksFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NoteSimilarLinksFragment"
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
    "name": "NoteQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Note",
        "kind": "LinkedField",
        "name": "note",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
                "concreteType": "Note",
                "kind": "LinkedField",
                "name": "notes",
                "plural": true,
                "selections": (v4/*: any*/),
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
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Note",
            "kind": "LinkedField",
            "name": "backlinks",
            "plural": true,
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "22b52f47bf445218d91d90bbec654939",
    "id": null,
    "metadata": {},
    "name": "NoteQuery",
    "operationKind": "query",
    "text": "query NoteQuery(\n  $id: String!\n) {\n  note(id: $id) {\n    content\n    tags {\n      ...TagsFragment\n    }\n    ...NoteBacklinksFragment\n    ...NoteSimilarLinksFragment\n  }\n}\n\nfragment NoteBacklinksFragment on Note {\n  backlinks {\n    title\n  }\n}\n\nfragment NoteSimilarLinksFragment on Note {\n  title\n  tags {\n    id\n    notes {\n      title\n    }\n    vaultLinks {\n      name\n      link\n      comment\n    }\n    ...TagFragment\n  }\n}\n\nfragment TagFragment on Tag {\n  id\n  prettyName\n}\n\nfragment TagsFragment on Tag {\n  id\n  ...TagFragment\n}\n"
  }
};
})();

(node as any).hash = "9a6ccc0ece797c62b76d94d066408743";

export default node;
