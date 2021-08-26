export class Component {
  parent = undefined;

  destroy() {}

  InitComponent() {}

  InitEntity() {}

  GetComponent(n) {
    return this.parent.GetComponent(n);
  }

  get Manager() {
    return this.parent.parent;
  }

  FindEntity(n) {
    return this.parent.FindEntity(n);
  }

  Broadcast(m) {
    this.parent.Broadcast(m);
  }

  Update(_) {}

  registerHandler(name, handler) {
    this.parent.registerHandler(name, handler);
  }
}
