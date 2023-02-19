migrate((db) => {
  const collection = new Collection({
    "id": "shaocatk7hm0jhl",
    "created": "2023-01-04 05:22:58.526Z",
    "updated": "2023-01-04 05:22:58.526Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ywk4mroh",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("shaocatk7hm0jhl");

  return dao.deleteCollection(collection);
})
