let val;
val = document.querySelectorAll(".item").length;
console.log(`Number of categories: ` + val);

document.querySelectorAll(".item").forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent;

    const itemCount = category.querySelectorAll("ul li").length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${itemCount}`);
});




