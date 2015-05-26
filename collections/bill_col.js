Bills = new Mongo.Collection("bills");
Bills.attachSchema(new SimpleSchema({
  category: {
    type: String,
    label: "Category",
    max: 200
  },
  amount: {
    type: Number,
    label: "Spending",
    min: 0
  },
  billDate: {
    type: Date,
    label: "Last date this book was checked out",
    optional: true
  },
  remarks: {
    type: String,
    label: "Remarks",
    optional: true,
    max: 1000
  }
}));