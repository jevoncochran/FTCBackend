exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('administrators').truncate()
  // .then(function () {
  // Inserts seed entries
  return knex("products").insert([
    {
      item: "Community Support Box",
      item_es: "Caja de apoyo comunitario",
      summary: "Buy One - Help One!",
      summary_es: "Compre uno - ¡Ayude a uno!",
      price: 35.0,
      main_image:
        "https://firebasestorage.googleapis.com/v0/b/farms2communities.appspot.com/o/images%2Fbox-option1.jpg?alt=media&token=bae8c79b-89ab-42b2-9637-3f7dd9b48e6a",
      route: "community-support-box",
      description1:
        "Receive a generous assortment of fresh fruits and vegetables from local organic and sustainable farms – delivered to your home!",
      description1_es:
        "Reciba una generosa variedad de frutas y verduras frescas de granjas orgánicas y sostenibles locales, ¡entregadas en su hogar!",
      description2:
        "Deliveries weigh between 12-15 pounds and may include: Avocados, bananas, berries, lettuce, tomatoes, potatoes, onions, peppers, sweet potatoes, greens, cilantro, corn, melons, squash and an assortment of other fresh food from local farms.",
      description2_es:
        "Las entregas pesan entre 12 y 15 libras y pueden incluir: aguacates, plátanos, bayas, lechuga, tomates, papas, cebollas, pimientos, camotes, verduras, cilantro, maíz, melones, calabazas y una variedad de otros alimentos frescos de granjas locales.",
      stripe_price_id: "price_1IgFHbLbsa7wJ0xu6tapf330",
    },
    {
      item: "Mutual Aid Box",
      item_es: "Caja de apoyo mutuo",
      summary: "$10/Week For Qualified Families",
      summary_es: "$ 10 / semana para familias calificadas",
      price: 10.0,
      main_image:
        "https://firebasestorage.googleapis.com/v0/b/farms2communities.appspot.com/o/images%2Fbox-option2.jpg?alt=media&token=d08b6ffb-f52f-4315-8a7f-2a614f0ccd89",
      route: "mutual-aid-box",
      description1:
        "Qualified families can receive a generous assortment of fresh fruits and vegetables from local organic and sustainable farms – delivered to your home. The standard price is $35. Enter the promo code that you were given via the email from OUSD – and sign up for weekly deliveries for just $10.",
      description1_es:
        "Las familias calificadas pueden recibir una generosa variedad de frutas y verduras frescas de granjas orgánicas y sostenibles locales, entregadas en su hogar. El precio estándar es de $ 35. Ingrese el código de promoción que recibió a través del correo electrónico de OUSD y regístrese para recibir entregas semanales por solo $ 10.",
      stripe_price_id: "price_1IgFINLbsa7wJ0xu82nINQq2",
    },
    // {
    //   item: "Donation",
    // },
  ]);
  // });
};
