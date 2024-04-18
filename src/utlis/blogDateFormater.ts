export const formatDate = (blogDate: string) => {
  const mounths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Devember",
  ];
  const date = new Date(blogDate);

  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();

  const mounth = mounths[m];

  const formatedDate = `${mounth} ${Number(d)}th, ${y}`;

  return formatedDate;
};
