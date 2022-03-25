
async function waitAndMaybeReject() {
    await new Promise((r) => setTimeout(r, 1000));
    throw Error("this is error");
}

//thua await
async function test1() {
    try {
        return await waitAndMaybeReject();
    } catch (error) {
        return "oh no!";
    }
}

//dung
async function test2() {
    try {
        return waitAndMaybeReject();
    } catch (error) {
        throw error;
    }
}

//thua await
async function test3() {
    return await waitAndMaybeReject();
}

//sai thieu async
function test4() {
    return waitAndMaybeReject();
}

const main = async () => {
    const value = await test4()
    console.log("value: ", value);

}
main();