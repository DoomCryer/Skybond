import moment from "moment";

const allData = [
  { date: "02-05-2015", price: 20.5, yield: 70, spread: 300.44 },
  { date: "02-05-2016", price: 24.5, yield: 90, spread: 350.44 },
  { date: "02-01-2017", price: 29.5, yield: 90, spread: 400.44 },
  { date: "02-02-2017", price: 22.5, yield: 110, spread: 444.44 },
  { date: "05-02-2017", price: 23.5, yield: 100, spread: 644.44 },
  { date: "08-02-2017", price: 29.5, yield: 105, spread: 744.44 },
  { date: "11-02-2017", price: 33.5, yield: 110, spread: 844.44 },
  { date: "14-02-2017", price: 33.75, yield: 120, spread: 744.44 },
  { date: "17-02-2017", price: 32.5, yield: 140, spread: 844.44 },
  { date: "20-02-2017", price: 31.5, yield: 150, spread: 944.44 },
  { date: "23-02-2017", price: 32.75, yield: 130, spread: 974.44 },
  { date: "26-02-2017", price: 34.5, yield: 110, spread: 999.44 },
  { date: "02-03-2017", price: 35.5, yield: 100, spread: 999.44 }
];

const getBondData = (bondId, date, depth, type) => {
  // Если брать данные с реального сервера, надо расчитать дату начала выборки
  // const endDate = moment(date, "DD-MM-YYYY");
  // let startDate;
  // switch (depth) {
  //   case "week":
  //     startDate = endDate.subtract(7, 'd')
  //     break;
  //   case "month":
  //   startDate = endDate.subtract(1, 'M')
  //     break;
  //     ...
  //
  console.log(depth);

  let data, result;
  switch (depth) {
    case "week":
      data = allData.slice(9, 12);
      break;
    case "month":
      data = allData.slice(3, 12);
      break;
    case "quarter":
      data = allData.slice(2, 12);
      break;
    case "year":
      data = allData.slice(1, 12);
      break;
    case "max":
      data = allData;
      break;
  }

  switch (type) {
    case "price":
      result = data.map(item => ({ x: item.date, y: item.price }));
      break;
    case "yield":
      result = data.map(item => ({ x: item.date, y: item.yield }));
      break;
    case "spread":
      result = data.map(item => ({ x: item.date, y: item.spread }));
      break;
  }
  console.log("Result ", result);

  return result;
};

export { getBondData };
