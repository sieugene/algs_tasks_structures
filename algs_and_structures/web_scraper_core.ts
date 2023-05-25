function fetchFlights(from: string): Promise<string[]> { return Promise.resolve(['A', 'B', 'C'])}

// graph = {A: [B, D], B: [C, N, Z], C: [D,E,F], F: [S]}

findPath('A', 'N', fetchFlights) //Promise.resolve(['A', 'B','C'])
findPath('A', 'N', fetchFlights) //Promise.reject(new Error('No way points'))

type FetchFlightsType = typeof fetchFlights

async function findPath(from: string, to: string, fetchFlights: FetchFlightsType ) {
    const queue = [from]
    const routes = new Map()

    routes.set(from, [from])

    while (queue.length > 0) {
        const node = queue.pop()
        const neighbours = await fetchFlights(node!)

        if(!neighbours) {
            continue
        }

        for(const neighbour of neighbours) {
            if(!routes.has(neighbour)) {
                queue.push(neighbour)
            }

            routes.set(neighbour, node)

            if (to === neighbour) {
                let startPoint = routes.get(neighbour)

                if (!startPoint) return Promise.resolve([to])

                let result = [to, startPoint]

                while(startPoint !== from) {
                    startPoint = routes.get(startPoint)
                    result.push(startPoint)
                }

                return Promise.resolve(routes.get(result.reverse()))
            }
        }
    }

    return Promise.reject(new Error('No way points'))
}