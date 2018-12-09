const jasmine2OutputWithAFailure = `
> Executing task: npm run test <


> my-app@0.0.0 test /Users/heythere/workspace/my-app
> ng test

 10% building modules 2/2 modules 0 active07 12 2018 12:24:43.692:WARN [karma]: No captured browser, open http://localhost:9876/
07 12 2018 12:24:43.694:INFO [karma-server]: Karma v3.1.3 server started at http://0.0.0.0:9876/
07 12 2018 12:24:43.695:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
07 12 2018 12:24:43.708:INFO [launcher]: Starting browser Chrome
07 12 2018 12:24:46.560:WARN [karma]: No captured browser, open http://localhost:9876/
07 12 2018 12:24:46.689:INFO [Chrome 70.0.3538 (Mac OS X 10.13.6)]: Connected on socket R5KrEfzZnP_gQIXWAAAA with id 28830345
Chrome 70.0.3538 (Mac OS X 10.13.6) AppComponent should have as title 'my-app' FAILED
        Expected 'my-app' to equal 'my-app aoeu'.
            at UserContext.<anonymous> (http://localhost:9876/src/app/app.component.spec.ts?:22:23)
            at ZoneDelegate../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke (http://localhost:9876/node_modules/zone.js/dist/zone.js?:388:1)
            at ProxyZoneSpec.push../node_modules/zone.js/dist/zone-testing.js.ProxyZoneSpec.onInvoke (http://localhost:9876/node_modules/zone.js/dist/zone-testing.js?:288:1)
            at ZoneDelegate../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke (http://localhost:9876/node_modules/zone.js/dist/zone.js?:387:1)
Chrome 70.0.3538 (Mac OS X 10.13.6): Executed 2 of 3 (1 FAILED) (0 secs / 0.172 secs)
Chrome 70.0.3538 (Mac OS X 10.13.6) AppComponent should have as title 'my-app' FAILED
        Expected 'my-app' to equal 'my-app aoeu'.
            at UserContext.<anonymous> (http://localhost:9876/src/app/app.component.spec.ts?:22:23)
            at ZoneDelegate../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke (http://localhost:9876/node_modules/zone.js/dist/zone.js?:388:1)
            at ProxyZoneSpec.push../node_modules/zone.js/dist/zone-testing.js.ProxyZoneSpec.onInvoke (http://localhost:9876/node_modules/zone.js/dist/zone-testing.js?:288:1)
            at ZoneDelegate../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke (http:Chrome 70.0.3538 (Mac OS X 10.13.6): Executed 3 of 3 (1 FAILED) (0.213 secs / 0.193 secs)
TOTAL: 1 FAILED, 2 SUCCESS
TOTAL: 1 FAILED, 2 SUCCESS
`;

const jasmine2OutputWithNoFailure = `
> Executing task: npm run test <


> myapp@0.0.0 test C:\\Users\\heythere\\workspace\\myapp1
> ng test

 10% building modules 6/6 modules 0 active09 12 2018 19:42:04.286:WARN [karma]: No captured browser, open http://localhost:9876/
09 12 2018 19:42:04.312:INFO [karma-server]: Karma v3.1.3 server started at http://0.0.0.0:9876/
09 12 2018 19:42:04.312:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
09 12 2018 19:42:04.371:INFO [launcher]: Startin09 12 2018 19:42:28.755:WARN [karma]: No captured browser, open http://localhost:9876/
09 12 2018 19:42:29.971:INFO [Chrome 70.0.3538 (Windows 10.0.0)]: Connected on socket s5ovkUjBykDMegkaAAAA with id 59307435
Chrome 70.0.3538 (Windows 10.0.0): Executed 3 of 3 SUCCESS (0.518 secs / 0.496 secs)
TOTAL: 3 SUCCESS
TOTAL: 3 SUCCESS
`;

const jasmine3OutputWithAFailure = `
> Executing task: npm run test <


> my-app@0.0.0 test /Users/heythere/workspace/my-app
> ng test

 10% building modules 2/2 modules 0 active10 12 2018 11:24:14.756:WARN [karma]: No captured browser, open http://localhost:9877/
10 12 2018 11:24:14.759:INFO [karma-server]: Karma v3.1.1 server started at http://0.0.0.0:9877/
10 12 2018 11:24:14.759:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
10 12 2018 11:24:14.770:INFO [launcher]: Starting browser ChromeHeadless
10 12 2018 11:24:21.418:WARN [karma]: No captured browser, open http://localhost:9877/
10 12 2018 11:24:21.550:INFO [HeadlessChrome 0.0.0 (Mac OS X 10.13.6)]: Connected on socket jYYZ-MuTdkKDrWhuAAAA with id 44546117
HeadlessChrome 0.0.0 (Mac OS X 10.13.6) AppComponent should have as title 'my-app' FAILED
	Error: Expected 'my-app' to equal 'my-app aoeu'.
	    at <Jasmine>
	    at UserContext.<anonymous> (http://localhost:9877/src/app/app.component.spec.ts?:33:54)
	    at ZoneDelegate../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke (http://localhost:9877/node_modules/zone.js/dist/zone.js?:388:1)
	    at ProxyZoneSpec.push../node_modules/zone.js/dist/zone-testing.js.ProxyZoneSpec.onInvoke (http://localhost:9877/node_modules/zone.js/dist/zone-testing.js?:288:1)
HeadlessChrome 0.0.0 (Mac OS X 10.13.6): Executed 2 of 3 (1 FAILED) (0 secs / 6.347 secs)
HeadlessChrome 0.0.0 (Mac OS X 10.13.6) AppComponent should have as title 'my-app' FAILED
	Error: Expected 'my-app' to equal 'my-app aoeu'.
	    at <Jasmine>
	    at UserContext.<anonymous> (http://localhost:9877/src/app/app.component.spec.ts?:33:54)
	    at ZoneDelegate../node_modules/zone.js/dist/zone.js.ZoneDelegate.invoke (http://localhost:9877/node_modules/zone.js/dist/zone.js?:388:1)
HeadlessChrome 0.0.0 (Mac OS X 10.13.6): Executed 3 of 3 (1 FAILED) (7.044 secs / 6.382 secs)
TOTAL: 1 FAILED, 2 SUCCESS
TOTAL: 1 FAILED, 2 SUCCESS
`;

const jasmine3OutputWithNoFailure = `
> Executing task: npm run test <


> my-app@0.0.0 test /Users/heythere/workspace/my-app
> ng test

 10% building modules 2/2 modules 0 active10 12 2018 11:22:47.831:WARN [karma]: No captured browser, open http://localhost:9877/
10 12 2018 11:22:47.834:INFO [karma-server]: Karma v3.1.1 server started at http://0.0.0.0:9877/
10 12 2018 11:22:47.834:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
10 12 2018 11:22:47.838:INFO [launcher]: Starting browser ChromeHeadless
10 12 2018 11:22:54.740:WARN [karma]: No captured browser, open http://localhost:9877/
10 12 2018 11:22:54.867:INFO [HeadlessChrome 0.0.0 (Mac OS X 10.13.6)]: Connected on socket y_o3iQDHFPLPl6AyAAAA with id 13132399
HeadlessChrome 0.0.0 (Mac OS X 10.13.6): Executed 3 of 3 SUCCESS (6.994 secs / 6.336 secs)
TOTAL: 3 SUCCESS
TOTAL: 3 SUCCESS
`;

export default {
    jasmine2OutputWithAFailure,
    jasmine2OutputWithNoFailure,
    jasmine3OutputWithAFailure,
    jasmine3OutputWithNoFailure,
};