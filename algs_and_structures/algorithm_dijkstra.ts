// Поиск кратчайшего пути в графе
// В алгоритме Дейкстры учитывается и длина пройденного ребра (называемый вес)

function findNodeLowestCost(costs, processed) {
    let lowestCost = 100000000
    let lowestNode;
    
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    
    return lowestNode
}

type GraphType = {
  [key: string]: number | {}
}

const graph: GraphType = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start: string, end: string) {
    const costs = {} as GraphType
    const processed = [] as GraphType[]
    let neighbors = {}
    
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || 100000000
        }
    })
    
    let node = findNodeLowestCost(costs, processed)
    
    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        
        processed.push(node)
        node = findNodeLowestCost(costs, processed)
    }
    
    return costs
}




console.log(shortPath(graph, 'a', 'g'));
