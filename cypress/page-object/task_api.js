export class TaskApiPage {
  constructor() {
    this.URL = "http://localhost:8081/tasks/";
  }

  getTasks() {
    return cy.request({
      method: "GET",
      url: this.URL,
    });
  }

  createSpecificTask(text) {
    return cy.request({
      method: "POST",
      url: this.URL,
      body: {
        text: text,
      },
    });
  }

  updateSpecificTask(id, text) {
    return cy.request({
      method: "POST",
      url: this.URL + id,
      body: {
        id: id,
        text: text,
      },
    });
  }

  deleteSpecificTask(id) {
    return cy.request({
      method: "DELETE",
      url: this.URL + id,
      body: {
        id: id,
      },
    });
  }
}
