const Student = require("../app/student");
const assert = require("assert");

describe("Update Test", () => {
  let updater;

  beforeEach((done) => {
    updater = new Student({ name: "Updater", age: 99 });
    updater.save().then(() => done());
  });

  it("update username: Reader", (done) => {
    updater.set("name", "UpUpdater");
    updater
      .save()
      .then(() => Student.find({}))
      .then((students) => {
        assert(students[0].name !== "Updater");
        done();
      });
  });

  it("update age", (done) => {
    updater.set("age", 100);
    updater
      .save()
      .then(() => Student.find({ name: "Updater" }))
      .then((students) => {
        assert(students[0].age !== 99);
        assert(students[0].age === 100);
        done();
      });
  });
});
