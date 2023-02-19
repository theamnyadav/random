migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shaocatk7hm0jhl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qca85zgl",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yzm41yej",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shaocatk7hm0jhl")

  // remove
  collection.schema.removeField("qca85zgl")

  // remove
  collection.schema.removeField("yzm41yej")

  return dao.saveCollection(collection)
})
