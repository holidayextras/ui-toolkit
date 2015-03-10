<img src="http://brand.holidayextras.com/img/hx-logo-2-spot-colours.png" height="100">

Holiday Extras UI Toolkit
---

##### Under Active Development

Requirements:
---

* [Node.js v10+](http://nodejs.org/) ( For Application Development )

If you are using Cordova, you will also need:

* [Cordova v3.8.0+](http://cordova.apache.org/)
* [Xcode](http://docs.phonegap.com/en/3.5.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide)
* [Android SDK](http://docs.phonegap.com/en/3.5.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide)


Install:
---

To install `ui-toolkit` locally for development:

```bash
cd /path/to/ui-toolkit
git clone git@github.com:holidayextras/ui-toolkit.git .
npm install
```

To view `ui-toolkit` in the browser:

```bash
cd /path/to/ui-toolkit
npm start
```

The `ui-toolkit` app will open in your default browser at [http://127.0.0.1:8080](http://127.0.0.1:8080)


Unit Tests:
---

You can use the following command in terminal to perform unit tests:

```bash
npm test
```

A code coverage report will be saved in `./coverage/PhantomJS.../index.html`

Grunt Terminal Commands:
---

You can use the following build commands via terminal:

#### Build for Distribution:

The following command will compile Less Styles into a CSS and Concat JS files for Distribution.

This is the most common command you will want to use and is required to view any changed you made in a browser or simulator.

```bash
grunt build:dist
```

#### Build for iOS or Android:

The following commands will build either iOS or Android versions of the app to their respective ./platorms folder.

```bash
grunt build:app_ios
```

```bash
grunt build:app_android
```

#### Running iOS Simulator:

The following commands will first Build for Distribution and run iOS Simulation for the respective device.

```bash
grunt emulate:iphone_4s
```

```bash
grunt emulate:iphone_5
```

```bash
grunt emulate:iphone_5s
```

```bash
grunt emulate:iphone_6
```

```bash
grunt emulate:iphone_6_plus
```

```bash
grunt emulate:iphone_resizable
```

```bash
grunt emulate:ipad_2
```

```bash
grunt emulate:ipad_retina
```

```bash
grunt emulate:ipad_air
```

```bash
grunt emulate:ipad_resizable
```

#### Compile Less files into CSS:

This will compile all the files in `src/less` and generate the `www/css/toolkit.min.css` file

```bash
grunt less:dist
```

#### Create a Release:

```bash
grunt release
```

#### Create a Major Release:

The following will:

1. Increase the build's major number ( e.g. v __1__.2.3 => v __2__.0.0 )
2. Build & Package Distribution Files
3. Create Tag Branch & Perform a git commit

```bash
grunt release-major
```

#### Create a Minor Release:

The following will:

1. Increase the build's minor number ( e.g. v 1.__2__.3 => v 1.__3__.0 )
2. Build & Package Distribution Files
3. Create Tag Branch & Perform a git commit

```bash
grunt release-minor
```

#### Create a Release Patch:

The following will:

1. Increase the build's patch number ( e.g. v 1.2.__3__ => v 1.2.__4__ )
2. Build & Package Distribution Files
3. Create Tag Branch & Perform a git commit

```bash
grunt release-patch
```

#### Create a Pre-Release:

The following will:

1. Build & Package Distribution Files
2. Perform a git commit

```bash
grunt prerelease
```