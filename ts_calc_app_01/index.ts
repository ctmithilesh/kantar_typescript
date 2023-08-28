import { add } from "./modules/add";

// importing a default exported module 
import Num from "./modules/add/Num";

// importing a normal exported module
import { addNum } from "./modules/add/addNum";


const result = add(100, 200)

const r2 = addNum()
const r3 = Num()

