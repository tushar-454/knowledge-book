const setDataLS = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

const getArrDataLS = (name) => {
  const strDataLS = localStorage.getItem(name);
  if (strDataLS) {
    return JSON.parse(strDataLS);
  }
  return [];
};

const getNumDataLS = (name) => {
  const strDataLS = localStorage.getItem(name);
  if (strDataLS) {
    return JSON.parse(strDataLS);
  }
  return 0;
};

const addArrDataLS = (name, data) => {
  const storeData = getArrDataLS(name);
  storeData.push(data);
  setDataLS(name, storeData);
};

const addReadTimeLS = (name, data) => {
  if (localStorage.getItem(name)) {
    const curData = JSON.parse(localStorage.getItem(name));
    localStorage.setItem(name, parseInt(curData) + data);
  } else {
    localStorage.setItem(name, data);
  }
};

export { addArrDataLS, addReadTimeLS, getArrDataLS, getNumDataLS, setDataLS };
