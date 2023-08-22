import Counter from "./Counter";
import Tapestry from "./Tapestry";

/*const tools_lst = 
    "counter": ["Counter.tsx", "Stitch counter", Counter],
    "tapestry_pattern_editor": ["Tapestry.tsx", "Tapestry Pattern Editor", Tapestry],
}*/

interface Tool {
    name: string;
    title: string;
    url: string;
    component: any;
    location: string;
}

const tools_lst: Tool[] = [
    {
        name: "counter",
        title: 'Stitch Counter',
        url: '/counter',
        component: Counter,
        location: "Counter.tsx"
    },
    {
        name: "tapestry_pattern_editor",
        title: 'Tapestry Pattern Editor',
        url: '/tapestry-editor',
        component: Tapestry,
        location: "Tapestry.tsx"
    },
]

export default tools_lst;