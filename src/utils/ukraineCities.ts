export interface UkraineCity {
  name: string;
}

export const ukraineCities: UkraineCity[] = [
  { name: "Kyiv" },
  { name: "Kharkiv" },
  { name: "Odesa" },
  { name: "Dnipro" },
  { name: "Zaporizhzhia" },
  { name: "Lviv" },
  { name: "Kryvyi Rih" },
  { name: "Mykolaiv" },
  { name: "Vinnytsia" },
  { name: "Kherson" },
  { name: "Poltava" },
  { name: "Chernihiv" },
  { name: "Cherkasy" },
  { name: "Sumy" },
  { name: "Zhytomyr" },
  { name: "Khmelnytskyi" },
  { name: "Chernivtsi" },
  { name: "Rivne" },
  { name: "Kropyvnytskyi" },
  { name: "Ivano-Frankivsk" },
  { name: "Ternopil" },
  { name: "Lutsk" },
  { name: "Uzhhorod" },
];

export const searchCities = (query: string): UkraineCity[] => {
  const lowerQuery = query.toLowerCase();
  return ukraineCities.filter((city) =>
    city.name.toLowerCase().includes(lowerQuery),
  );
};
