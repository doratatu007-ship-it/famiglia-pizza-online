export type MenuItem = { name: string; ingredients: string; featured?: boolean };
export type MenuCategory = { id: string; name: string; icon: string; items: MenuItem[] };

export const menuCategories: MenuCategory[] = [
  { id: "tradicionais", name: "Pizzas Tradicionais", icon: "🍕", items: [
    ["Calabresa com Queijo","Mussarela, molho de tomate artesanal, calabresa, cebola e orégano",true],
    ["Mista","Mussarela, molho de tomate artesanal, presunto e orégano"],
    ["Mussarela","Mussarela, molho de tomate artesanal e orégano"],
    ["Napolitana","Mussarela, molho de tomate, tomate, parmesão e orégano"],
    ["Coliseu","Mussarela, molho de tomate artesanal, provolone e alho frito"],
    ["Presunto Real","Mussarela, molho de tomate artesanal, farofa de presunto crocante e orégano"],
    ["Canadense","Mussarela, molho de tomate artesanal, lombinho canadense, Catupiry® e orégano"],
    ["Mafiosa","Mussarela, molho de tomate artesanal, calabresa, bacon, ovo, parmesão, cebola, azeitona preta e orégano",true],
    ["Fazendeira","Mussarela, filé de peito de frango desfiado, bacon crocante, milho e orégano"],
    ["Gran Calabria","Mussarela, calabresa, bacon crocante, molho de tomate artesanal, cream cheese, alho frito e orégano"],
    ["Broccoli Supreme","Mussarela, brócolis salteado, bacon crocante, molho de tomate, Catupiry®, alho frito e orégano"],
    ["Três Queijos","Mussarela, molho de tomate artesanal, parmesão, Catupiry® e orégano"],
    ["Havaiana","Mussarela, molho de tomate artesanal, pernil defumado à lenha, abacaxi caramelizado e orégano"],
    ["Felicitá","Mussarela, molho de tomate artesanal, tomate seco artesanal, manjericão e azeitona preta"],
    ["Pork-Cheese","Mussarela, molho de tomate artesanal, pernil defumado à lenha, cream cheese e cebolinha"],
    ["Margherita Especial","Mussarela, molho de tomate artesanal, tomate-cereja, parmesão e manjericão fresco"],
  ].map(([name,ingredients,featured])=>({name:name as string,ingredients:ingredients as string,featured:Boolean(featured)})) },
  { id: "favoritas", name: "Pizzas Favoritas", icon: "🍕", items: [
    ["Quatro Queijos","Mussarela, molho de tomate artesanal, parmesão, provolone, gorgonzola e orégano"],
    ["Portuguesa","Mussarela, molho de tomate artesanal, presunto, ovo, azeitona preta, cebola, tomate e orégano"],
    ["À Moda da Casa","Mussarela, molho de tomate artesanal, lombinho, bacon, calabresa e milho"],
    ["Bacon com Catupiry","Mussarela, molho de tomate artesanal, bacon em cubos, Catupiry® e orégano"],
    ["Catupirela","Mussarela, molho de tomate artesanal, calabresa, Catupiry® e orégano"],
    ["Marguerita","Mussarela, molho de tomate artesanal, parmesão, manjericão e tomate"],
    ["Mista da Casa","Mussarela, molho de tomate artesanal, presunto, calabresa, cebola e orégano"],
    ["Cheese Pepper","Mussarela, molho de tomate artesanal, pepperoni, cream cheese, alho frito e orégano",true],
    ["Pepperoni","Mussarela, molho de tomate artesanal, pepperoni, azeitona preta e orégano"],
    ["Peito de Peru","Mussarela, molho de tomate artesanal, peito de peru, Catupiry® e orégano"],
    ["Suíça","Mussarela, molho de tomate artesanal, filé de peito de frango, Catupiry® e orégano"],
    ["Toscana","Mussarela, molho de tomate artesanal"],
  ].map(([name,ingredients,featured])=>({name:name as string,ingredients:ingredients as string,featured:Boolean(featured)})) },
  { id: "gourmet", name: "Pizzas Gourmet", icon: "🍕", items: [
    ["Pizza da Mama","Mussarela, molho de tomate artesanal, presunto parma, rúcula e tomate seco artesanal"],
    ["Nordestina","Mussarela, molho de tomate artesanal, carne seca, Catupiry®, queijo coalho, cebolinha, pimenta-biquinho e cebola roxa"],
    ["Paraense","Mussarela, molho de tomate artesanal, camarão, jambu e redução de tucupi",true],
    ["Verona","Mussarela, molho de tomate artesanal, Catupiry®, camarão e orégano"],
    ["Gamberi Cheese","Mussarela, molho de tomate artesanal, camarão-rosa, cream cheese e alho frito"],
  ].map(([name,ingredients,featured])=>({name:name as string,ingredients:ingredients as string,featured:Boolean(featured)})) },
  { id: "doces", name: "Pizzas Doces", icon: "🍫", items: [
    ["Banana de Nápoles","Mussarela, banana, leite condensado, açúcar e canela"],["Chocolate com M&M's","Mussarela, chocolate e M&M's"],["Chocolate ao Leite com Morango","Mussarela, chocolate e morango",true],["Oreo com Chocolate Branco","Mussarela, chocolate branco e biscoito Oreo"],["Branca de Neve","Mussarela e chocolate branco"],["Bis com Chocolate ao Leite","Mussarela, chocolate e Bis"]
  ].map(([name,ingredients,featured])=>({name:name as string,ingredients:ingredients as string,featured:Boolean(featured)})) },
  { id: "calzones", name: "Calzones", icon: "🥟", items: [
    ["Carne Seca com Catupiry e Banana","Carne seca, Catupiry® e banana"],["Filé com Parmesão","Filé e parmesão"],["Pepperoni","Pepperoni"],["4 Queijos","4 queijos"],["À Moda da Casa","Mussarela, lombinho, calabresa, bacon, milho e Catupiry®"],["Calabresa","Calabresa"],["Frango com Catupiry","Frango e Catupiry®"],["Bacon com Catupiry","Bacon e Catupiry®"],["Presunto com Mussarela","Presunto e mussarela"]
  ].map(([name,ingredients])=>({name,ingredients})) },
  { id: "bordas", name: "Bordas Recheadas", icon: "🧀", items: [
    ["Catupiry","Catupiry®"],["Catupiry com Frango","Catupiry® e frango"],["Catupiry com Alho","Catupiry® e alho"],["Catupiry com Bacon","Catupiry® e bacon"],["Cheddar","Cheddar"],["Cheddar com Bacon","Cheddar e bacon"],["Borda da Casa","Queijo, presunto e calabresa"],["Hot-Dog","Hot-dog"],["Cream Cheese Philadelphia","Cream cheese Philadelphia"],["Cream Cheese Philadelphia com Alho","Cream cheese Philadelphia e alho"],["Chocolate Branco","Chocolate branco"],["Chocolate ao Leite","Chocolate ao leite"]
  ].map(([name,ingredients])=>({name,ingredients})) },
  { id: "massas", name: "Massas e Pratos", icon: "🍝", items: [
    ["Chicken Caesar Salad","Filé de peito de frango, alface americana, tomate-cereja, croutons caseiros, molho Caesar e parmesão"],["Lasanha Bolonhesa","Massa artesanal Famiglia, mussarela e molho bolonhesa da casa"],["Lasanha Verde","Massa artesanal Famiglia com toque de jambu, queijo do Marajó e molho bechamel"],["Espaguete à Bolonhesa","Espaguete e molho bolonhesa da casa"],["Filé à Parmegiana do Chefe","Filé, farinha panko, mussarela, molho de tomate artesanal e fettuccine Alfredo"],["Filé Paillard","Filé mignon e fettuccine ao molho branco"],["Filé Al Capone","Filé mignon, arroz à piamontese e batatas fritas"],["Camarão Bonaparte","Camarões empanados e arroz à piamontese"]
  ].map(([name,ingredients])=>({name,ingredients})) },
  { id: "entradas", name: "Entradas", icon: "🍟", items: [
    ["Patatine","Nhoque de batata frito, queijo mussarela, bacon crocante e molho da casa"],["Crostine","Massa de pizza fina e crocante, azeite, orégano, parmesão e molho da casa"],["Arancini Famiglia","Bolinhos de arroz cremoso, mussarela, bacon, calabresa e farinha panko"]
  ].map(([name,ingredients])=>({name,ingredients})) },
  { id: "sobremesas", name: "Sobremesas", icon: "🍨", items: [
    ["Doce de Pote","210 g"],["Milk-Shakes Famiglia","Oreo, chocolate, açaí ou morango"],["Sorvete Ice Bode","—"]
  ].map(([name,ingredients])=>({name,ingredients})) },
  { id: "bebidas", name: "Bebidas", icon: "🥤", items: [
    ["Refri Lata","Refrigerante em lata"],["Refrigerante KS","Refrigerante"],["Água sem Gás","Água"],["Água com Gás","Água gaseificada"],["H20","H2O"],["Limoneto","Bebida sabor limão"],["Suco Natural","Laranja ou limão — 400 ml"],["Suco de Fruta","300 ml"],["Cerveja Long Neck","Cerveja"],["Cerveja Long Neck Premium","Cerveja premium"]
  ].map(([name,ingredients])=>({name,ingredients})) },
];
