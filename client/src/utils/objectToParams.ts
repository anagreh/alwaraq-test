type Params = {
  [key: string]: string[] | string;
};

const objectToParams = (obj: Params) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      value.forEach((val) => {
        if (val === "") return;
        params.append(key, val);
      });
    } else {
      if (value === "") continue;
      params.set(key, value);
    }
  }
  return params.toString();
};

export default objectToParams;
