exports.parse = (argv, {assign} = Object, {normalize} = exports) => {
  return argv.reduce((args, arg, i, list) => {
    const [name, value = list[i + 1]] = arg.split('=', 2) // supports either spaces and equal separators
    if (!name.startsWith('--')) return args
    return assign(args, {
      [name.slice(2)]: `${value}`.startsWith('--') || normalize(value)
    })
  }, {})
}

exports.normalize = (value, {parse} = JSON, {normalize} = exports) => {
  if (value === undefined) return true
  try {
    return parse(value)
  } catch (e) {
    return normalize(`"${value}"`)
  }
}
