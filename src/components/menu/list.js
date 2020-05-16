export default (data) => {
  return Object.keys(data).map((menuSection) => {
    return (`
      <section>
        <h2>${menuSection}</h2>
        <ul>
      ${data[menuSection].map(
        (item) => {
          if (typeof item === "string") {
            return (`<li><p>${item}</p></li>`)
          }

          return (`<li><p>${item.title}</p><p>${item.description}</p></li>`)
        }
      ).join('')}
        </ul>
      </section>
    `);
  }).join('');
}