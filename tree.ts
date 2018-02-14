interface INode {    value: number,    // parent? : INode,    left? : INode,    right? : INode}
    //         10    //         / \    //        5   20    //       /\   /\    //      3  8 15 35    //     /\    //    2  4
function buildTree (): INode {    let root:INode = {value: 10};    let l31:INode = {value:2};    let l32:INode = {value:4};        let l21:INode = {value:3};    let l22:INode = {value:8};    let l23:INode = {value:15};    let l24:INode = {value:35};
    let l11:INode = {value:5};    let l12:INode = {value:20};
    l21.left=l31;    l21.right=l32;
    l11.left=l21;    l11.right=l22;
    l12.left=l23;    l12.right=l24;
    root.left=l11;    root.right=l12;        return root;}
function preOrder(root: INode, callback) {    if(root) {        callback(root);        preOrder(root.left, callback);        preOrder(root.right, callback);    }}console.log("========= start ==========")preOrder(buildTree(), (item)=>console.log(item.value));console.log("=========Done ==========")
