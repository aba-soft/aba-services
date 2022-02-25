const dataZ: Record<string, Record<string, number>> = {
  "1": {
    "1": 0,
    "2": 1,
  },
  "4": {
    "1": 0,
    "2": 1,
  },
  "8": {
    "1": 0,
    "2": 1,
  },
  "15": {
    "1": 0,
    "2": 1,
  },
  "22": {
    "1": 0,
    "2": 1,
  },
  "24": {
    "1": 0,
    "2": 1,
  },
  "30": {
    "1": 0,
    "2": 1,
  },
  "34": {
    "1": 0,
    "2": 1,
  },
  "36": {
    "1": 0,
    "2": 1,
  },
  "37": {
    "1": 0,
    "2": 1,
  },
  "44": {
    "1": 0,
    "2": 1,
  },
  "55": {
    "1": 0,
    "2": 1,
  },
  "56": {
    "1": 0,
    "2": 1,
  },
  "58": {
    "1": 0,
    "2": 1,
  },
  "62": {
    "1": 0,
    "2": 1,
  },
  "63": {
    "1": 0,
    "2": 1,
  },
  "70": {
    "1": 0,
    "2": 1,
  },
  "74": {
    "1": 0,
    "2": 1,
  },
  "75": {
    "1": 0,
    "2": 1,
  },
  "76": {
    "1": 0,
    "2": 1,
  },
  "83": {
    "1": 0,
    "2": 1,
  },
  "84": {
    "1": 0,
    "2": 1,
  },
  "86": {
    "1": 0,
    "2": 1,
  },
  "99": {
    "1": 0,
    "2": 1,
  },
  "111": {
    "1": 0,
    "2": 1,
  },
  "123": {
    "1": 0,
    "2": 1,
  },
  "128": {
    "1": 0,
    "2": 1,
  },
  "133": {
    "1": 0,
    "2": 1,
  },
  "134": {
    "1": 0,
    "2": 1,
  },
  "142": {
    "1": 0,
    "2": 1,
  },
  "145": {
    "1": 0,
    "2": 1,
  },
  "150": {
    "1": 0,
    "2": 1,
  },
  "171": {
    "1": 0,
    "2": 1,
  },
};

export function formulaZ(fields: Record<string, number>) {
  let Z = 0;
  const keys = Object.keys(dataZ);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const field = fields[`${key}`];
    Z = Z + dataZ[key][field];
  }
  return Z;
}