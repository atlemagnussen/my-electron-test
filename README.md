# Electron test implementation

angular js with navigation and popout windows

## Dependencies
- Electron obviously
- Node.js

### Debug run
- `./node_modules/electron/dist/electron .`
- Or install electron globally `npm install electron -g` then run `electron .`

### Build
- Install electron-packager globally
	`npm install electron-packager -g`  
- then `electron-packager .` to just discover platform and architecture and use name/version from package.json  
  or run `build-win.bat` which is an example of using some of the build options

![electron test](https://storage.googleapis.com/atle-static/electron-test.jpg)