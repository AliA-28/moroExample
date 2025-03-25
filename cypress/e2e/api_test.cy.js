import { TaskApiPage } from "../page-object/task_api";

describe("Create, update and delete created data", () => {
  let id;
  let text = "automatedTest";
  let changedText = "updated aut text";
  let response;
  let createResponse;
  const taskApi = new TaskApiPage();

  it("Get todos from API", async () => {
    response = await taskApi.getTasks();
    console.log(response);
  });

  it("Create task ", async () => {
    createResponse = await taskApi.createSpecificTask(text);
    id = createResponse.body.id;
    console.log(id);
    text = createResponse.body.text;
    console.log(text);
  });

  it("Update task ", async () => {
    taskApi.updateSpecificTask(id, changedText).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).property("text").to.equal(changedText);
    });
  });
  it("delete task ", async () => {
    taskApi.deleteSpecificTask(id).then((res) => {
      expect(res.status).to.eq(200);
      taskApi.getTasks().then((resp) => {
        const hasDeletedTask =
          Array.isArray(resp.body) && resp.body.some((task) => task.id === id);
        console.log(hasDeletedTask);
        expect(hasDeletedTask).to.be.false;
      });
    });
  });
});
