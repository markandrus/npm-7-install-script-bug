NPM 7 Install Script Bug
========================

This project demonstrates a potential issue with NPM 7, install scripts, and
dependencies. In order to test this, run

```
npm install
```

in the root directory. This will attempt to install `@markandrus/npm-7-install-script-bug-dependency`
from NPM. This package declares a dependency on `node-pre-gyp` and includes an
install script for invoking `node-pre-gyp`. In NPM <7, the install script
successfully invokes `node-pre-gyp`; in NPM 7, the install script does not have
access to `node-pre-gyp` and fails.
