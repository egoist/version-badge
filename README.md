# version-badge <sup>![version badge](https://version-badge.egoist.sh/github/egoist/version-badge)</sup>

> Display a version badge.

## What?

Designed to be put right next to your project title:

```markdown
# chalk <sup>![version badge](https://version-badge.egoist.sh/npm/chalk)</sup>
```

See the title of this README to get the idea :)

Of course you can link the svg to anywhere like the npm page:

```markdown
# chalk <sup>[![version badge](version-badge.egoist.sh/npm/chalk)](https://npmjs.com/package/chalk)</sup>
```

> **Note:** To make this service keep working, you can [donate](https://github.com/egoist/donate) to support my work.

## Usage

### npm

GET `/npm/:name`

Query:

- `tag`: Default `latest`. Release tag, eg: `beta`

Examples: 

- https://version-badge.egoist.sh/npm/vue
- https://version-badge.egoist.sh/npm/webpack
- https://version-badge.egoist.sh/npm/poi?tag=next

### github

Directly get the version from a file that's hosted on GitHub:

GET `/github/:owner/:repo`<br>
Alias `/gh/:owner/:repo`

Query:

- `file`: Default `package.json`
- `field`: Default `version`
- `branch`: Default `master`

Examples:

- https://version-badge.egoist.sh/github/zeit/next.js
- https://version-badge.egoist.sh/github/facebookincubator/create-react-app?file=packages/create-react-app/package.json

### rust crate

GET `/crate/:name`

Examples: 

- https://version-badge.egoist.sh/crate/rand
- https://version-badge.egoist.sh/crate/clap

## Prior Art

I made this service because following one does not support npm (directly) and mono repos.

- [npm-version-badge](https://github.com/teelaunch/npm-version-badge)

## License

MIT &copy; [EGOIST](github.com/EGOIST)
