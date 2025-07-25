# Automate hrworks

Let's be honest, interacting with HRWorks to start/stop working times is slow and error-prone (at least for the impatient among us).

This repository aims to provide a scriptable way of starting/stopping these timers.

## Usage 

- start: `pnpm sign-in`
- stop: `pnpm sign-out`

## Roadmap

1. MVP using playwright
	1. the bare minimum. not caching the session, loading the whole page, lot's of artificial timeouts  <-- you are here
	2. add installable script for convenient access
	3. cache login
	4. ...	
2. using the API
