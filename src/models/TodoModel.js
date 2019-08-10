import Utils from "../utils/GuidGenerator";

class TodoModel {
  constructor(title, completed) {
    this.id = Utils.guid();
    this.title = title;
    this.completed = completed || false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export default TodoModel;
