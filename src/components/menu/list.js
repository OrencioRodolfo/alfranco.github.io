import entries from "../../assets/img/entradas.png";
import meats from "../../assets/img/carnes.png";
import fish from "../../assets/img/peixe.png";
import pastas from "../../assets/img/massas.png";
import omelets from "../../assets/img/omeletes.png";
import pizzas from "../../assets/img/pizzas.png";

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