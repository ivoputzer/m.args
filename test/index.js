const {deepStrictEqual} = require('assert')

test('lib.args', () => {
  const {parse} = require('..')

  test('parses one flag', () => {
    const parsed = parse(['--cwd', '.'])
    deepStrictEqual(parsed, {cwd: '.'})
  })

  test('parses numeric flag', () => {
    const parsed = parse(['--port', '8080'])
    deepStrictEqual(parsed, {port: 8080})
  })

  test('parses multiple flag', () => {
    const parsed = parse(['--port', '8080', '--cwd', '.'])
    deepStrictEqual(parsed, {port: 8080, cwd: '.'})
  })

  test('flags without value should be boolean', () => {
    const parsed = parse(['--active', '--port', '8080', '--cwd', '.'])
    deepStrictEqual(parsed, {active: true, port: 8080, cwd: '.'})
  })

  test('flags without value should be boolean', () => {
    const parsed = parse(['--port', '8080', '--cwd', '.', '--active'])
    deepStrictEqual(parsed, {active: true, port: 8080, cwd: '.'})
  })

  test('parses multiple flag ignoring not paired options', () => {
    const parsed = parse(['--port', '8080', '--cwd', '.', '12'])
    deepStrictEqual(parsed, {port: 8080, cwd: '.'})
  })

  test('ignores items that not starts with --', () => {
    const parsed = parse(['should', 'be', 'ignored', '--port', '8080', '--cwd', '.'])
    deepStrictEqual(parsed, {port: 8080, cwd: '.'})
  })

  test('empty option if no flags', () => {
    const parsed = parse(['should', 'be', 'ignored'])
    deepStrictEqual(parsed, {})
  })
})
