# working with the test-suite

The repository includes a `test-suite` with example files that are being tested with tests that are stored in `tests\e2e\specs`. The goal of these tests is to asses whether bindings (state, getters, mutations, actions) are actually made and functioning.

If you install the repository and run:

```bash
npm start serve
```

Open the url provided by the server.

## Automated Testing

To run the tests you could work with a headless version of chrome by running a docker instance:
 
 First  [install docker](https://hub.docker.com/?overlay=onboarding) if you haven't done already.

Then run:

```bash
docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:3.141.59-vanadium
```

You should be able to run the tests:

```bash
npm run test:e2e
```

