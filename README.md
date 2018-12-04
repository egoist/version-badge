# version-badge <sup>![version badge](https://version-badge.now.sh/github/egoist/version-badge)</sup>

> Display a version badge.

## What?

Designed to be put right next to your project title:

```markdown
# chalk <sup>![version badge](https://version-badge.now.sh/npm/chalk)</sup>
```

See the title of this README to get the idea :)

Of course you can link the svg to anywhere like the npm page:

```markdown
# chalk <sup>[![version badge](version-badge.now.sh/npm/chalk)](https://npmjs.com/package/chalk)</sup>
```

> **Note:** To make this service keep working, you can [donate](https://github.com/egoist/donate) to support my work.

## Usage

### npm

GET `/npm/:name.svg`

Query:

- `tag`: Default `latest`. Release tag, eg: `beta`

Examples: 

- https://version-badge.now.sh/npm/vue
- https://version-badge.now.sh/npm/webpack
- https://version-badge.now.sh/npm/poi?tag=next

### github

Directly get the version from a file that's hosted on GitHub:

GET `/github/:owner/:repo`

Query:

- `file`: Default `package.json`
- `field`: Default `version`
- `branch`: Default `master`

Examples:

- https://version-badge.now.sh/github/zeit/next.js
- https://version-badge.now.sh/github/facebookincubator/create-react-app?file=packages/create-react-app/package.json

## Prior Art

I made this service because following one does not support npm (directly) and mono repos.

- [npm-version-badge](https://github.com/teelaunch/npm-version-badge)

## License

MIT &copy; [EGOIST](github.com/EGOIST)
