# version-badge <sup>![version badge](https://v.egoist.moe/gh/egoist/version-badge.svg)</sup>

> Display a version badge.

## What?

Designed to be put right next to your project title:

```markdown
# chalk <sup>![version badge](https://v.egoist.moe/npm/chalk.svg)</sup>
```

See the title of this README to get the idea :)

Of course you can link the svg to anywhere like the npm page:

```markdown
# chalk <sup>[![version badge](https://v.egoist.moe/npm/chalk.svg)](https://npmjs.com/package/chalk)</sup>
```

> **Note:** To make this service keep working, you can [donate](https://github.com/egoist/donate) to support my work.

## Usage

### npm

GET `/npm/:name.svg`

Query:

- `tag`: Default `latest`. Release tag, eg: `beta`

Examples: 

- https://v.egoist.moe/npm/vue.svg
- https://v.egoist.moe/npm/webpack.svg
- https://v.egoist.moe/npm/poi.svg?tag=next

### github

Directly get the version from a file that's hosted on GitHub:

GET `/gh/:owner/:repo.svg`

Query:

- `file`: Default `package.json`
- `field`: Default `version`
- `branch`: Default `master`

Examples:

- https://v.egoist.moe/gh/zeit/next.js.svg
- https://v.egoist.moe/gh/facebookincubator/create-react-app.svg?file=packages/create-react-app/package.json

## Prior Art

I made this service because following one does not support npm (directly) and mono repos.

- [npm-version-badge](https://github.com/teelaunch/npm-version-badge)

## License

MIT &copy; [EGOIST](github.com/EGOIST)
