# version-badge <sup>![version badge](https://version-badge.now.sh/gh/egoist/version-badge.svg)</sup>

> Display a version badge.

## What?

Designed to be put right next to your project title:

```markdown
# chalk <sup>![version badge](https://version-badge.now.sh/npm/chalk.svg)</sup>
```

See the title of this README to get the idea :)

Of course you can link the svg to anywhere like the npm page:

```markdown
# chalk <sup>[![version badge](https://version-badge.now.sh/npm/chalk.svg)](https://npmjs.com/package/chalk)</sup>
```

## Usage

### npm

GET `/npm/:name.svg`

Query:

- `tag`: Release tag, eg: `tag=beta`

Examples: 

- https://version-badge.now.sh/npm/vue.svg
- https://version-badge.now.sh/npm/webpack.svg
- https://version-badge.now.sh/npm/poi.svg?tag=next

### github

Directly get the version from a file that's hosted on GitHub:

GET `/gh/:owner/:repo.svg`

Query:

- `file`: Default `package.json`
- `field`: Default `version`
- `branch`: Default `master`

Examples:

- https://version-badge.now.sh/gh/zeit/next.js.svg
- https://version-badge.now.sh/gh/facebookincubator/create-react-app.svg?file=packages/create-react-app/package.json

## License

MIT &copy; [EGOIST](github.com/EGOIST)
