document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const menuJoinPanel = document.getElementById('menuJoinPanel');
    const productsContainer = document.getElementById('products-container');
    const productTypeSelect = document.getElementById('productType');

    loginButton.addEventListener('click', function (event) {
        event.stopPropagation();
        menuJoinPanel.classList.toggle('show');
    });

    window.addEventListener('click', function () {
        if (menuJoinPanel.classList.contains('show')) {
            menuJoinPanel.classList.remove('show');
        }
    });

    const products = [
        {
            type: "tea",
            name: "Лун Цзин, 50г",
            description: "Один из самых узнаваемых сортов китайского чая. \n Его вкус запоминается на всю жизнь: ореховый, с нотами моря и тыквенных семечек, объёмный и глубокий.",
            image: "/img/IMG.jpg",
            backgroundColor: "#D8BFD8",
            buttonColor:"#D8BFD8",
            borderColor: "#D585FD" 
        },
        {
            type: "tea",
            name: "«Королевский Эрл Грей» пакетированный чай",
            description: "Черный чай с бергамотом — это классика вкуса, уже ставшая традицией. Такой напиток известен уже более ста лет и является излюбленным сортом чая у англичан.",
            image: "/img/IMG1.jpg",
            backgroundColor: "#B0E0E6",
            buttonColor:"#B0E0E6",
            borderColor: "#0C7D78"
        },
        {
            type: "coffee",
            name: "Шоколад Марагоджип",
            description: "Густой напиток на основе сорта марагоджип с меньшим содержанием кофеина, чем традиционная арабика. Сочетает в себе оттенки кофе и темного шоколада.",
            image: "/img/IMG2.jpg",
            backgroundColor: "#FFFACD",
            buttonColor:"#FFFACD",
            borderColor: "#717722"
        }
    ];

    function createCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.backgroundColor = product.backgroundColor;
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="info-bloc">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <button style="background-color: ${product.buttonColor}; border: 1px solid ${product.borderColor};">Подробнее</button>
            </div>
        </div>
        `;
        return card;
    }

    function displayProducts(filteredProducts) {
        productsContainer.innerHTML = '';
        filteredProducts.forEach(product => {
            productsContainer.appendChild(createCard(product));
        });
    }

    function filterProducts(type) {
        const filteredProducts = type === 'all' ? products : products.filter(p => p.type === type);
        displayProducts(filteredProducts);
    }

    productTypeSelect.addEventListener('change', function () {
        const selectedType = this.value;
        filterProducts(selectedType);
    });

    // Инициализация отображения продуктов при загрузке
    displayProducts(products);


});
