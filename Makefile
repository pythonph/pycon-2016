all:
	lektor build

update:
	git pull --ff-only

deploy: update all
	lektor deploy

.PHONY: all update deploy
