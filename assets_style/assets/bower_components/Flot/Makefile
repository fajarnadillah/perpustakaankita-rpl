<<<<<<< HEAD
# Makefile for generating minified files

.PHONY: all

# we cheat and process all .js files instead of an exhaustive list
all: $(patsubst %.js,%.min.js,$(filter-out %.min.js,$(wildcard *.js)))

%.min.js: %.js
	yui-compressor $< -o $@

test:
	./node_modules/.bin/jshint *jquery.flot.js
=======
# Makefile for generating minified files

.PHONY: all

# we cheat and process all .js files instead of an exhaustive list
all: $(patsubst %.js,%.min.js,$(filter-out %.min.js,$(wildcard *.js)))

%.min.js: %.js
	yui-compressor $< -o $@

test:
	./node_modules/.bin/jshint *jquery.flot.js
>>>>>>> b25a00fcb1272ed18538d57426506e9359084f17
