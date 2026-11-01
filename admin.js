
const form = document.getElementById("articleForm");

const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("category");
const iconInput = document.getElementById("icon");
const descriptionInput = document.getElementById("description");
const contentInput = document.getElementById("content");
const idInput = document.getElementById("articleId");

const list = document.getElementById("adminArticleList");
const message = document.getElementById("adminMessage");
const cancelButton = document.getElementById("cancelEdit");

let articles = getArticles();

// Statistikani yangilash

function updateStats() {
    document.getElementById("totalArticles").textContent =
        articles.length;

    document.getElementById("technologyCount").textContent =
        articles.filter(a => a.category === "Texnologiya").length;

    document.getElementById("businessCount").textContent =
        articles.filter(a => a.category === "Biznes").length;

    document.getElementById("internetCount").textContent =
        articles.filter(a => a.category === "Internet").length;
}

// Maqolalarni ko'rsatish

function renderAdminArticles() {
    list.innerHTML = "";

    articles.forEach(article => {
        const card = document.createElement("div");
        card.className = "admin-article";

        const info = document.createElement("div");

        const heading = document.createElement("h3");
        heading.textContent = article.icon + " " + article.title;

        const category = document.createElement("p");
        category.textContent = article.category;

        info.append(heading, category);

        const actions = document.createElement("div");
        actions.className = "admin-actions";

        const editButton = document.createElement("button");
        editButton.className = "edit-btn";
        editButton.textContent = "Tahrirlash";
        editButton.addEventListener("click", () => editArticle(article.id));

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "O'chirish";
        deleteButton.addEventListener("click", () => deleteArticle(article.id));

        actions.append(editButton, deleteButton);
        card.append(info, actions);

        list.appendChild(card);
    });

    updateStats();
}

// Yangi maqola qo'shish

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const articleData = {
        id: idInput.value
            ? Number(idInput.value)
            : Date.now(),

        title: titleInput.value.trim(),
        category: categoryInput.value,
        icon: iconInput.value.trim(),
        description: descriptionInput.value.trim(),
        content: contentInput.value.trim()
    };

    if (!articleData.title ||
        !articleData.description ||
        !articleData.content ||
        !articleData.icon) {

        message.textContent = "Barcha maydonlarni to'ldiring!";
        return;
    }

    if (idInput.value) {
        articles = articles.map(article =>
            article.id === articleData.id
                ? articleData
                : article
        );

        message.textContent = "Maqola muvaffaqiyatli yangilandi!";

    } else {
        articles.unshift(articleData);

        message.textContent = "Yangi maqola qo'shildi!";
    }

    saveArticles(articles);

    form.reset();
    idInput.value = "";

    document.getElementById("formTitle").textContent =
        "Yangi maqola qo'shish";

    cancelButton.hidden = true;

    renderAdminArticles();
});

// Maqolani tahrirlash

function editArticle(id) {
    const article = articles.find(item => item.id === id);

    if (!article) return;

    idInput.value = article.id;
    titleInput.value = article.title;
    categoryInput.value = article.category;
    iconInput.value = article.icon;
    descriptionInput.value = article.description;
    contentInput.value = article.content;

    document.getElementById("formTitle").textContent =
        "Maqolani tahrirlash";

    cancelButton.hidden = false;

    form.scrollIntoView({
        behavior: "smooth"
    });
}

// Tahrirlashni bekor qilish

cancelButton.addEventListener("click", function() {
    form.reset();
    idInput.value = "";

    document.getElementById("formTitle").textContent =
        "Yangi maqola qo'shish";

    cancelButton.hidden = true;
    message.textContent = "";
});

// Maqolani o'chirish

function deleteArticle(id) {
    const confirmDelete = confirm(
        "Ushbu maqolani o'chirishni xohlaysizmi?"
    );

    if (!confirmDelete) return;

    articles = articles.filter(article => article.id !== id);

    saveArticles(articles);

    message.textContent = "Maqola o'chirildi!";

    renderAdminArticles();
}

// Boshlanish

renderAdminArticles();
