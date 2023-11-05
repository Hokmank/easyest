import * as o from "./src/index.mjs";
import { Button as i } from "./src/button/index.mjs";
import { Icon as m } from "./src/icon/index.mjs";
import { DatePicker as s } from "./src/datePicker/index.mjs";
import { ContentTitle as c } from "./src/contentTitle/index.mjs";
const r = {
  install: (t) => {
    for (const e in o)
      t.use(o[e]);
  }
};
export {
  i as Button,
  c as ContentTitle,
  s as DatePicker,
  m as Icon,
  r as default
};
