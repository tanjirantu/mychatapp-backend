export default (o: object) => Object.keys(o).length === 0 && o.constructor === Object;