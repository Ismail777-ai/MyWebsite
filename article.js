
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const articles = getArticles();

const article = articles.find(
    item => String(item.id) === id
);

const detail = document.getElementById("articleDetail");
const related = document.getElementById("relatedArticles");

if (article) {
    document.title = article.title + " | AdVision";

    const icon = document.createElement("div");
    icon.className = "article-big-icon";
    icon.textContent = article.icon;

    const category = document.createElement("span");
    category.className = "article-category";
    category.textContent = article.category;

    const title = document.createElement("h1");
    title.textContent = article.title;

    const description = document.createElement("p");
    description.className = "article-description";
    description.textContent = article.description;

    const content = document.createElement("div");
    content.className = "article-content";

    article.content.split(/\n+/).forEach(paragraph => {
        if (paragraph.trim()) {
            const p = document.createElement("p");
            p.textContent = paragraph;
            content.appendChild(p);
        }
    });

    detail.replaceChildren(icon, category, title, description, content);

    const similar = articles
        .filter(item =>
            item.id !== article.id &&
            item.category === article.category
        )
        .slice(0, 3);

    similar.forEach(item => {
        const card = document.createElement("article");
        card.className = "article-card";

        const heading = document.createElement("h3");
        heading.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        const link = document.createElement("a");
        link.className = "read-more";
        link.href = "article.html?id=" + encodeURIComponent(item.id);
        link.textContent = "O'qish →";

        card.append(heading, description, link);
        related.appendChild(card);
    });

} else {
    detail.textContent = "Kechirasiz, bunday maqola topilmadi.";

    const link = document.createElement("a");
    link.href = "index.html";
    link.textContent = "Bosh sahifaga qaytish";
    detail.appendChild(link);
}
