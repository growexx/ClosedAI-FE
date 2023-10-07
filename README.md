## Features

<dl>
  <dt>Multiple File Upload</dt>

  <dt>Event Source Management</dt>

  <dt>Mindmap generation using React Flow</dt>

  <dt>Download Mindmap to png format</dt>

  <dt>Export user stories to csv format</dt>

  <dt>Industry-standard routing</dt>

## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone https://github.com/rushil-growexxer/ClosedAI.git`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm install --legay-peer-deps` in order to install dependencies <br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._

Now you're ready to rumble!


## License

This project is licensed under the MIT license, Copyright (c) 2019 Maximilian
Stoiber. For more information see `LICENSE.md`.

## Commit Tools Setup

For commit, we use [commitizen](https://github.com/commitizen/cz-cli) so the commit messages are in the same format for all the developers. This formatted messages are used in to create change logs.

1. Install Globally Commitizen `npm install -g commitizen`
2. Install Adapter `npm install -g cz-conventional-changelog`
3. Set as default adapter for your projects `echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc`
4. Usage: now instead of using `git commit` use `git cz`
5. If you want to use commit messages with emojis you can use following package
6. Install Adapter `npm install --global cz-emoji`
7. Set as default adapter for your projects `echo '{ "path": "cz-emoji" }' > ~/.czrc`
8. Usage `git cz`
