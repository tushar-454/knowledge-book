const setDataLS = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

const getDataLS = (name) => {
  const strDataLS = localStorage.getItem(name);
  if (strDataLS) {
    return JSON.parse(strDataLS);
  }
  return [];
};

const addDataLS = (name, data) => {
  const storeData = getDataLS(name);
  storeData.push(data);
  setDataLS(name, storeData);
};

const addReadTimeLS = (name, data) => {
  if (localStorage.getItem(name)) {
    const curData = JSON.parse(localStorage.getItem(name));
    setDataLS(name, curData + data);
  } else {
    setDataLS(name, data);
  }
};

export { addDataLS, addReadTimeLS, getDataLS, setDataLS };
