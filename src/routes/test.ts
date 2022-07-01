import vm2 from "vm2";

export async function get() {
  console.error({ vm2 });

  const nodeVm = new vm2.NodeVM();
  nodeVm.run('console.log("log from inside the vm")');

  return {
    status: 200,
    body: {
      message: "Hi!",
    },
  };
}
