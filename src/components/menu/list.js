import entries from "../../assets/img/entradas@2x.png";
import meats from "../../assets/img/carnes@2x.png";
import fish from "../../assets/img/peixe@2x.png";
import pastas from "../../assets/img/massas@2x.png";
import omelets from "../../assets/img/omeletes@2x.png";
import pizzas from "../../assets/img/pizzas@2x.png";

const imgs = {
  entries,
  meats,
  fish,
  pastas,
  omelets,
  pizzas,
}

export default (data) => {
  return Object.keys(data).map((menuSection) => {
    return (`
      <section>
        <div class="section-header">
          <img src="${imgs[menuSection.toLocaleLowerCase()]}" />
          <div class="section-title">
            <h2>${data[menuSection].title}</h2>
            ${data[menuSection].subtitle ? `<h4>${data[menuSection].subtitle}</h4>` : ""}
          </div>
          <hr />
        </div>
        <ul class="section-body">
      ${data[menuSection].items.map(
        (item) => (`
            <li class="menu-item">
              <div>
                <p class="item-title">${item.title}</p>
                ${item.description ? `<p class="item-description">${item.description}</p>` : ""}
              </div>
              <span class="price">${item.price}€</span>
            </li>
          `)
      ).join('')}
        </ul>
        <hr />
      </section>
    `);
  }).join('');
}