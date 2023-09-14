interface Day {
    day: Record<string, JSONArray>
}

interface Hour {
    temp_c: string,
    time: string,
    condition: Condition
}

interface Condition {
    icon: string
}

type JSONvalue = string | number | string[] | Array<JSONvalue> | Hour;


interface JSONArray extends Array<Hour> { }