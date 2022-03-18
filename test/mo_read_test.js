const Student = require("../app/student");
const assert = require("assert");

describe("Read Tests", () => {
  let reader;
  beforeEach((done) => {
    reader = Student({ name: "Reader", age: 99 });
    reader.save().then(() => {
      done();
    });
  });

  it("Read a user-name: Reader", (done) => {
    Student.find({ name: "Reader" }).then((students) => {
      // id is a BSON value
      assert(reader._id.toString() === students[0]._id.toString());
      done();
    });
  });

  it("read a user-age", (done) => {
    Student.find({ name: "Reader" }).then((students) => {
      assert(reader.age === students[0].age);
      done();
    });
  });
});
