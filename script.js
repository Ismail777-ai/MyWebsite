
const grid = document.getElementById("articleGrid");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".category");
const emptyMessage = document.getElementById("emptyMessage");

let selectedCategory = "Barchasi";

function showArticles(list) {
    grid.innerHTML = "";

    emptyMessage.style.display =
        list.length === 0 ? "block" : "none";

    list.forEach(article => {
        const card = document.createElement("article");
        card.className = "article-card";

        const icon = document.createElement("div");
        icon.className = "article-icon";
        icon.textContent = article.icon;

        const category = document.createElement("span");
        category.className = "article-category";
        category.textContent = article.category;

        const title = document.createElement("h3");
        title.textContent = article.title;

        const description = document.createElement("p");
        description.textContent = article.description;

        const link = document.createElement("a");
        link.className = "read-more";
        link.textContent = "Maqolani o'qish →";
        link.href = "article.html?id=" +
            encodeURIComponent(article.id);

        card.append(icon, category, title, description, link);
        grid.appendChild(card);
    });
}

function filterArticles() {
    const query = search.value.toLowerCase().trim();

    const filtered = getArticles().filter(article => {
        const matchesCategory =
            selectedCategory === "Barchasi" ||
            article.category === selectedCategory;

        const matchesSearch =
            article.title.toLowerCase().includes(query) ||
            article.description.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    showArticles(filtered);
}

search.addEventListener("input", filterArticles);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(item => item.classList.remove("active"));

        button.classList.add("active");
        selectedCategory = button.dataset.category;

        filterArticles();
    });
});

showArticles(getArticles());
