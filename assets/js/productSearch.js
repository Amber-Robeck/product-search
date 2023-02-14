const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

let products = [
    {
        name: "New product",
        id: 1
    },
    {
        name: "Old product",
        id: 2
    },
    {
        name: "This product",
        id: 3
    },
    {
        name: "That product",
        id: 4
    }
];

function findMatches(match, products) {
    return products.filter(product => {
        console.dir(product)
        const regex = new RegExp(match, 'gi');
        return product.name.match(regex);
    });
};

function displayMatches() {
    const matchArray = findMatches(this.value, products);
    // console.log(matchArray)
    const html = matchArray.map(product => {
        // console.log(product.name)
        const matchingName = product.name;
        const matchingId = product.id;
        return `
            <li>
                <span class="name">${matchingName} ${matchingId}</span>
                <span class="id">${matchingId}</span>
            </li>   
        `;
    }).join('');
    suggestions.innerHTML = html;
};

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);