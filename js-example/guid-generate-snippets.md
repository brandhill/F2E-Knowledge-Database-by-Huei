
normal case in generating guid

```javascript

function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

function guid() {
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

//
// return
//
// 1f87946d-8117-7419-1077-5e76894d7b83
// 47eb8f7b-8ea8-cda9-f3cf-03c69c01646e
// bb2d830d-771d-5187-765d-baf8c0f81a19
// 0847db2e-d0bc-7858-3b8b-3e397333dcac
// 714ab091-3d87-f262-1649-f43ec3b4574d
// a5be9755-186b-17bd-706c-938a4ca22085
//

```
