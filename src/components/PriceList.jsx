function PriceList({ offers }) {

  if (!offers?.length) {
    return <p>Nenhuma oferta encontrada no momento.</p>;
  }

  const lowestPrice = Math.min(...offers.map(o => o.price || Infinity));

  return (
    <div>
      <h2>Ofertas encontradas</h2>

      {offers.map((offer, index) => (
        <div className="card" key={index}>

          <h3>{offer.title}</h3>

          <p>
            <strong>Loja:</strong> {offer.store}
          </p>

          <p>
            <strong>Preço:</strong> {offer.currency} {offer.price}
          </p>

          {offer.price === lowestPrice && (
            <p style={{color:"green"}}>
              ⭐ Melhor preço
            </p>
          )}

          <a href={offer.link} target="_blank">
            Ver oferta
          </a>

        </div>
      ))}
    </div>
  );
}

export default PriceList;