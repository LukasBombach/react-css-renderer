import ReactReconciler from "react-reconciler";
import type { Component, VFC, CSSProperties } from "react";

let reconciler = ReactReconciler<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>({
  now: Date.now,
  noTimeout: -1,
  isPrimaryRenderer: false,
  supportsHydration: false,
  supportsPersistence: false,
  supportsMutation: true,

  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    const css = {
      [type]: props,
    };
    console.log("css", css);
    return css;
  },
  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    console.log("text", text);
    return text;
  },

  appendChildToContainer(container, child) {
    container["& >"] = container["& >"] || [];
    container["& >"].push(child);
  },
  appendChild(parent, child) {
    parent["& >"] = parent["& >"] || [];
    parent["& >"].push(child);
  },
  appendInitialChild(parent, child) {
    parent["& >"] = parent["& >"] || [];
    parent["& >"].push(child);
  },

  removeChildFromContainer(container, child) {
    container["& >"] = container["& >"] || [];
    container["& >"].splice(container["& >"].indexOf(child), 1);
  },
  removeChild(parent, child) {
    parent["& >"] = parent["& >"] || [];
    parent["& >"].splice(parent["& >"].indexOf(child), 1);
  },
  insertInContainerBefore(container, child, before) {
    container["& >"] = container["& >"] || [];
    container["& >"].splice(container["& >"].indexOf(before), 0, child);
  },
  insertBefore(parent, child, before) {
    parent["& >"] = parent["& >"] || [];
    parent["& >"].splice(parent["& >"].indexOf(before), 0, child);
  },

  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) {
    return newProps;
  },
  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork
  ) {
    Object.assign(instance, updatePayload);
  },

  finalizeInitialChildren() {
    return false;
  },
  getChildHostContext() {},
  getPublicInstance() {},
  getRootHostContext() {},
  prepareForCommit() {
    return null;
  },
  resetAfterCommit() {},
  shouldSetTextContent() {
    return false;
  },
  preparePortalMount() {},
  scheduleTimeout() {},
  cancelTimeout() {},
  clearContainer() {},
});

let ReactCss = {
  render(component: VFC, initialObj: CSSProperties) {
    let container = reconciler.createContainer(initialObj, 0, false, null);
    reconciler.updateContainer(component, container, null, () => {});
  },
};

export default ReactCss;
