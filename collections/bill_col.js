Bills = new Mongo.Collection("bills");

var schemas = {};

schemas.BillDetailSchema = new SimpleSchema({
  itemName: {
    type: String,
  },
  itemPrice: {
    type: Number,
    decimal: true
  }
});

schemas.Bills = new SimpleSchema({
  category: {
    type: String,
    label: "Category",
  },
  ownerId: {
    type: String,
    label: "id of the author"
  },
  title: {
    type: String,
    label: "title of the bill"
  },
  details: {
    type: [schemas.BillDetailSchema],
    label: "detail items of the bill"
  },
  createdAt: {
    type: Date,
    autoValue: function() {
        if (this.isInsert) {
          return new Date;
        } else if (this.isUpsert) {
          return {$setOnInsert: new Date};
        } else {
          this.unset();
        }
      },
    denyUpdate: true,
    optional: true // TODO: due to validation, need to set to optional,
                  // otherwise set the value during insertion
  },
});

Bills.attachSchema(schemas.Bills);