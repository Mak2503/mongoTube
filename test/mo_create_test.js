const Student = require("../app/student");
const assert = require("assert");

describe("Create Tests", () => {
  it("create a user in db", () => {
    // assert(false);
    const sam = new Student({ name: "Sam", age: 21 });
    sam
      .save()
      .then(() => {
        assert(!sam.isNew);
      })
      .catch(() => {
        console.log("error");
      });
  });
});
