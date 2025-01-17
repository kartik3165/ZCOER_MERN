async function xyz() {
    let a = await fetch('https://randomuser.me/api/');
    let b = await a.json()
    // document.write(b)
    console.log(b)
}

xyz()